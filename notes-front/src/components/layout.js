import React, { Component } from 'react';
import routes from '../config/routes';

class Layout extends Component {

    render() {
        return (
            <div>
                {routes}
            </div>
        )
    }
}

export default Layout;