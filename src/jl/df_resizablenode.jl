# AUTO GENERATED FILE - DO NOT EDIT

export df_resizablenode

"""
    df_resizablenode(;kwargs...)

A ResizableNode component.
ResizableNode is a custom node component that supports resizing and Dash components.
Keyword arguments:
- `data` (required): The node data containing the content to display. data has the following type: lists containing elements 'label'.
Those elements have the following types:
  - `label` (Bool | Real | String | Dict | Array; optional): The content to display in the node. Can be a string or Dash component.
- `selected` (Bool; optional): Whether the node is currently selected
"""
function df_resizablenode(; kwargs...)
        available_props = Symbol[:data, :selected]
        wild_props = Symbol[]
        return Component("df_resizablenode", "ResizableNode", "dash_flow", available_props, wild_props; kwargs...)
end

