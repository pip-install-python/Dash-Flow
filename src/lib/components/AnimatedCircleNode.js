// src/lib/components/AnimatedCircleNode.js
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Handle, Position } from '@xyflow/react';

const AnimatedCircleNode = memo(({ data }) => {
    return (
        <div style={{
            width: '60px',
            height: '60px',
            background: '#ff0073',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            willChange: 'transform',
            zIndex: 1000
        }}>
            <Handle
                type="target"
                position={Position.Top}
                style={{ background: '#555' }}
            />
            <div>{data.label}</div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#555' }}
            />
        </div>
    );
});

AnimatedCircleNode.displayName = 'AnimatedCircleNode';

AnimatedCircleNode.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.any
    }).isRequired
};

export default AnimatedCircleNode;