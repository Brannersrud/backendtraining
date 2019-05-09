import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PanelView from './components/panelview';
import Login from './components/login';
import Form from './components/form';


function AppRouter(){
    return(
        <Router>
            <Route path="/" exact component={Form}/>
            <Route path="/login" component={Login}/>
            <Route path="/adminpanel" component={PanelView}/>
        </Router>
    )
}
export default AppRouter;