import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';

import {} from './sass/styles.scss';

import { Header, MyFeed } from './Components';


class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         videos: [],
    //         selectedVideo: null,
    //     };
    //     this.videoSearch('drag race')
    // }
    render() {
        return (
            <div>
                <Header />
                <MyFeed />
            </div>
        ) 
    }
}

ReactDOM.render(<App />, document.querySelector('#App'));