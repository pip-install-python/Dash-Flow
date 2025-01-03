% Auto-generated: do not edit by hand
\name{dfDashFlow}

\alias{dfDashFlow}

\title{DashFlow component}

\description{

}

\usage{
dfDashFlow(id=NULL, className=NULL, edges=NULL,
elementsSelectable=NULL, layoutOptions=NULL, nodes=NULL,
nodesConnectable=NULL, nodesDraggable=NULL,
showBackground=NULL, showControls=NULL, showDevTools=NULL,
showMiniMap=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{className}{Character. CSS class name for the container div}

\item{edges}{List of lists containing elements 'id', 'source', 'target', 'type', 'data', 'style'.
those elements have the following types:
  - id (character; required)
  - source (character; required)
  - target (character; required)
  - type (character; optional)
  - data (named list; optional)
  - style (named list; optional)s. Array of edges defining connections between nodes}

\item{elementsSelectable}{Logical. Enable/disable the ability to select elements}

\item{layoutOptions}{Character. Layout options for arranging nodes using the ELK layout engine}

\item{nodes}{List of lists containing elements 'id', 'type', 'data', 'position', 'style'.
those elements have the following types:
  - id (character; required)
  - type (character; optional)
  - data (named list; required)
  - position (required): . position has the following type: lists containing elements 'x', 'y'.
those elements have the following types:
  - x (numeric; required)
  - y (numeric; required)
  - style (named list; optional)s. Array of nodes to display in the flow}

\item{nodesConnectable}{Logical. Enable/disable the ability to make new connections between nodes}

\item{nodesDraggable}{Logical. Enable/disable node dragging behavior}

\item{showBackground}{Logical. Show/hide the background pattern}

\item{showControls}{Logical. Show/hide the control panel}

\item{showDevTools}{Logical. Show/hide the developer tools panel}

\item{showMiniMap}{Logical. Show/hide the minimap navigation component}

\item{style}{Named list. Custom CSS styles for the container div}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

