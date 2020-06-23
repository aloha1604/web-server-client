import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

QlLoaiSanPham.propTypes = {

};

function QlLoaiSanPham(props) {
    const match = useRouteMatch();
    console.log({ match });
    return (
        <div>
            <Suspense fallback={<div>Loading ...</div>}>
                <p>day la admin router</p>
                <Switch>
                    {/* <Route path={`${match.url}/add`} component={} />
                    <Route path={`${match.url}/delete`} component={} />
                    <Route path={`${match.url}/update`} component={} /> */}
                </Switch>
            </Suspense>
        </div>
    );
}

export default QlLoaiSanPham;