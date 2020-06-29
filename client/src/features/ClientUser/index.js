import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import './ClientUser.scss';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Main = React.lazy(() => import('./pages/main'));

function ClienUser(props) {
    return (
        <div >
            <Suspense fallback={<div>Loading ...</div>}>
                <Header />
                <div className="container">
                    <Main />
                </div>

                {/* <switch>
                    <Route />
                </switch> */}
                <Footer />
            </Suspense>
        </div>
    );
}

export default ClienUser;