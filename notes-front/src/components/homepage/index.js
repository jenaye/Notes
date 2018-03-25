import React, { Component } from 'react';

class Homepage extends Component {

    render() {
        return (
            <div className="homepage">
                <div>
                    <h1>{this.props.lang.homepage}</h1>
                </div>
            </div>
        );
    }
}

export default Homepage;