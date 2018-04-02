import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';
import {List, ListItem} from 'material-ui/List';
const ReactMarkdown = require('react-markdown');


class showNote extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };

    }


    componentDidMount(){
        NoteResource.find(this.props.id).then((response) => {
               this.setState({
                data: response
            });
        });
    }

    render() {
        return (
            <div>
            <span>je suis dans show note</span>
            <ReactMarkdown source={this.state.data.content} />
            </div>


        );
    }
}

export default showNote;