import dash
from dash import html, Input, Output, _dash_renderer
import dash_flow
import dash_mantine_components as dmc
import dash_daq as daq

_dash_renderer._set_react_version("18.2.0")

app = dash.Dash(__name__, assets_folder='assets')

initial_nodes = [
    {
        'id': '1',
        'type': 'resizable',
        'data': {
            'label': html.Div([
                html.Img(src="https://avatars.githubusercontent.com/u/120129682?v=4", style={'width': '100%', 'height': '100%'}),

            ], style={
                'display': 'flex',
                'flexDirection': 'column',
                'alignItems': 'center',
                'gap': '10px',
                'padding': '10px'
            })
        },
        'position': {'x': 250, 'y': 25},
        'style': {
            'width': 300,
            'height': 300,
        }
    },
    {
        'id': '2',
        'data': {'label': 'Animated Node'},
        'position': {'x': 100, 'y': 125},
        'style': {
            'background': '#ff0073',
            'color': 'white',
            'border': 'none',
            'borderRadius': '50%',
            'width': '60px',  # Smaller fixed size
            'height': '60px',  # Smaller fixed size
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'fontSize': '12px',
            'willChange': 'transform',  # Optimization for animations
            'zIndex': 1000  # Ensure it stays on top
        }
    },
    {
        'id': '3',
        'type': 'resizable',
        'data': {'label': html.Div([
                html.Img(src="https://avatars.discourse-cdn.com/v4/letter/h/50afbb/288.png", style={'width': '100%', 'height': '100%'}),
            ], style={
                'display': 'flex',
                'flexDirection': 'column',
                'alignItems': 'center',
                'gap': '10px',
                'padding': '10px'
            })},
        'position': {'x': 250, 'y': 250},
        'style': {
            'width': 300,
            'height': 300,
        }
    }
]

initial_edges = [
    {
        'id': 'e1-2',
        'source': '1',
        'target': '2',
        'type': 'animated',
        'data': {
            'animatedNode': '2'
        },
        'style': {
            'strokeWidth': 2,
            'stroke': '#555'
        }
    },
    {
        'id': 'e2-3',
        'source': '2',
        'target': '3',
        'type': 'animated',
        'data': {
            'animatedNode': '2'
        },
        'style': {
            'strokeWidth': 2,
            'stroke': '#555'
        }
    }
]

app.layout = dmc.MantineProvider([
    dash_flow.DashFlow(
        id='react-flow-example',
        nodes=initial_nodes,
        edges=initial_edges,
        showDevTools=True,
        style={'height': '600px'}
    )
])

@app.callback(
    Output('react-flow-example', 'nodes'),
    Input('react-flow-example', 'nodes'),
    prevent_initial_call=True
)
def update_nodes(nodes):
    return nodes or initial_nodes

if __name__ == '__main__':
    app.run_server(debug=True, port=7777)