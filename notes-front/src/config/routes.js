import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../components/homepage'
import CreateTag from '../components/Tags/createTag'
import CreateNote from '../components/Notes/createNote';
import { fr  } from '../translate/fr';



const routes = (

    <div>
        <Route exact path="/" render={()=><Homepage lang={fr}/>}/>
        <Route exact path="/new-note" render={()=><CreateNote lang={fr}/>}/>
        <Route exact path="/tags" render={()=><CreateTag lang={fr}/>}/>
    </div>
);

export default routes;