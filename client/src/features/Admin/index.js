import React, { Suspense, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { useSelector } from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute'
import './Admin.scss';


import MainPage from './pages/Main'
import Content from './components/Content/Content'
import SideBar from './components/SideBar'
// Lazy load - Code splitting
const Auth = React.lazy(() => import('./components/Auth'));
// const MainPage = React.lazy(() => import('./pages/Main'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function Admin(props) {
    const match = useRouteMatch();
    const adminReducer = useSelector(state => state.adminAuth); // get admin in reducer
    console.log(match)

    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <div>

            <Suspense fallback={<div>Loading ...</div>}>
                <div className="App wrapper">
                    {adminReducer.admin.logged ? <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} nameAdmin={adminReducer.admin.userFakeData.name} /> : null}

                    <Switch>
                        <Route exact path='/admin' component={Auth} />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/themdanhmuc`}
                            component={() => "themdanhmucaaaa"}
                        />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/dashBoard`}
                            component={() => "themdanhmuc"}
                        />
                        {/* phải dùng cách proteced 1 router thì xài 1 pagecomponent và bỏ side bar vào */}
                        <Route path="/admin/*" component={NotFound} />
                    </Switch>
                </div>
            </Suspense>
        </div >
    );
}

export default Admin;