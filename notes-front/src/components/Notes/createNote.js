import React, { Component } from 'react';
import TagResource from '../../providers/TagResource';

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
                    <br/>
                    <h1>Url</h1>
                    <input type="text" name="url"
                           className="form-control"
                           value={this.state.url}
                           onChange={(event) => this.setState({url: event.target.value})}
                    />
                    <input type="submit" className="btn btn-primary" value={this.props.lang.submit} />
                </form>
                {
                    this.state.tags.map((elem) =>
                        <span className="badge badge-dark" key={elem.id}> {elem.name}
                        </span>
                    )
                }
            </div>


        );
    }
}

export default createNote;