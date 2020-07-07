import React, { useState } from "react";

import { Container, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button, Alert } from "reactstrap";
import { useRouteMatch, useHistory, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateDanhMuc } from './danhMucSlice';
import { isEmpty } from "validator";

const SuaDanhMuc = (props) => {
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const { danhmuc_id, danhmucten } = useParams();
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

    const handleClickUpdate = () => {
        const isValidate = validateAll();
        if (!isValidate) return;

        const value = { danhmuc_id, danhmuc_ten }
        const action = updateDanhMuc(value);
        dispatch(action);
    }


    return (
        <Container fluid className="content">
            <ToastContainer autoClose={2000} />
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="a" href={'/admin'}>Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Sữa danh mụcdanh mục</BreadcrumbItem>
            </Breadcrumb>
            <Form>
                <FormGroup>

                    <Alert color="primary">
                        ID danh mục:{' '}{danhmuc_id}
                    </Alert>
                    <Alert color="primary">
                        Tên danh mục: {' '}{danhmucten}
                    </Alert>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleTendanhmuc">Tên danh mục</Label>
                    <Input
                        type="text"
                        name="txtdanhmuc"
                        id="exampleTendanhmuc"
                        placeholder="Điền tên danh mục"
                        onChange={onChangeDanhMuc}
                    />
                    <p style={{ color: 'red' }}>{validatetionMsg.danhmuc}</p>
                </FormGroup>
                <FormGroup className="text-center">
                    <Button color="primary" className="ml-auto mr-auto" onClick={handleClickUpdate}>Update</Button>
                </FormGroup>

            </Form>

        </Container>
    );
}

export default SuaDanhMuc;
