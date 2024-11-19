# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashFlow(Component):
    """A DashFlow component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; default ''):
    Custom CSS class name.

- edgeTypes (dict; optional):
    Custom edge type components.

- edges (list of dicts; optional):
    Array of edge objects defining connections between nodes.

    `edges` is a list of dicts with keys:

    - id (string; required)

    - source (string; required)

    - target (string; required)

    - type (string; optional)

    - animated (boolean; optional)

    - style (dict; optional)

- elementsSelectable (boolean; default True):
    Enable/disable selection.

- nodeTypes (dict; optional):
    Custom node type components.

- nodes (list of dicts; optional):
    Array of node objects with position, data, and optional style
    information.

    `nodes` is a list of dicts with keys:

    - id (string; required)

    - position (dict; required)

        `position` is a dict with keys:

        - x (number; required)

        - y (number; required)

    - data (dict; required)

    - type (string; optional)

    - style (dict; optional)

- nodesConnectable (boolean; default True):
    Enable/disable creating new connections.

- nodesDraggable (boolean; default True):
    Enable/disable node dragging.

- showBackground (boolean; default True):
    Show/hide background.

- showControls (boolean; default True):
    Show/hide controls.

- showDevTools (boolean; default False):
    Show/hide developer tools.

- showMiniMap (boolean; default True):
    Show/hide minimap.

- style (dict; optional):
    Custom style for the container div."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_flow'
    _type = 'DashFlow'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, nodes=Component.UNDEFINED, edges=Component.UNDEFINED, nodesDraggable=Component.UNDEFINED, nodesConnectable=Component.UNDEFINED, elementsSelectable=Component.UNDEFINED, nodeTypes=Component.UNDEFINED, edgeTypes=Component.UNDEFINED, showMiniMap=Component.UNDEFINED, showControls=Component.UNDEFINED, showBackground=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, showDevTools=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'edgeTypes', 'edges', 'elementsSelectable', 'nodeTypes', 'nodes', 'nodesConnectable', 'nodesDraggable', 'showBackground', 'showControls', 'showDevTools', 'showMiniMap', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'edgeTypes', 'edges', 'elementsSelectable', 'nodeTypes', 'nodes', 'nodesConnectable', 'nodesDraggable', 'showBackground', 'showControls', 'showDevTools', 'showMiniMap', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashFlow, self).__init__(**args)
