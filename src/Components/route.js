import React from 'react';
import homepage from './home';
import about from './about';
import Resume from './resume';
import Skills from './skills';
import Projects  from './projects';
import Contacts from './contacts';
import { Switch, Route } from 'react-router-dom';


const Router = () => (
    <Switch>
        <Route exact path="/" component={ homepage } />
        <Route path="/about" component={ about } />
        <Route path="/resume" component={ Resume } />
        <Route path="/skills" component={ Skills } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contacts" component={ Contacts } />
    </Switch>
)

export default Router;