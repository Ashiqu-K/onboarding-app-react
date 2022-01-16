import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './index.scss';
import { Dashboard, Onboarding } from './Pages';

const App = () => (
    <>
        <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/onboarding" component={Onboarding} />
            <Redirect to="/onboarding" />
        </Switch>
    </>
);

export default App;
