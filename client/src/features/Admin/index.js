import React, { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';


import ProtectedRoute from './components/ProtectedRoute'
import './Admin.scss';



// Lazy load - Code splitting
const Auth = React.lazy(() => import('./components/Auth'));
const MainPage = React.lazy(() => import('./pages/Main'));
const NotFound = React.lazy(() => import('./components/NotFound'));

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