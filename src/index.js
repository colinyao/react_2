import 'core-js/fn/object/assign';
import React from 'react';
import {
    render
} from 'react-dom';
import App from './containers/App';

// Render the main component into the dom
render(<App />, document.getElementById('app'));