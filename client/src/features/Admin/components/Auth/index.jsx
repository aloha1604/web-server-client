import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { isEmpty } from "validator";
import { login } from './authSlice';
import './auth.scss';


function AuthLogin(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const math = useRouteMatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validatetionMsg, setValidatetionMsg] = useState({});

    const admin = useSelector(state => state.admin); // get admin in reducer
    if (admin) {
        // nếu có admin thì sẽ đưa về dashBoard
        return (
            history.replace(`${math.url}/dashBoard`)
        )
    }

    const onChangeEmail = (event) => {
        const value = event.target.value;
        setUsername(value);
    }

    const onChangePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    }

    const validateAll = () => {
        const msg = {};
        if (isEmpty(username)) {
            msg.username = 'Email không được trống!!!'
        }

        if (isEmpty(password)) {
            msg.password = 'PassWord không được trống!!!'
        }

        setValidatetionMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    }

    const handleClickSubmit = () => {
        const isValidate = validateAll();
        if (!isValidate) return;

        // call api
        const value = { username, password };
        const action = login(value);
        dispatch(action);
        // history.replace(`${math.url}/dashBoard`)
    }



    return (
        <Container className="themed-container" fluid={true}>
            <Form className='form-login'>
                <FormGroup>
                    <Label for="exampleEmail" className="title">Chào mừng bạn đến với Admin page !</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Username</Label>
                    <Input
                        type="text"
                        name="email"
                        id="exampleEmail"
                        placeholder="Nhập Username"
                        onChange={onChangeEmail}
                    />
                    <p className="error">{validatetionMsg.username}</p>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Nhập password"
                        onChange={onChangePassword}
                    />
                    <p className="error">{validatetionMsg.password}</p>
                </FormGroup>
                <FormGroup className="form-login-submit">
                    <Button
                        className="form-login-submit-login"
                        color="primary"
                        onClick={handleClickSubmit}
                    >Login</Button>
                </FormGroup>

            </Form>
        </Container>
    );
}

export default AuthLogin;