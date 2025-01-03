// src/lib/components/DevTools.js
import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from '@xyflow/react';

const ViewportLogger = ({ viewport }) => (
    <div style={{ padding: '8px', background: '#fff', borderRadius: '4px', margin: '4px' }}>
        <strong>Viewport:</strong>
        <div>x: {viewport.x.toFixed(2)}</div>
        <div>y: {viewport.y.toFixed(2)}</div>
        <div>zoom: {viewport.zoom.toFixed(2)}</div>
    </div>
);

const NodeInspector = ({ nodes }) => (
    <div style={{ padding: '8px', background: '#fff', borderRadius: '4px', margin: '4px' }}>
        <strong>Nodes:</strong>
        {nodes.map((node) => (
            <div key={node.id}>
                ID: {node.id}, Type: {node.type || 'default'}
            </div>
        ))}
    </div>
);

/**
 * DevTools component for displaying debug information about the flow
 */
const DevTools = ({ viewport, nodes }) => {
    return (
        <Panel position="top-right" style={{ maxHeight: '400px', overflow: 'auto' }}>
            <ViewportLogger viewport={viewport} />
            <NodeInspector nodes={nodes} />
        </Panel>
    );
};

DevTools.propTypes = {
    /**
     * Current viewport information including position and zoom level
     */
    viewport: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
    }).isRequired,

    /**
     * Array of nodes to display information about
     */
    nodes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string
    })).isRequired
};

DevTools.displayName = 'DevTools';

export default DevTools;