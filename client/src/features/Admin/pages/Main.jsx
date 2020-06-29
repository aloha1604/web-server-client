import React, { Suspense, useState } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Content from '../components/Content/Content'
import NotFound from '../components/NotFound'



function Main(props) {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const match = useRouteMatch();
    console.log(match);
    return (
        <div className="App wrapper">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />


            <Switch>
                <Content />

                <Route exact path={`${match.url}/Home-1`} component={() => "Home-1"} />
                <Route exact path={`${match.url}/about`} component={() => "About"} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default Main;