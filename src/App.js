import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// import smart components
import { Feed, Header } from './containers/*';

@connect((store) => {
    // gets set as props
    return {
        feed: store.feed
    }
})
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return(
            // may be over-using/using Fragments wrong
            <Fragment>
                <Header />
                <Feed store={this.props.feed}/>
            </Fragment>
        );
    }
}
