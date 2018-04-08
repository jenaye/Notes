import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
const ReactMarkdown = require('react-markdown');


const style = {
  color: '#FFF',
};

class showNote extends Component {


    constructor(props) {
        super(props);
        this.state = { data: [] , tags:[]};

    }


    componentDidMount(){
        NoteResource.find(this.props.id).then((response) => {
               this.setState({
                data: response,
                tags: response.tags
            });
        });
    }

    

    render() {
        return (
            <div>
            <span>je suis dans show note</span>
            <ReactMarkdown source={this.state.data.content} />
            {this.state.data.url == '' ?
                'Aucun lien pour cette note'
             : <RaisedButton href={this.state.data.url} label={this.props.lang.openLink}
                backgroundColor="#66BB6A" 
                />
            }

             {
                    this.state.tags.map((elem) =>
                        <Chip key={elem.id}>{elem.name}</Chip>
                    )
                }

            </div>


        );
    }
}

export default showNote;