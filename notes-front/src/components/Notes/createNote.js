import React, { Component } from 'react';

class createNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            placeholder : 'Please write something',

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,

        });
    }


    render() {
        return (
            <div className="form-group">
                <h1>Create new note here</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        name="content"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder={this.state.placeholder}
                        className="form-control" rows="3">
                    </textarea>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
        );
    }
}

export default createNote;