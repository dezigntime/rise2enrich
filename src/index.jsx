import React from 'react';
import {render} from 'react-dom';
import Main from './views/layouts/Main';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Main/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
