import React, { useState } from "react";

import { Container, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { useRouteMatch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addDanhMuc } from './danhMucSlice';
import { isEmpty } from "validator";


const ThemDanhMuc = (props) => {
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const [danhmuc_ten, setDanhmuc_ten] = useState('');
    const [validatetionMsg, setValidatetionMsg] = useState({});

    const validateAll = () => {
        const msg = {};
        if (isEmpty(danhmuc_ten)) {
            msg.danhmuc = 'Danh mục không được trống!!!'
        }

        setValidatetionMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    }
    const onChangeDanhMuc = (event) => {
        let value = event.target.value;
        setDanhmuc_ten(value);
    }

    const handleClickThemDanhMuc = () => {
        const isValidate = validateAll();
        if (!isValidate) return;

        const action = addDanhMuc({ danhmuc_ten });
        setDanhmuc_ten('');
        dispatch(action);

    }

    return (
        <Container fluid className="content">
            <ToastContainer autoClose={2000} />
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="a" href={'/admin'}>Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Thêm danh mụcdanh mục</BreadcrumbItem>
            </Breadcrumb>
            <Form>
                <FormGroup>
                    <Label for="exampleDanhMuc">Tên danh mục</Label>
                    <Input
                        type="text"
                        name="txtdanhmuc"
                        id="exampleDanhMuc"
                        placeholder="Điền tên danh mục"
                        onChange={onChangeDanhMuc}
                    />
                    <p style={{ color: 'red' }}>{validatetionMsg.danhmuc}</p>
                </FormGroup>
                <FormGroup className="text-center">
                    <Button color="primary" className="ml-auto mr-auto" onClick={handleClickThemDanhMuc}>Add</Button>
                </FormGroup>

            </Form>

        </Container>
    );
}

export default ThemDanhMuc;
