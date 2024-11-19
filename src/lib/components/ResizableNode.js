// ResizableNode.js
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Handle, Position, NodeResizer } from '@xyflow/react';

/**
 * ResizableNode is a custom node component that supports resizing and Dash components.
 */
const ResizableNode = memo(({ data, selected }) => {
    // ResizableNode.js - update the renderContent function
const renderContent = () => {
    const content = data.label;

    if (typeof content === 'string') {
        return content;
    }

    if (content?.type) {
        const type = content.type;
        const props = content.props || {};

        // Always use lowercase for HTML elements
        const Element = type.toLowerCase();

        if (Array.isArray(props.children)) {
            return (
                <Element {...props} style={props.style}>
                    {props.children.map((child, index) => {
                        if (!child || typeof child === 'string') return child;

                        // Always use lowercase for HTML elements
                        const ChildType = child.type.toLowerCase();
                        return <ChildType key={index} {...child.props} />;
                    })}
                </Element>
            );
        }

        return <Element {...props} />;
    }

    return null;
};

    return (
        <div style={{
            width: '100%',
            height: '100%',
            border: '1px solid #ddd',
            borderRadius: '4px',
            position: 'relative',
            background: '#fff',
            overflow: 'hidden'
        }}>
            <NodeResizer
                isVisible={selected}
                minWidth={100}
                minHeight={50}
                handleStyle={{ width: 8, height: 8 }}
                lineStyle={{ borderWidth: 1 }}
            />
            <Handle
                type="target"
                position={Position.Top}
                style={{ background: '#555' }}
            />
            <div style={{
                padding: 10,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                {renderContent()}
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                style={{ background: '#555' }}
            />
        </div>
    );
});

ResizableNode.displayName = 'ResizableNode';

ResizableNode.propTypes = {
    /**
     * The node data containing the content to display
     */
    data: PropTypes.shape({
        /**
         * The content to display in the node. Can be a string or Dash component.
         */
        label: PropTypes.any
    }).isRequired,

    /**
     * Whether the node is currently selected
     */
    selected: PropTypes.bool
};

ResizableNode.defaultProps = {
    selected: false
};

export default ResizableNode;