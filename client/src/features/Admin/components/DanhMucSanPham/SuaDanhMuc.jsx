import React, { useState } from "react";

import { Container, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button, Alert } from "reactstrap";
import { useRouteMatch, useHistory, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateDanhMuc } from './danhMucSlice';


const SuaDanhMuc = (props) => {
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const { danhmuc_id, danhmucten } = useParams();
    const [danhmuc_ten, setDanhmuc_ten] = useState('');

    const onChangeDanhMuc = (event) => {
        let value = event.target.value;
        setDanhmuc_ten(value);
    }
    const handleClickUpdate = () => {
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
                </FormGroup>
                <FormGroup className="text-center">
                    <Button color="primary" className="ml-auto mr-auto" onClick={handleClickUpdate}>Update</Button>
                </FormGroup>

            </Form>

        </Container>
    );
}

export default SuaDanhMuc;
