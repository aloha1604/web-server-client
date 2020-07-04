import React, { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './ClientUser.scss';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const HomeMain = React.lazy(() => import('./components/HomeMain/HomeMain'));
const MainUser = React.lazy(() => import('./components/QuanLyUser/MainUser'));
const QuanLyTin = React.lazy(() => import('./components/QuanlyDangTin/index'));
const ShowOneTin = React.lazy(() => import('./components/QuanlyDangTin/ShowOneTin'));
const DangTin = React.lazy(() => import('./components/QuanlyDangTin/DangTin'));


function ClienUser(props) {
    const math = useRouteMatch();
    return (
        <div >
            <Suspense fallback={<div>Loading ...</div>}>
                <Header />

                <div className="appclient">

                    <Switch>
                        <Route exact path={`${math.url}`} component={HomeMain} />
                        <Route exact path={`${math.url}/showonetin`} component={ShowOneTin} />
                        <Route exact path={`${math.url}/mainuser`} component={MainUser} />
                        <Route path={`${math.url}/quanlydangtin`} component={QuanLyTin} />
                        <Route path={`${math.url}/dangtin`} component={DangTin} />
                        {/* <Route path={`${math.url}/dangxuat`} component={Main} /> */}
                    </Switch>

                </div>
                <Footer />

            </Suspense>
        </div>
    );
}

export default ClienUser;