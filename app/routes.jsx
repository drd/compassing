var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import {App, Posts, Post, Edit} from './app';


var Routes = (
    <Route name="App" handler={App} path="/">
        <Route name="NewPost" handler={Edit} path="/posts/new"/>
        <Route name="ViewPost" handler={Post} path="/posts/:id"/>
        <Route name="EditPost" handler={Edit} path="/posts/:id/edit"/>
        <DefaultRoute handler={Posts}/>
    </Route>
);



export default Routes;
