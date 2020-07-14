import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ProtectedRouteUser = ({ component: Component, ...rest }) => {
    const useReducer = useSelector(state => state.userAuth); // get user in reducer
    return (
        <Route {...rest}
            render={props => {

                if (useReducer.user.logged) {
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

export default ProtectedRouteUser;