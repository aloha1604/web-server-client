import React, { Suspense, useState } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Content from '../components/Content/Content'
import NotFound from '../components/NotFound'
import ProtectedRoute from '../components/ProtectedRoute'



function Main(props) {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const match = useRouteMatch();
    console.log(match);

    return (
        <div className="App wrapper">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />

            {/* trong day chi co the viet code xu ly du lieu */}

            <Switch>

                <Route path={`/admin/dashBoard/aaaa`} component={NotFound} />
                <Route exac path={`${match.url}/about`} component={() => "About"} />
                <Route component={NotFound} />
            </Switch>


        </div>
    );
}

export default Main;