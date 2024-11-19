% Auto-generated: do not edit by hand
\name{dfDashFlow}

\alias{dfDashFlow}

\title{DashFlow component}

\description{

}

\usage{
dfDashFlow(id=NULL, className=NULL, edgeTypes=NULL, edges=NULL,
elementsSelectable=NULL, nodeTypes=NULL, nodes=NULL,
nodesConnectable=NULL, nodesDraggable=NULL,
showBackground=NULL, showControls=NULL, showDevTools=NULL,
showMiniMap=NULL, style=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{className}{Character. Custom CSS class name}

\item{edgeTypes}{Named list. Custom edge type components}

\item{edges}{List of lists containing elements 'id', 'source', 'target', 'type', 'animated', 'style'.
those elements have the following types:
  - id (character; required)
  - source (character; required)
  - target (character; required)
  - type (character; optional)
  - animated (logical; optional)
  - style (named list; optional)s. Array of edge objects defining connections between nodes}

\item{elementsSelectable}{Logical. Enable/disable selection}

\item{nodeTypes}{Named list. Custom node type components}

\item{nodes}{List of lists containing elements 'id', 'position', 'data', 'type', 'style'.
those elements have the following types:
  - id (character; required)
  - position (required): . position has the following type: lists containing elements 'x', 'y'.
those elements have the following types:
  - x (numeric; required)
  - y (numeric; required)
  - data (named list; required)
  - type (character; optional)
  - style (named list; optional)s. Array of node objects with position, data, and optional style information}

\item{nodesConnectable}{Logical. Enable/disable creating new connections}

\item{nodesDraggable}{Logical. Enable/disable node dragging}

\item{showBackground}{Logical. Show/hide background}

\item{showControls}{Logical. Show/hide controls}

\item{showDevTools}{Logical. Show/hide developer tools}

\item{showMiniMap}{Logical. Show/hide minimap}

\item{style}{Named list. Custom style for the container div}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

