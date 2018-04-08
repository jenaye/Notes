import React, { Component } from 'react';
import TagResource from '../../providers/TagResource';
import NoteResource from '../../providers/NoteResource';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class createNote extends Component {



    constructor(props) {
        super(props);

        this.state = {content: '', url:'', tags: [], values: [], tagName:[]};

        this.handleChange = this.handleChange.bind(this);
        this.handleChanged = this.handleChanged.bind(this);
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
        var that = this;
        var myArray = [];
        this.state.values.map(t => {
        const r = that.state.tags.find(e => e.name === t);
        myArray.push(r['@id']);
        });

        const data = {
            created_at: new Date(),
            content : that.state.content,
            url : that.state.url,
            tags : myArray
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
        if (values.length === 1) {
            return values;
        } else if (values.length === 2) {
            return values+ ',';
        } else {
            return values+ ',';
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
        
        const {values} = this.state;
        return (
            <div className="form-group">
                <h1>{this.props.lang.notes.create}</h1>

                <SelectField
                    multiple={true}
                    hintText="Select a tags"
                    value={this.state.values}
                    onChange={this.handleChanged}
                    selectionRenderer={this.selectionRenderer}
                    fullWidth={true}
                  >
                    {this.menuItems(this.state.tags)}
      </SelectField>


                <form onSubmit={this.handleSubmit}>
                    <TextField
                        fullWidth={true}
                        hintText="this is a placeholder"
                        multiLine={true}
                        rows={5}
                        rowsMax={10}
                        name="content"
                        value={this.state.content}
                        onChange={(event) => this.setState({content: event.target.value})}>
                    </TextField>
                    <br/>
                    <h1>Url</h1>
                    <TextField type="text" name="url"
                               className="form-control"
                               fullWidth={true}
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