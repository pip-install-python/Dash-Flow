# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dfResizableNode <- function(data=NULL, selected=NULL) {
    
    props <- list(data=data, selected=selected)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ResizableNode',
        namespace = 'dash_flow',
        propNames = c('data', 'selected'),
        package = 'dashFlow'
        )

    structure(component, class = c('dash_component', 'list'))
}
