import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';


import MainPage from './pages/Main';
import NotFound from './components/NotFound';
import SideBar from "./components/SideBar"
import Auth from './components/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import './Admin.scss';



// Lazy load - Code splitting
const QlLoaiSanPham = React.lazy(() => import('./QlLoaiSanPham'));
const QlSanPham = React.lazy(() => import('./QlSanPham'));

function Admin(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Suspense fallback={<div>Loading ...</div>}>

                <Switch>
                    <Route exact path='/admin' component={Auth} />
                    {/* <Route exact path={`${match.url}/dashBoard`} component={MainPage} /> */}
                    <ProtectedRoute
                        exact
                        path={`${match.url}/dashBoard`}
                        component={MainPage}
                    />
                    <Route path="/admin/*" component={NotFound} />
                </Switch>
            </Suspense>
        </div >
    );
}

export default Admin;