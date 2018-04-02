import React, { Component } from 'react';
import TagResource from '../../providers/TagResource';
import NoteResource from '../../providers/NoteResource';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';


class createNote extends Component {


    constructor(props) {
        super(props);
        this.state = {content: '', url:'', tags: [], TagName: [],selectedTag: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        TagResource.findAll().then((response) => {
            let datas = [];
            response.map(function(item) {
                datas.push(item.name);
            });
            this.setState({
                tags: response,
                TagName: datas

            });
        });

    }

    handleSubmit(event) {
        const data = {
            created_at: new Date(),
            content : this.state.content,
            tags : this.state.selectedTag
        }
        NoteResource.post(data).then((response) => {
        });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    

    render() {
        return (
            <div className="form-group">
                <h1>{this.props.lang.notes.create}</h1>
                <AutoComplete
      floatingLabelText="Find tags with AutoComplete"
      filter={AutoComplete.fuzzyFilter}
      dataSource={this.state.TagName}
      value={this.state.selectedTag}
      onChange={(event) => this.setState({selectedTag: event.target.value})}
      maxSearchResults={5}
    />
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        hintText="this is a placeholder"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        name="content"
                        value={this.state.content}
                        onChange={(event) => this.setState({content: event.target.value})}>
                    </TextField>
                    <br/>
                    <h1>Url</h1>
                    <TextField type="text" name="url"
                               className="form-control"
                               hintText="Hint Text"
                               value={this.state.url}
                               onChange={(event) => this.setState({url: event.target.value})}
                    />
                    <RaisedButton label="Default"  onClick={this.handleSubmit}  value={this.props.lang.submit} />
                </form>
               

            </div>


        );
    }
}

export default createNote;