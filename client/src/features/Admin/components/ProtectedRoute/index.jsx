import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const adminReducer = useSelector(state => state.adminAuth); // get admin in reducer
    return (
        <Route {...rest}
            render={props => {

                if (adminReducer.admin.logged) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={{
                        pathname: "/admin",
                        state: {
                            from: props.location
                        }
                    }
                    }
                    />
                }

            }}
        />
    )
}

export default ProtectedRoute;