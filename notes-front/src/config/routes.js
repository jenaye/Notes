import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../components/homepage'
import createTag from '../components/Tags/createTag'
import createNote from '../components/Notes/createNote';


const routes = (
    <div>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/tags" component={createTag}/>
        <Route exact path="/new-note" component={createNote}/>
    </div>
);

export default routes;