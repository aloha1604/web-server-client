import React, { useState } from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { isEmpty, isEmail } from "validator";
import { resetPasswordUser } from '../../reducer/userSlice';
import { useDispatch, useSelector } from 'react-redux';


function ResetPassword(props) {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const [validatetionMsg, setValidatetionMsg] = useState({});

    const onChangeEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    }
    const validateAll = () => {
        const msg = {};
        if (isEmpty(email)) {
            msg.email = 'Email không được trống!!!'
        } else if (!isEmail(email)) {
            msg.email = 'Không phải email !!!'
        }

        setValidatetionMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    }

    const handleClickResetPassord = () => {
        const isValidate = validateAll();
        if (!isValidate) {
            return;
        };
        //call api
        const value = { email };
        const action = resetPasswordUser(value);
        dispatch(action);

    }

    return (
        <Container className="mt-5">
            <Row className="mt-5 justify-content-center " >
                <Col md='6'>
                    <Form>
                        <FormGroup>
                            <Breadcrumb>
                                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Quên mật khẩu</BreadcrumbItem>
                            </Breadcrumb>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Nhập Email"
                                onChange={onChangeEmail}
                            />
                            <p style={{ color: 'red' }}>{validatetionMsg.email}</p>
                        </FormGroup>
                        <FormGroup style={{ textAlign: 'center' }}>
                            <Button onClick={handleClickResetPassord}>Resset Password</Button>
                        </FormGroup>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ResetPassword;