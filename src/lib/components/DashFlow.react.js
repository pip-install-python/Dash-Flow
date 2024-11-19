import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    ReactFlow,
    Controls,
    MiniMap,
    Background,
    addEdge,
    ReactFlowProvider,
    applyNodeChanges,
    applyEdgeChanges,
    useViewport,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import ResizableNode from './ResizableNode';
import DevTools from './DevTools';
import AnimatedNodeEdge from './AnimatedNodeEdge';

const edgeTypes = {
    animated: AnimatedNodeEdge,
};

const nodeTypes = {
    resizable: ResizableNode,
};


/**
 * Recursively process Dash component children
 */
const processDashElement = (element) => {
    // Handle string/number
    if (typeof element === 'string' || typeof element === 'number') {
        return element;
    }

    // Skip null/undefined
    if (!element) {
        return null;
    }

    // Handle arrays of children
    if (Array.isArray(element)) {
        return element.map(child => processDashElement(child));
    }

    // Handle Dash components
    if (element.props && element.props._dashprivate_layout) {
        const { props } = element.props._dashprivate_layout;

        // Process children recursively
        const children = processDashElement(props.children);

        // Create React element
        return React.createElement(
            props.type || 'div',
            {
                ...props,
                key: props.key || undefined,
                style: {
                    ...props.style,
                }
            },
            children
        );
    }

    // Return unprocessed element if nothing else matches
    return element;
};

/**
 * Convert Dash components in node data to React elements
 */
const processDashComponents = (nodes) => {
    if (!nodes) return [];

    const processComponent = (component) => {
        if (!component || typeof component === 'string') return component;

        if (component.props && component.props._dashprivate_layout) {
            const layout = component.props._dashprivate_layout;

            // Process children recursively
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
/**
 * DashFlow is a Dash component that wraps React Flow to create
 * interactive node-based interfaces. It supports customizable nodes,
 * edges, and various interaction modes.
 */
const Flow = (props) => {
    const {
        id,
        nodes,
        edges,
        nodesDraggable,
        nodesConnectable,
        elementsSelectable,
        nodeTypes: customNodeTypes,
        edgeTypes,
        showMiniMap,
        showControls,
        showBackground,
        showDevTools,
        style,
        className,
        setProps
    } = props;

    const allEdgeTypes = {
        ...edgeTypes,
        ...(props.edgeTypes || {}),
    };

    const allNodeTypes = {
        ...nodeTypes,
        ...customNodeTypes,
    };

    // Process nodes to handle Dash components
    const processedNodes = processDashComponents(nodes);
    const viewport = useViewport();

    const onNodesChange = useCallback((changes) => {
        // Use applyNodeChanges helper from React Flow to correctly update nodes
        const nextNodes = applyNodeChanges(changes, nodes);
        setProps({ nodes: nextNodes });
    }, [nodes, setProps]);

    const onEdgesChange = useCallback((changes) => {
        // Use applyEdgeChanges helper from React Flow to correctly update edges
        const nextEdges = applyEdgeChanges(changes, edges);
        setProps({ edges: nextEdges });
    }, [edges, setProps]);

    const onConnect = useCallback((connection) => {
        if (!connection.source || !connection.target) return;
        const newEdge = {
            id: `e${connection.source}-${connection.target}`,
            ...connection
        };
        setProps({ edges: [...edges, newEdge] });
    }, [edges, setProps]);

    // Default container style with mandatory height
    const containerStyle = {
        width: '100%',
        height: '600px',  // Set a default height
        ...style
    };

    return (
        <div id={id} style={containerStyle} className={className}>
            <ReactFlow
                nodes={processedNodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodesDraggable={nodesDraggable}
                nodesConnectable={nodesConnectable}
                elementsSelectable={elementsSelectable}
                nodeTypes={allNodeTypes}
                edgeTypes={edgeTypes}
                fitView
                deleteKeyCode={['Backspace', 'Delete']}
                panOnScroll
                selectionOnDrag
                panOnDrag={[1, 2]}
                zoomOnScroll
                snapToGrid
            >
                {showControls && <Controls />}
                {showMiniMap && <MiniMap />}
                {showBackground && <Background />}
                {showDevTools && <DevTools viewport={viewport} nodes={processedNodes} />}
            </ReactFlow>
        </div>
    );
};


// Main component that wraps Flow with ReactFlowProvider
const DashFlow = (props) => {
    return (
        <ReactFlowProvider>
            <Flow {...props} />
        </ReactFlowProvider>
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

};

DashFlow.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Array of node objects with position, data, and optional style information
     */
    nodes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        position: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired,
        data: PropTypes.object.isRequired,
        type: PropTypes.string,
        style: PropTypes.object
    })),

    /**
     * Array of edge objects defining connections between nodes
     */
    edges: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        type: PropTypes.string,
        animated: PropTypes.bool,
        style: PropTypes.object
    })),

    /**
     * Enable/disable node dragging
     */
    nodesDraggable: PropTypes.bool,

    /**
     * Enable/disable creating new connections
     */
    nodesConnectable: PropTypes.bool,

    /**
     * Enable/disable selection
     */
    elementsSelectable: PropTypes.bool,

    /**
     * Custom node type components
     */
    nodeTypes: PropTypes.object,

    /**
     * Custom edge type components
     */
    edgeTypes: PropTypes.object,

    /**
     * Show/hide minimap
     */
    showMiniMap: PropTypes.bool,

    /**
     * Show/hide controls
     */
    showControls: PropTypes.bool,

    /**
     * Show/hide background
     */
    showBackground: PropTypes.bool,

    /**
     * Custom style for the container div
     */
    style: PropTypes.object,

    /**
     * Custom CSS class name
     */
    className: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
    /**
     * Show/hide developer tools
     */
    showDevTools: PropTypes.bool,
};

// Add this to register the component name
DashFlow.displayName = 'DashFlow';

export default DashFlow;