import React, { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './ClientUser.scss';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const HomeMain = React.lazy(() => import('./components/HomeMain/HomeMain'));
const HomMainTinDang = React.lazy(() => import('./components/HomeMain/HomeTinDang'));
const HomeMainSearch = React.lazy(() => import('./components/HomeMain/HomeMainSearch'));
const MainUser = React.lazy(() => import('./components/QuanLyUser/MainUser'));
const QuanLyTin = React.lazy(() => import('./components/QuanlyDangTin/index'));
const ShowOneTin = React.lazy(() => import('./components/QuanlyDangTin/ShowOneTin'));
const DangTin = React.lazy(() => import('./components/QuanlyDangTin/DangTin'));
const ProtectedRouteUser = React.lazy(() => import('./components/ProtectedRouteUser'));

const ResetPassword = React.lazy(() => import('./components/QuanLyUser/ResetPassword'))
const NapDongRao = React.lazy(() => import('./components/NapTien/NapDongRao'));
const ThanhToan = React.lazy(() => import('./components/NapTien/ThanhToan'));



function ClienUser(props) {
    const math = useRouteMatch();
    return (
        <div >
            <Suspense fallback={<div>Loading ...</div>}>
                <Header />

                <div className="appclient">

                    <Switch>
                        <Route exact path={`${math.url}`} component={HomeMain} />
                        <Route exact path={`${math.url}/napdongrao`} component={NapDongRao} />
                        <Route exact path={`${math.url}/thanhtoan`} component={ThanhToan} />
                        <Route exact path={`${math.url}/showtin/:nhom_id/:nhom_ten/:page`} component={HomMainTinDang} />
                        <Route exact path={`${math.url}/showonetin/:tindang_id`} component={ShowOneTin} />
                        <Route exact path={`${math.url}/showtinsearch/:nhom_id/:tieude/:tinhThanh/:quanHuyen/:phuongXa/:page`} component={HomeMainSearch} />
                        {/* <Route exact path={`${math.url}/mainuser`} component={MainUser} /> */}
                        <ProtectedRouteUser exact path={`${math.url}/mainuser`} component={MainUser} />
                        {/* <Route path={`${math.url}/quanlydangtin`} component={QuanLyTin} /> */}
                        <ProtectedRouteUser path={`${math.url}/quanlydangtin`} component={QuanLyTin} />
                        {/* <Route path={`${math.url}/dangtin`} component={DangTin} /> */}
                        <ProtectedRouteUser path={`${math.url}/dangtin`} component={DangTin} />
                        {/* <Route path={`${math.url}/dangxuat`} component={Main} /> */}
                    </Switch>
                    {/* <Footer /> */}
                </div>
                <Footer />

            </Suspense>
        </div>
    );
}

export default ClienUser;