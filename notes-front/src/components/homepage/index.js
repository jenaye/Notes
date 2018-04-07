import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';
import {List, ListItem} from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
// const ReactMarkdown = require('react-markdown');


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {tags: []};
    }

    componentDidMount(){

        var d = new Date();
        var n = d.toISOString();
        var s = n.substring(0, n.indexOf('T'));

        NoteResource.findBy('created_at[after]='+ s + '&limit=5').then((response) => {
            let tags = [];
            response.map(function(item) {
                tags.push(item);
            });
            this.setState({
                tags: response
            });
        });
    }


    render() {
        return (
            <div className="homepage">
                    <h1>{this.props.lang.homepage}</h1>
                <span>listes des 5 dernières notes</span>
                <List>
                {
                    this.state.tags.map((elem) =>
                         <Link to={`/show-note/${elem.id}`} key={elem.id} >
                            <ListItem  primaryText={elem.content} id={elem.id} leftIcon={<ContentSend />} />
                        </Link>
                    )
                }
                </List>
    <Divider />
            </div>
        );
    }
}

export default Homepage;