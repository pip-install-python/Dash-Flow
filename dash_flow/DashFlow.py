# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashFlow(Component):
    """A DashFlow component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; default ''):
    CSS class name for the container div.

- edges (list of dicts; optional):
    Array of edges defining connections between nodes.

    `edges` is a list of dicts with keys:

    - id (string; required)

    - source (string; required)

    - target (string; required)

    - type (string; optional)

    - data (dict; optional)

    - style (dict; optional)

- elementsSelectable (boolean; default True):
    Enable/disable the ability to select elements.

- layoutOptions (string; optional):
    Layout options for arranging nodes using the ELK layout engine.

- nodes (list of dicts; optional):
    Array of nodes to display in the flow.

    `nodes` is a list of dicts with keys:

    - id (string; required)

    - type (string; optional)

    - data (dict; required)

    - position (dict; required)

        `position` is a dict with keys:

        - x (number; required)

        - y (number; required)

    - style (dict; optional)

- nodesConnectable (boolean; default True):
    Enable/disable the ability to make new connections between nodes.

- nodesDraggable (boolean; default True):
    Enable/disable node dragging behavior.

- showBackground (boolean; default True):
    Show/hide the background pattern.

- showControls (boolean; default True):
    Show/hide the control panel.

- showDevTools (boolean; default False):
    Show/hide the developer tools panel.

- showMiniMap (boolean; default True):
    Show/hide the minimap navigation component.

- style (dict; optional):
    Custom CSS styles for the container div."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_flow'
    _type = 'DashFlow'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, nodesDraggable=Component.UNDEFINED, nodesConnectable=Component.UNDEFINED, elementsSelectable=Component.UNDEFINED, showMiniMap=Component.UNDEFINED, showControls=Component.UNDEFINED, showBackground=Component.UNDEFINED, nodes=Component.UNDEFINED, edges=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, showDevTools=Component.UNDEFINED, layoutOptions=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'edges', 'elementsSelectable', 'layoutOptions', 'nodes', 'nodesConnectable', 'nodesDraggable', 'showBackground', 'showControls', 'showDevTools', 'showMiniMap', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'edges', 'elementsSelectable', 'layoutOptions', 'nodes', 'nodesConnectable', 'nodesDraggable', 'showBackground', 'showControls', 'showDevTools', 'showMiniMap', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashFlow, self).__init__(**args)
