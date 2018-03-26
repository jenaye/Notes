import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../components/homepage'
import CreateTag from '../components/Tags/createTag'
import CreateNote from '../components/Notes/createNote';
import { translation  } from '../translate/translation';


const routes = (

    <div>
        <Route exact path="/" render={()=><Homepage lang={translation.fr}/>}/>
        <Route exact path="/new-note" render={()=><CreateNote lang={translation.fr}/>}/>
        <Route exact path="/tags" render={()=><CreateTag lang={translation.fr}/>}/>
    </div>
);

export default routes;