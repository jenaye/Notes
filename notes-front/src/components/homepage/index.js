import React, { Component } from 'react';
import { Translation } from '../../translate/translation';
import { Config } from '../../config/const'

class Homepage extends Component {

    render() {
        console.log(Translation); //  ok
        console.log(Config.defaultLanguage) // fr
        return (
            <div className="homepage">
                <div>
                    <h1>{Translation.Config.defaultLanguage.homepage}</h1>
                </div>
            </div>
        );
    }
}

export default Homepage;