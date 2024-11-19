# Dash-Flow

A Dash component library that integrates React Flow functionality into Dash applications, enabling interactive node-based interfaces with support for animated edges, resizable nodes, and custom components.

## Features

- ✨ Interactive node-based diagrams
- 🎯 Animated edges with node movement
- 📏 Resizable nodes with custom content
- 🎨 Custom node and edge styling
- 🔧 Developer tools for debugging
- 🖼️ Support for images and custom components
- 🎮 Interactive controls and minimap
- 🌈 Background customization


### Prerequisites

- Python 3.6+
- Dash 2.0+
- React 18.2.0+

## Quick Start

```python
import dash
from dash import html
import dash_flow
import dash_mantine_components as dmc

app = dash.Dash(__name__)

# Define your nodes
nodes = [
    {
        'id': '1',
        'type': 'resizable',
        'data': {
            'label': html.Div([
                html.Img(src="your-image-url", 
                        style={'width': '100%', 'height': '100%'})
            ])
        },
        'position': {'x': 250, 'y': 25},
        'style': {
            'width': 300,
            'height': 300,
        }
    }
]

# Define your edges
edges = [
    {
        'id': 'e1-2',
        'source': '1',
        'target': '2',
        'type': 'animated',
        'data': {
            'animatedNode': '3'  # Node to animate along this edge
        }
    }
]

# Create the layout
app.layout = dmc.MantineProvider([
    dash_flow.DashFlow(
        id='react-flow-example',
        nodes=nodes,
        edges=edges,
        showDevTools=True,
        style={'height': '600px'}
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
```

## Components

### DashFlow

Main component that wraps React Flow functionality.

#### Props

- `id` (string): Component identifier
- `nodes` (list): Array of node objects
- `edges` (list): Array of edge objects
- `nodesDraggable` (boolean): Enable/disable node dragging
- `nodesConnectable` (boolean): Enable/disable creating connections
- `elementsSelectable` (boolean): Enable/disable selection
- `showMiniMap` (boolean): Show/hide minimap
- `showControls` (boolean): Show/hide controls
- `showBackground` (boolean): Show/hide background
- `showDevTools` (boolean): Show/hide developer tools
- `style` (dict): Custom container styles

### Node Types

#### ResizableNode

A node type that supports resizing and custom content.

```python
node = {
    'id': '1',
    'type': 'resizable',
    'data': {
        'label': html.Div([...])  # Custom content
    },
    'position': {'x': 0, 'y': 0},
    'style': {
        'width': 300,
        'height': 300
    }
}
```

### Edge Types

#### AnimatedNodeEdge

An edge type that animates a node along its path.

```python
edge = {
    'id': 'e1-2',
    'source': '1',
    'target': '2',
    'type': 'animated',
    'data': {
        'animatedNode': '3'  # ID of node to animate
    }
}
```

## Development

To contribute to this project:

1. Clone the repository
```bash
git clone https://github.com/yourusername/dash-flow.git
```

2. Install dependencies
```bash
npm install
pip install -r requirements.txt
```

3. Run the development server
```bash
npm start
python usage.py
```

## Building the Component

```bash
npm run build
```

## License

MIT © [Pip Install Python](https://github.com/pip-install-python)

