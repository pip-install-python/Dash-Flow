# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dfAnimatedNodeEdge <- function(id=NULL, data=NULL, sourcePosition=NULL, sourceX=NULL, sourceY=NULL, targetPosition=NULL, targetX=NULL, targetY=NULL) {
    
    props <- list(id=id, data=data, sourcePosition=sourcePosition, sourceX=sourceX, sourceY=sourceY, targetPosition=targetPosition, targetX=targetX, targetY=targetY)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'AnimatedNodeEdge',
        namespace = 'dash_flow',
        propNames = c('id', 'data', 'sourcePosition', 'sourceX', 'sourceY', 'targetPosition', 'targetX', 'targetY'),
        package = 'dashFlow'
        )

    structure(component, class = c('dash_component', 'list'))
}
