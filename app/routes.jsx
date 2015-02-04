var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import {App, Posts} from './app';

var Routes = (
    <Route name="App" handler={App} path="/">
        <DefaultRoute handler={Posts}/>
    </Route>
);



export default Routes;
