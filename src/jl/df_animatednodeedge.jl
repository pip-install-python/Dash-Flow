# AUTO GENERATED FILE - DO NOT EDIT

export df_animatednodeedge

"""
    df_animatednodeedge(;kwargs...)

An AnimatedNodeEdge component.
AnimatedNodeEdge is a custom edge component that animates a node along its path.
Keyword arguments:
- `id` (String; optional): The ID of the edge
- `data` (optional): Edge data containing the ID of the node to animate. data has the following type: lists containing elements 'animatedNode'.
Those elements have the following types:
  - `animatedNode` (String; optional): ID of the node to animate along this edge
- `sourcePosition` (String; optional): Position of the source handle
- `sourceX` (Real; optional): X coordinate of the source node
- `sourceY` (Real; optional): Y coordinate of the source node
- `targetPosition` (String; optional): Position of the target handle
- `targetX` (Real; optional): X coordinate of the target node
- `targetY` (Real; optional): Y coordinate of the target node
"""
function df_animatednodeedge(; kwargs...)
        available_props = Symbol[:id, :data, :sourcePosition, :sourceX, :sourceY, :targetPosition, :targetX, :targetY]
        wild_props = Symbol[]
        return Component("df_animatednodeedge", "AnimatedNodeEdge", "dash_flow", available_props, wild_props; kwargs...)
end

