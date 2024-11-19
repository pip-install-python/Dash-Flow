% Auto-generated: do not edit by hand
\name{dfAnimatedNodeEdge}

\alias{dfAnimatedNodeEdge}

\title{AnimatedNodeEdge component}

\description{
AnimatedNodeEdge is a custom edge component that animates a node along its path.
}

\usage{
dfAnimatedNodeEdge(id=NULL, data=NULL, sourcePosition=NULL, sourceX=NULL,
sourceY=NULL, targetPosition=NULL, targetX=NULL,
targetY=NULL)
}

\arguments{
\item{id}{Character. The ID of the edge}

\item{data}{Lists containing elements 'animatednode'.
those elements have the following types:
  - animatednode (character; optional): id of the node to animate along this edge. Edge data containing the ID of the node to animate}

\item{sourcePosition}{Character. Position of the source handle}

\item{sourceX}{Numeric. X coordinate of the source node}

\item{sourceY}{Numeric. Y coordinate of the source node}

\item{targetPosition}{Character. Position of the target handle}

\item{targetX}{Numeric. X coordinate of the target node}

\item{targetY}{Numeric. Y coordinate of the target node}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

