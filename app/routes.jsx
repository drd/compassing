var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import {App, Posts, Post} from './app';


var Routes = (
    <Route name="App" handler={App} path="/">
        <Route name="ViewPost" handler={Post} path="/posts/:id"/>
        {/* <Route name="EditPost" handler={Edit} path="/posts/:id/edit"/> */}
        <DefaultRoute handler={Posts}/>
    </Route>
);



export default Routes;
