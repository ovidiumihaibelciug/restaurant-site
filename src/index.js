import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import {routes} from './routes';

const history = createBrowserHistory();

ReactDOM.render
(<Router history={history}>
    <React.Fragment>
        {routes.map(route => (
          <Route exact path={route.path} component={route.component} />
        ))}
    </React.Fragment>
</Router>, document.getElementById('root'));
registerServiceWorker();
