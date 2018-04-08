import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ContentSend from 'material-ui/svg-icons/content/send';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
// const ReactMarkdown = require('react-markdown');


class Search extends Component {

    constructor(props) {
        super(props);

        this.state = { notes: [], value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);

    }


     handleSubmit(event) {
          event.preventDefault();
          NoteResource.findBy('content='+ this.state.value).then((response) => {
          console.log(response)
          let notes = [];
          response.map(function(item) {
              notes.push(item);
          });
          this.setState({
              notes: response
            });
        });

      }

    handleChange(event) {
    this.setState({value: event.target.value});
  }


    render() { 
        return (
            <div className="homepage">
                    <h1>Faites votre recherche</h1>
                  <form onSubmit={this.handleSubmit}>
                    <TextField type="text" name="search"
                               className="form-control"
                               hintText="recherche un contenu"
                               value={this.state.value}
                               onChange={e => this.setState({ value: e.target.value })}
                    />
                    <RaisedButton label="Default" type="submit"/>
                    <List>
                {
                    this.state.notes.map((elem) =>
                         <Link to={`/show-note/${elem.id}`} key={elem.id} >
                            <ListItem  primaryText={elem.content} id={elem.id} leftIcon={<ContentSend />} />
                        </Link>
                    )
                }
                </List>
                  </form>
            </div>
        );
    }
}

export default Search;