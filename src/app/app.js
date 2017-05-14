import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.scss';

import MainLayout from './components/mainLayout.js';
import React from 'react';

class App extends React.Component {
    render() {
        return (
        	<div>
                <MainLayout/>
            </div>
        );
    }
}

React.render(<App />, document.body);
