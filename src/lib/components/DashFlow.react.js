// DashFlow.react.js
import React, { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
    ReactFlow,
    Controls,
    MiniMap,
    Background,
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
    useViewport,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ELK from 'elkjs/lib/elk.bundled.js';

import ResizableNode from './ResizableNode';
import AnimatedCircleNode from './AnimatedCircleNode';
import DevTools from './DevTools';
import AnimatedNodeEdge from './AnimatedNodeEdge';

// Initialize ELK
const elk = new ELK();

// Node types definition
const nodeTypes = {
    resizable: ResizableNode,
    circle: AnimatedCircleNode,
};

// Edge types definition
const edgeTypes = {
    animated: AnimatedNodeEdge,
};

// Process Dash components
const processDashComponents = (nodes) => {
    if (!nodes) return [];

    const processComponent = (component) => {
        if (!component || typeof component === 'string') return component;

        if (component.props && component.props._dashprivate_layout) {
            const layout = component.props._dashprivate_layout;
            const processedChildren = Array.isArray(layout.props.children)
                ? layout.props.children.map(processComponent)
                : layout.props.children;

            return {
                type: layout.type,
                props: {
                    ...layout.props,
                    children: processedChildren,
                    key: layout.props.key || undefined,
                    style: layout.props.style || {}
                }
            };
        }

        return component;
    };

    return nodes.map(node => {
        if (!node.data.label || typeof node.data.label === 'string') {
            return node;
        }

        return {
            ...node,
            data: {
                ...node.data,
                label: processComponent(node.data.label)
            }
        };
    });
};

const FlowWithProvider = (props) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(props.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges);
    const { setViewport } = useViewport();

    const applyLayout = async (options) => {
        if (!options) return;

        try {
            const layoutOptions = JSON.parse(options);
            const graph = {
                id: 'root',
                layoutOptions: layoutOptions,
                children: nodes.map(node => {
                    // Special handling for circle nodes and animated nodes
                    const isCircleNode = node.type === 'circle' || edges.some(edge =>
                        edge.type === 'animated' && edge.data?.animatedNode === node.id
                    );

                    if (isCircleNode) {
                        return {
                            id: node.id,
                            width: 60,
                            height: 60,
                            ...node,
                        };
                    }

                    return {
                        id: node.id,
                        width: node.style?.width || 150,
                        height: node.style?.height || 50,
                        ...node
                    };
                }),
                edges: edges.map(edge => ({
                    id: edge.id,
                    sources: [edge.source],
                    targets: [edge.target],
                    ...edge
                }))
            };

            const layout = await elk.layout(graph);

            const layoutedNodes = layout.children.map((node) => {
                // Get the original node to preserve special properties
                const originalNode = nodes.find(n => n.id === node.id);

                return {
                    ...originalNode,
                    ...node,
                    position: { x: node.x, y: node.y },
                    style: originalNode.style,
                };
            });

            setNodes(layoutedNodes);
            props.setProps({ nodes: layoutedNodes });
        } catch (error) {
            console.error('Layout error:', error);
        }
    };

    useEffect(() => {
        if (props.layoutOptions) {
            applyLayout(props.layoutOptions);
        }
    }, [props.layoutOptions]);

    useEffect(() => {
        if (props.nodes !== nodes) {
            props.setProps({ nodes });
        }
    }, [nodes]);

    useEffect(() => {
        if (props.edges !== edges) {
            props.setProps({ edges });
        }
    }, [edges]);

    const onConnect = useCallback((params) => {
        const newEdge = { ...params, id: `e${params.source}-${params.target}` };
        setEdges((eds) => [...eds, newEdge]);
        props.setProps({ edges: [...edges, newEdge] });
    }, [edges, setEdges]);

    const processedNodes = useMemo(() => processDashComponents(nodes), [nodes]);

    return (
        <div style={{ width: '100%', height: '600px', ...props.style }}>
            <ReactFlow
                nodes={processedNodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                nodesDraggable={props.nodesDraggable}
                nodesConnectable={props.nodesConnectable}
                elementsSelectable={props.elementsSelectable}
                fitView
            >
                {props.showControls && <Controls />}
                {props.showMiniMap && <MiniMap />}
                {props.showBackground && <Background />}
                {props.showDevTools && <DevTools viewport={useViewport()} nodes={processedNodes} />}
            </ReactFlow>
        </div>
    );
};

const DashFlow = (props) => {
    return (
        <div id={props.id}>
            <ReactFlowProvider>
                <FlowWithProvider {...props} />
            </ReactFlowProvider>
        </div>
    );
};

DashFlow.defaultProps = {
    nodesDraggable: true,
    nodesConnectable: true,
    elementsSelectable: true,
    showMiniMap: true,
    showControls: true,
    showBackground: true,
    nodes: [],
    edges: [],
    style: {},
    className: '',
    showDevTools: false,
    layoutOptions: null,
};

DashFlow.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Enable/disable node dragging behavior
     */
    nodesDraggable: PropTypes.bool,

    /**
     * Enable/disable the ability to make new connections between nodes
     */
    nodesConnectable: PropTypes.bool,

    /**
     * Enable/disable the ability to select elements
     */
    elementsSelectable: PropTypes.bool,

    /**
     * Show/hide the minimap navigation component
     */
    showMiniMap: PropTypes.bool,

    /**
     * Show/hide the control panel
     */
    showControls: PropTypes.bool,

    /**
     * Show/hide the background pattern
     */
    showBackground: PropTypes.bool,

    /**
     * Array of nodes to display in the flow
     */
    nodes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        data: PropTypes.object.isRequired,
        position: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired,
        style: PropTypes.object
    })),

    /**
     * Array of edges defining connections between nodes
     */
    edges: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        type: PropTypes.string,
        data: PropTypes.object,
        style: PropTypes.object
    })),

    /**
     * Custom CSS styles for the container div
     */
    style: PropTypes.object,

    /**
     * CSS class name for the container div
     */
    className: PropTypes.string,

    /**
     * Show/hide the developer tools panel
     */
    showDevTools: PropTypes.bool,

    /**
     * Layout options for arranging nodes using the ELK layout engine
     */
    layoutOptions: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     */
    setProps: PropTypes.func
};

DashFlow.displayName = 'DashFlow';

export default DashFlow;