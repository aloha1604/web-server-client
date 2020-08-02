import React, { useState } from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { isEmpty, isEmail } from "validator";
import { resetPasswordUser } from '../../reducer/userSlice';
import { useDispatch, useSelector } from 'react-redux';


function ResetPassword(props) {
    const [matkhaucu, setMatkhaucu] = useState('');
    const [matkhaumoi, setMatkhaumoi] = useState('');
    const [nhaplaimatkhaumoi, setNhaplaimatkhaumoi] = useState('');
    const dispatch = useDispatch();
    const [validatetionMsg, setValidatetionMsg] = useState({});

    const onChangeMatkhaucu = (event) => {
        const value = event.target.value;
        setMatkhaucu(value);
    }
    const onChangeMatkhaumoi = (event) => {
        const value = event.target.value;
        setMatkhaumoi(value);
    }
    const onChangeNhaplaimatkhaumoi = (event) => {
        const value = event.target.value;
        setNhaplaimatkhaumoi(value);
    }
    const validateAll = () => {
        const msg = {};
        if (isEmpty(matkhaucu)) {
            msg.empty = 'Không được để trống!!!'
        }

        if (matkhaumoi.normalize() !== nhaplaimatkhaumoi.normalize()) {
            msg.khongTrung = 'Mật khẩu mới khác nhau !!!'
        }


        setValidatetionMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    }

    const handleClickDoimatkhau = () => {
        const isValidate = validateAll();
        if (!isValidate) {
            return;
        };
        // //call api
        // const value = { email };
        // const action = resetPasswordUser(value);
        // dispatch(action);

    }

    return (
        <Container className="mt-5">
            <Row className="mt-5 justify-content-center " >
                <Col md='6'>
                    <Form>
                        <FormGroup>
                            <Breadcrumb>
                                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Đổi mật khẩu</BreadcrumbItem>
                            </Breadcrumb>
                        </FormGroup>
                        <FormGroup>
                            <Label for="matkhaucu">Mật khẩu cũ </Label>
                            <Input
                                type="password"
                                name="matkhaucu"
                                id="matkhaucu"
                                placeholder="Nhập mật khẩu cũ"
                                onChange={onChangeMatkhaucu}
                            />
                            <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label for="matkhaumoi">Mật khẩu mới</Label>
                            <Input
                                type="password"
                                name="matkhaumoi"
                                id="matkhaumoi"
                                placeholder="Nhập mật khẩu mới"
                                onChange={onChangeMatkhaumoi}
                            />
                            <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nhaplaimatkhaumoi">Nhập lại mật khẩu mới</Label>
                            <Input
                                type="password"
                                name="nhaplaimatkhaumoi"
                                id="nhaplaimatkhaumoi"
                                placeholder="Nhập lại mật khẩu mới"
                                onChange={onChangeNhaplaimatkhaumoi}
                            />
                            <p style={{ color: 'red' }}>{validatetionMsg.khongTrung}</p>
                            <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                        </FormGroup>
                        <FormGroup style={{ textAlign: 'center' }}>
                            <Button onClick={handleClickDoimatkhau}>Đổi mật khẩu</Button>
                        </FormGroup>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ResetPassword;