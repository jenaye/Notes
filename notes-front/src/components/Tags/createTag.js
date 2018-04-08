import React, { Component } from 'react';
import TagResource from '../../providers/TagResource';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class createTag extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        const data = {
            created_at: new Date(),
            name : this.state.name
        }

        TagResource.post(data).then((response) => {
                console.log(response)
        });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="form-group">
                <h1>{this.props.lang.tags.create}</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField type="text" name="url"
                               className="form-control"
                               hintText="Hint Text"
                               onChange={(event) => this.setState({url: event.target.value})}
                    />
                    <RaisedButton label="Default"  onClick={this.handleSubmit}  value={this.props.lang.submit} />
                </form>
            </div>


        );
    }
}

export default createTag;