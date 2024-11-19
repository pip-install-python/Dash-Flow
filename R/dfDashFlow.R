# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dfDashFlow <- function(id=NULL, className=NULL, edgeTypes=NULL, edges=NULL, elementsSelectable=NULL, nodeTypes=NULL, nodes=NULL, nodesConnectable=NULL, nodesDraggable=NULL, showBackground=NULL, showControls=NULL, showDevTools=NULL, showMiniMap=NULL, style=NULL) {
    
    props <- list(id=id, className=className, edgeTypes=edgeTypes, edges=edges, elementsSelectable=elementsSelectable, nodeTypes=nodeTypes, nodes=nodes, nodesConnectable=nodesConnectable, nodesDraggable=nodesDraggable, showBackground=showBackground, showControls=showControls, showDevTools=showDevTools, showMiniMap=showMiniMap, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashFlow',
        namespace = 'dash_flow',
        propNames = c('id', 'className', 'edgeTypes', 'edges', 'elementsSelectable', 'nodeTypes', 'nodes', 'nodesConnectable', 'nodesDraggable', 'showBackground', 'showControls', 'showDevTools', 'showMiniMap', 'style'),
        package = 'dashFlow'
        )

    structure(component, class = c('dash_component', 'list'))
}
