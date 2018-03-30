import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {tags: []};
    }

    componentDidMount(){
        NoteResource.findAll().then((response) => {
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
                    <h1>{this.props.lang.homepage}</h1>s
                <span>listes des 5 dernières notes</span>
                {
                    this.state.tags.map((elem) =>
                        <span key={elem.id}>{elem.id}-{elem.content}</span>
                    )
                }
            </div>
        );
    }
}

export default Homepage;