import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../components/homepage'
import CreateTag from '../components/Tags/createTag'
import CreateNote from '../components/Notes/createNote';
import ShowNote from '../components/Notes/showNote';
import { Translation } from '../translate/translation';


const routes = (

    <div>
        <Route exact path="/" render={()=><Homepage lang={Translation.fr} />}/>
        <Route exact path="/new-note" render={()=><CreateNote lang={Translation.fr}/>}/>
        <Route exact path="/new-tag" render={()=><CreateTag lang={Translation.fr} />}/>
        <Route exact path="/show-note/:id" render={()=><ShowNote lang={Translation.fr} />}/>
    </div>
);

export default routes;