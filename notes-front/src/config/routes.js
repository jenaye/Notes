import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../components/homepage'
import CreateTag from '../components/Tags/createTag'
import CreateNote from '../components/Notes/createNote';
import ShowNote from '../components/Notes/showNote';
import Search from '../components/search/index';
import { Translation } from '../translate/translation';


const routes = (

    <div>
        <Route exact path="/" render={()=><Homepage lang={Translation.fr} />}/>
         <Route exact path="/search" render={()=><Search lang={Translation.fr} />}/>
        <Route exact path="/new-note" render={()=><CreateNote lang={Translation.fr}/>}/>
        <Route exact path="/new-tag" render={()=><CreateTag lang={Translation.fr} />}/>
        <Route exact path="/show-note/:id" render={(props) => <ShowNote id={props.match.params.id} lang={Translation.fr}/>} />
    </div>
);

export default routes;