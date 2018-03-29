import React, { Component } from 'react';
import TagResource from '../../providers/TagResource';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class createNote extends Component {

    constructor(props) {
        super(props);
        this.state = {content: '', url:'', tags: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        TagResource.findAll().then((response) => {
            let tags = [];
            response.map(function(item) {
                tags.push(item);
            });
            this.setState({
                tags: response
            });
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="form-group">
                <h1>{this.props.lang.notes.create}</h1>
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
                {
                    this.state.tags.map((elem) =>
                        <Chip key={elem.id}>{elem.name}</Chip>
                    )
                }
            </div>


        );
    }
}

export default createNote;