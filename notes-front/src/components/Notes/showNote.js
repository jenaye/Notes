import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';
import {List, ListItem} from 'material-ui/List';



class showNote extends Component {

    constructor(props) {
        var str=window.location.href
        var last = str.substring(str.lastIndexOf("/") + 1, str.length);
        super(props);
        console.log(props)
        this.state = {id: last,  data: [] };

    }


    componentDidMount(){
        NoteResource.find(this.state.id).then((response) => {
               this.setState({
                data: response
            });
        });
    }

    render() {
        return (
            <div>
            <span>je suis dans show note</span>
            <List>
             {
                this.state.data.content
                }
                </List>
            </div>


        );
    }
}

export default showNote;