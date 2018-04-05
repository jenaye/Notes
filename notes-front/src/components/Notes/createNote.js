import React, { Component } from 'react';
import TagResource from '../../providers/TagResource';
import NoteResource from '../../providers/NoteResource';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const toto = [
  'Crypto',
  'Linux',
  'Web',
];


class createNote extends Component {
    state = {
    values: [],
  };



    constructor(props) {
        super(props);
        this.state = {content: '', url:'', tags: [], values: [], tagName:[]};
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
                tagName: datas

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

    handleChanged = (event, index, values) => this.setState({values});

    selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return this.state.tags[values[0]];
      default:
        return `${values}`;
    }
  }



     menuItems(persons) {
    return this.state.tags.map((elem) => (
      <MenuItem
        key={elem.id}
        insetChildren={true}
        checked={this.state.values.indexOf(elem.value) > -1}
        value={elem.name}
        primaryText={elem.name}
      />
    ));
  }

  

    render() {
        console.log(this.state.tags)
        const {values} = this.state;
        return (
            <div className="form-group">
                <h1>{this.props.lang.notes.create}</h1>

                <SelectField
                    multiple={true}
                    hintText="Select a name"
                    value={this.state.values}
                    onChange={this.handleChanged}
                    selectionRenderer={this.selectionRenderer}
                  >
                    {this.menuItems(this.state.tags)}
      </SelectField>


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