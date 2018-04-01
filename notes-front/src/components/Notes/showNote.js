import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';
import {List, ListItem} from 'material-ui/List';



class showNote extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {id: 1,  data: [] };

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
                console.log(this.state)
                }
                </List>
            </div>


        );
    }
}

export default showNote;