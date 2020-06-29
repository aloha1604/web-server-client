import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import './ClientUser.scss';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Main = React.lazy(() => import('./pages/Main'));

function ClienUser(props) {
    const math = useRouteMatch();
    return (
        <div >
            <Suspense fallback={<div>Loading ...</div>}>
                <Header />
                <div className="container">
                    <Main />
                    <switch>
                        <Route path={`${math.url}`} component={Main} />
                        <Route path={`${math.url}/dangky`} component={Main} />
                        <Route path={`${math.url}/dangnhap`} component={Main} />
                        <Route path={`${math.url}/dangxuat`} component={Main} />
                    </switch>
                </div>
                <Footer />
            </Suspense>
        </div>
    );
}

export default ClienUser;