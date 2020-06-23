import React from 'react';

import { useRouteMatch } from 'react-router-dom'
import auth from './auth'



function AuthLogin(props) {
    const match = useRouteMatch();

    return (
        <div>
            <h1> Dang nhap</h1>
            <button onClick={() => {
                auth.login(() => {
                    props.history.push(`${match.url}/dashBoard`)
                })
            }}
            >Login</button>


        </div>
    );
}

export default AuthLogin;