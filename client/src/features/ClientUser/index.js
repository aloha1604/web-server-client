import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import './ClientUser.scss';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));

function ClienUser(props) {
    return (
        <div className="wrapper">
            <p>client end</p>
            <Suspense fallback={<div>Loading ...</div>}>
                <Header />

                <switch>
                    <Route />
                </switch>
                <Footer />
            </Suspense>
        </div>
    );
}

export default ClienUser;