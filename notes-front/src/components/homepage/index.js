import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
// const ReactMarkdown = require('react-markdown');

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {notes: []};
    }

    componentDidMount(){

        var d = new Date();
        var n = d.toISOString();
        var s = n.substring(0, n.indexOf('T'));

        NoteResource.findBy('created_at[after]='+ s + '&limit=5').then((response) => {
            let notes = [];
            response.map(function(item) {
                notes.push(item);
            });
            this.setState({
                notes: response
            });
        });
    }


    render() {
        return (
            <div>
                    <h1>{this.props.lang.homepage}</h1>
                <span>listes des 5 dernières notes</span>
                <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Content</TableHeaderColumn>
                        <TableHeaderColumn>Url</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                    
                {
                    this.state.notes.map((elem) =>
                        <TableRow key={elem.id} selectable={false}>
                        <Link to={`/show-note/${elem.id}`} key={elem.id} >
                            <TableRowColumn key={elem.id}>{elem.id}</TableRowColumn>
                            </Link>
                            <TableRowColumn>{elem.content}</TableRowColumn>
                            <TableRowColumn>{elem.url}</TableRowColumn>
                        </TableRow>
                    )
                }
                </TableBody>
                  </Table>
            </div>
        );
    }
}

export default Homepage;