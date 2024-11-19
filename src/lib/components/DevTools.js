// src/lib/components/DevTools.js
import React from 'react';
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

const DevTools = ({ viewport, nodes }) => {
    return (
        <Panel position="top-right" style={{ maxHeight: '400px', overflow: 'auto' }}>
            <ViewportLogger viewport={viewport} />
            <NodeInspector nodes={nodes} />
        </Panel>
    );
};

export default DevTools;