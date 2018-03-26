import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../components/homepage'
import CreateTag from '../components/Tags/createTag'
import CreateNote from '../components/Notes/createNote';


const routes = (

    <div>
        <Route exact path="/" render={()=><Homepage />}/>
        <Route exact path="/new-note" render={()=><CreateNote />}/>
        <Route exact path="/tags" render={()=><CreateTag />}/>
    </div>
);

export default routes;