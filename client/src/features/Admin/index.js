import React, { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';


import ProtectedRoute from './components/ProtectedRoute'
import './Admin.scss';


import MainPage from './pages/Main'
// import Content from './components/Content/Content'
// Lazy load - Code splitting
const Auth = React.lazy(() => import('./components/Auth'));
// const MainPage = React.lazy(() => import('./pages/Main'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function Admin(props) {
    const match = useRouteMatch();
    console.log(match)
    return (
        <div>

            <Suspense fallback={<div>Loading ...</div>}>

                <Switch>
                    <Route exact path='/admin' component={Auth} />
                    {/* <Route exact path={`${match.url}/dashBoard`} component={Content} /> */}
                    {/* <ProtectedRoute
                        exact
                        path={`${match.url}/quanly`}
                        component={() => "Home-1"}
                    /> */}
                    <ProtectedRoute
                        exact
                        path={`${match.url}/dashBoard`}
                        component={MainPage}
                    />
                    {/* phải dùng cách proteced 1 router thì xài 1 pagecomponent và bỏ side bar vào */}
                    <Route path="/admin/*" component={NotFound} />
                </Switch>
            </Suspense>
        </div >
    );
}

export default Admin;