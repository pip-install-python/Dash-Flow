// src/lib/components/AnimatedNodeEdge.js
import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { BaseEdge, getBezierPath, useReactFlow } from '@xyflow/react';

/**
 * AnimatedNodeEdge is a custom edge component that animates a node along its path.
 */
// AnimatedNodeEdge.js
const AnimatedNodeEdge = ({
    id,
    data = { animatedNode: '' },
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
}) => {
    const { getNode, updateNode } = useReactFlow();
    const [edgePath] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const selector = useMemo(
        () => `.react-flow__node[data-id="${data.animatedNode}"]`,
        [data.animatedNode]
    );

    // Set up the animation path
    useEffect(() => {
        const node = document.querySelector(selector);
        if (!node) return;

        // Apply animation path
        node.style.offsetPath = `path('${edgePath}')`;
        node.style.offsetRotate = 'auto';
        node.style.transformBox = 'fill-box';
        node.style.transformOrigin = 'center center';

        // Store and disable dragging
        const originalNode = getNode(data.animatedNode);
        const wasDraggable = originalNode?.draggable;
        updateNode(data.animatedNode, { draggable: false });

        return () => {
            if (node) {
                node.style.offsetPath = '';
                node.style.offsetRotate = '';
                node.style.offsetDistance = '';
                updateNode(data.animatedNode, { draggable: wasDraggable });
            }
        };
    }, [selector, edgePath, getNode, updateNode, data.animatedNode]);

    // Create the animation
    useEffect(() => {
        const node = document.querySelector(selector);
        if (!node) return;

        const animation = node.animate(
            [
                { offsetDistance: '0%' },
                { offsetDistance: '100%' }
            ],
            {
                duration: 3000,
                easing: 'ease-in-out',
                direction: 'alternate',
                iterations: Infinity,
            }
        );

        return () => animation.cancel();
    }, [selector]);

    return <BaseEdge id={id} path={edgePath} className="animated-edge" />;
};


AnimatedNodeEdge.propTypes = {
    /**
     * The ID of the edge
     */
    id: PropTypes.string,

    /**
     * Edge data containing the ID of the node to animate
     */
    data: PropTypes.shape({
        /**
         * ID of the node to animate along this edge
         */
        animatedNode: PropTypes.string
    }),

    /**
     * X coordinate of the source node
     */
    sourceX: PropTypes.number,

    /**
     * Y coordinate of the source node
     */
    sourceY: PropTypes.number,

    /**
     * X coordinate of the target node
     */
    targetX: PropTypes.number,

    /**
     * Y coordinate of the target node
     */
    targetY: PropTypes.number,

    /**
     * Position of the source handle
     */
    sourcePosition: PropTypes.string,

    /**
     * Position of the target handle
     */
    targetPosition: PropTypes.string
};

AnimatedNodeEdge.defaultProps = {
    data: { animatedNode: '' }
};

export default AnimatedNodeEdge;
