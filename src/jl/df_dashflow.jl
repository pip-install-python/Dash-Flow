# AUTO GENERATED FILE - DO NOT EDIT

export df_dashflow

"""
    df_dashflow(;kwargs...)

A DashFlow component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional): Custom CSS class name
- `edgeTypes` (Dict; optional): Custom edge type components
- `edges` (optional): Array of edge objects defining connections between nodes. edges has the following type: Array of lists containing elements 'id', 'source', 'target', 'type', 'animated', 'style'.
Those elements have the following types:
  - `id` (String; required)
  - `source` (String; required)
  - `target` (String; required)
  - `type` (String; optional)
  - `animated` (Bool; optional)
  - `style` (Dict; optional)s
- `elementsSelectable` (Bool; optional): Enable/disable selection
- `nodeTypes` (Dict; optional): Custom node type components
- `nodes` (optional): Array of node objects with position, data, and optional style information. nodes has the following type: Array of lists containing elements 'id', 'position', 'data', 'type', 'style'.
Those elements have the following types:
  - `id` (String; required)
  - `position` (required): . position has the following type: lists containing elements 'x', 'y'.
Those elements have the following types:
  - `x` (Real; required)
  - `y` (Real; required)
  - `data` (Dict; required)
  - `type` (String; optional)
  - `style` (Dict; optional)s
- `nodesConnectable` (Bool; optional): Enable/disable creating new connections
- `nodesDraggable` (Bool; optional): Enable/disable node dragging
- `showBackground` (Bool; optional): Show/hide background
- `showControls` (Bool; optional): Show/hide controls
- `showDevTools` (Bool; optional): Show/hide developer tools
- `showMiniMap` (Bool; optional): Show/hide minimap
- `style` (Dict; optional): Custom style for the container div
"""
function df_dashflow(; kwargs...)
        available_props = Symbol[:id, :className, :edgeTypes, :edges, :elementsSelectable, :nodeTypes, :nodes, :nodesConnectable, :nodesDraggable, :showBackground, :showControls, :showDevTools, :showMiniMap, :style]
        wild_props = Symbol[]
        return Component("df_dashflow", "DashFlow", "dash_flow", available_props, wild_props; kwargs...)
end

