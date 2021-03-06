import React, { Suspense, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useSelector } from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute'
import './Admin.scss';


import SideBar from './components/SideBar'
// Lazy load - Code splitting
const Auth = React.lazy(() => import('./components/Auth'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const TatCaDanhMuc = React.lazy(() => import('./components/DanhMucSanPham/TatCaDanhMuc'));
const ThemDanhMuc = React.lazy(() => import('./components/DanhMucSanPham/ThemDanhMuc'));
const SuaDanhMuc = React.lazy(() => import('./components/DanhMucSanPham/SuaDanhMuc'));
const TatCaNhom = React.lazy(() => import('./components/NhomSanPham/TatCaNhom'));
const ThemNhom = React.lazy(() => import('./components/NhomSanPham/ThemNhom'));
const SuaNhom = React.lazy(() => import('./components/NhomSanPham/SuaNhom'));
const TinDangChoDuyet = React.lazy(() => import('./components/QuanLyTinDang/TinDangChoDuyet'));
const TinViPham = React.lazy(() => import('./components/QuanLyTinDang/TinViPham'));
const TinDaDuyet = React.lazy(() => import('./components/QuanLyTinDang/TinDaDuyet'));
const UserViPham = React.lazy(() => import('./components/QuanLyUser/UserViPham'));
const UserChuaActive = React.lazy(() => import('./components/QuanLyUser/UserChuaActive'));
const UserDaActive = React.lazy(() => import('./components/QuanLyUser/UserDaActive'))
const ThongKe = React.lazy(() => import('./components/Thongke'));


function Admin(props) {
    const match = useRouteMatch();
    const adminReducer = useSelector(state => state.adminAuth); // get admin in reducer

    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <div>

            <Suspense fallback={<div>  <Spinner style={{ width: '3rem', height: '3rem' }} color="success" />{' '}</div>}>
                <div className="App wrapper">
                    {adminReducer.admin.logged ? <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} nameAdmin={adminReducer.admin.userFakeData.name} /> : null}

                    <Switch>
                        {/* route login kiểm tra đăng nhập nếu có đăng nhập rồi sẽ giữ đăng nhập qua các trang khác */}
                        <Route exact path='/admin' component={Auth} />

                        {/* route Quản lý danh mục */}
                        <ProtectedRoute
                            exact
                            path={`${match.url}/themdanhmuc`}
                            component={ThemDanhMuc}
                        />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/suadanhmuc/:danhmuc_id/:danhmucten`}
                            component={SuaDanhMuc}
                        />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/tatcadanhmuc`}
                            component={TatCaDanhMuc}
                        />

                        {/* route Quản lý nhóm */}
                        <ProtectedRoute
                            exact
                            path={`${match.url}/themnhom`}
                            component={ThemNhom}
                        />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/suanhom/:nhom_id/:nhomten`}
                            component={SuaNhom}
                        />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/tatcanhom`}
                            component={TatCaNhom}
                        />


                        {/* route Quản lý tin */}
                        <ProtectedRoute
                            exact
                            path={`${match.url}/tindangchoduyet`}
                            component={TinDangChoDuyet}
                        />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/tinvipham`}
                            component={TinViPham}
                        />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/tindaduyet`}
                            component={TinDaDuyet} uservipham
                        />

                        {/* route Quản lý user */}
                        <ProtectedRoute
                            exact
                            path={`${match.url}/uservipham`}
                            component={UserViPham} userchuaactive
                        />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/userchuaactive`}
                            component={UserChuaActive}
                        />
                        <ProtectedRoute
                            exact
                            path={`${match.url}/userdaactive`}
                            component={UserDaActive}
                        />

                        {/* route Quản lý thống kê */}
                        <ProtectedRoute
                            exact
                            path={`${match.url}/dashBoard`}
                            component={ThongKe}
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