import React, { Component } from 'react';
import NoteResource from '../../providers/NoteResource';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
const ReactMarkdown = require('react-markdown');


class showNote extends Component {

    state = {
    open: false,
    content: '', url:'', tags: [], values: [], tagName:[], data: []
  };


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


    handleSubmitPopup(event){

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
        
        NoteResource.update(this.state.id, data).then((response) => {

        });
        
         event.preventDefault();

    }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChanged = (event, index, values) => this.setState({values});

  handleChange(event) {
        this.setState({value: event.target.value});
    }

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


    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleChanged = this.handleChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitPopup = this.handleSubmitPopup.bind(this);

    }


    componentDidMount(){
        NoteResource.find(this.props.id).then((response) => {
            console.log(response)
               this.setState({
                id : response.id,
                content: response.content,
                tags: response.tags,
                url: response.url

            });
        });
    }

    

    render() {

        const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label='sauvegarder'
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmitPopup}
      />,
    ];


        return (
            <div>
            <span>Note id : {this.state.id}</span>
            <ReactMarkdown source={this.state.content} />
            {this.state.data.url === '' ?
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

                <RaisedButton label="Dialog" onClick={this.handleOpen} />
                    <Dialog
                      title="Dialog With Actions"
                      modal={false}
                      actions={actions}
                      open={this.state.open}
                      onRequestClose={this.handleClose}
                    >
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
                   
                </form>
               
                    </Dialog>
            
            </div>


        );
    }
}

export default showNote;