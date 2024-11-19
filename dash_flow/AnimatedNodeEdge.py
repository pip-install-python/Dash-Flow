# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AnimatedNodeEdge(Component):
    """An AnimatedNodeEdge component.
AnimatedNodeEdge is a custom edge component that animates a node along its path.

Keyword arguments:

- id (string; optional):
    The ID of the edge.

- data (dict; default { animatedNode: '' }):
    Edge data containing the ID of the node to animate.

    `data` is a dict with keys:

    - animatedNode (string; optional):
        ID of the node to animate along this edge.

- sourcePosition (string; optional):
    Position of the source handle.

- sourceX (number; optional):
    X coordinate of the source node.

- sourceY (number; optional):
    Y coordinate of the source node.

- targetPosition (string; optional):
    Position of the target handle.

- targetX (number; optional):
    X coordinate of the target node.

- targetY (number; optional):
    Y coordinate of the target node."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_flow'
    _type = 'AnimatedNodeEdge'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, sourceX=Component.UNDEFINED, sourceY=Component.UNDEFINED, targetX=Component.UNDEFINED, targetY=Component.UNDEFINED, sourcePosition=Component.UNDEFINED, targetPosition=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'sourcePosition', 'sourceX', 'sourceY', 'targetPosition', 'targetX', 'targetY']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'sourcePosition', 'sourceX', 'sourceY', 'targetPosition', 'targetX', 'targetY']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AnimatedNodeEdge, self).__init__(**args)
