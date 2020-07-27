import React, { Suspense } from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom'

const TinDangChoDuyet = React.lazy(() => import('./TinDangChoDuyet'));
const TinDaDang = React.lazy(() => import('./TinDaDang'));
const TinBiLoi = React.lazy(() => import('./TinBiLoi'));
const ShowTin = React.lazy(() => import('./ShowTin'))



function QuanLyTin(props) {
    const math = useRouteMatch();
    return (
        <Suspense>
            <div className="mt-3">
                <Switch >
                    {/* môi route sẽ hiển thị mỗi tín năng của quản lý tin,vd: tin đã đăng, tin bị bị lỗi, tin đang chờ duyệt.... 
                sau này se sẽ có thanh toán */}
                    {/* tạo 1 cái protedUSer bảo vệ user */}
                    {/* tạo 1 cái thông báo trên cái header home */}

                    <Route exact path={`${math.url}/tindadang`} component={TinDaDang} />
                    <Route exact path={`${math.url}/tinbiloi`} component={TinBiLoi} />
                    <Route exact path={`${math.url}/tindangchoduyet`} component={TinDangChoDuyet} />
                    <Route exact path={`${math.url}/tindangchoduyet`} component={TinDangChoDuyet} />
                    
                </Switch>
            </div>
        </Suspense>


    );
}

export default QuanLyTin;