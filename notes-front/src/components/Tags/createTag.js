import React, { Component } from 'react';
import { Translation } from '../../translate/translation';
import { Config } from '../../config/const';

class createTag extends Component {

    render() {
        return (
            <div className="TagCreate">
                    <div>
                        <h1>{Translation.Config.defaultLanguage.tags.create}</h1>
                    </div>
            </div>
        );
    }
}

export default createTag;