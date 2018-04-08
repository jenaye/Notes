import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ContentSend from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
// const ReactMarkdown = require('react-markdown');


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {notes: [], search: ''};

    }

    componentDidMount(){

    }

    hundleSubmit(event){
        console.log('je passe ici ')
        var that = this;
        NoteResource.findBy('content='+ that.state.search).then((response) => {
            console.log(response)
        });

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({search: event.target.value});
    }


    render() { 
        return (
            <div className="homepage">
                    <h1>Faites votre recherche</h1>

                    <TextField type="text" name="search"
                               className="form-control"
                               hintText="Hint Text"
                               value={this.state.search}
                               onChange={(event) => this.setState({search: event.target.value})}
                    />
                <List>
                {
                    this.state.notes.map((elem) =>
                         <Link to={`/show-note/${elem.id}`} key={elem.id} >
                            <ListItem  primaryText={elem.content} id={elem.id} leftIcon={<ContentSend />} />
                        </Link>
                    )
                }
                </List>
                 <RaisedButton label="Rechercher"  onClick={this.handleSubmit}  />
    <Divider />

            </div>
        );
    }
}

export default Search;