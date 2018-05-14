import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';

import {} from './sass/styles.scss';

import { Header, MyFeed, Footer } from './Components';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MyFeed />
                <Footer />
            </div>
        ) 
    }
}

ReactDOM.render(<App />, document.querySelector('#App'));