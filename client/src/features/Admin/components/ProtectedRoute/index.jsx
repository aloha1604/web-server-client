import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../Auth/auth'
import { useDispatch, useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const admin = useSelector(state => state.admin); // get admin in reducer
    return (
        <Route {...rest}
            render={props => {
                if (admin) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to={{
                        pathname: "/",
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