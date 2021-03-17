import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/index';
import Metamask from './pages/metamask';
import Dashboard from './pages/dashboard';

class Index extends Component {
    render() {
        return (
            <>
                <BrowserRouter basename={'/'}>
                    <div id="main-wrapper">
                        <Switch>
                            <Route path='/' exact component={Homepage} />
                            <Route path='/metamask' component={Metamask} />
                            <Route path='/dashboard' component={Dashboard} />
                        </Switch>
                    </div>
                </BrowserRouter>

            </>
        );
    }
}

export default Index;