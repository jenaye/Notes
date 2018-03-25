import React, { Component } from 'react';

class createNote extends Component {

    constructor(props) {
        super(props);
        this.state = {content: '', url:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                    <p className="text-muted"></p>
                    <textarea
                        name="content"
                        value={this.state.content}
                        onChange={(event) => this.setState({content: event.target.value})}
                        className="form-control" rows="3">
                    </textarea>
                    <input type="text" name="url"
                           value={this.state.url}
                           onChange={(event) => this.setState({url: event.target.value})}
                    />
                    <input type="submit" className="btn btn-primary" value={this.props.lang.submit} />
                </form>
            </div>
        );
    }
}

export default createNote;