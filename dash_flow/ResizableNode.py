# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ResizableNode(Component):
    """A ResizableNode component.
ResizableNode is a custom node component that supports resizing and Dash components.

Keyword arguments:

- data (dict; required):
    The node data containing the content to display.

    `data` is a dict with keys:

    - label (boolean | number | string | dict | list; optional):
        The content to display in the node. Can be a string or Dash
        component.

- selected (boolean; default False):
    Whether the node is currently selected."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_flow'
    _type = 'ResizableNode'
    @_explicitize_args
    def __init__(self, data=Component.REQUIRED, selected=Component.UNDEFINED, **kwargs):
        self._prop_names = ['data', 'selected']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['data', 'selected']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['data']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(ResizableNode, self).__init__(**args)
