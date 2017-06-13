import React, {
    Component
} from 'react';
import Router from '../routes/routes.js'

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Router></Router>
        )
    }
}
export default App