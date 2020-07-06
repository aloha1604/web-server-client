import React, { useState } from "react";

import { Container, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { useRouteMatch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addDanhMuc } from './danhMucSlice';


const ThemDanhMuc = (props) => {
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const danhMucList = useSelector(state => state.danhMuc); // get admin in reducer
    const [danhmuc_ten, setDanhmuc_ten] = useState('');

    const onChangeDanhMuc = (event) => {
        let value = event.target.value;
        setDanhmuc_ten(value);
    }

    const handleClickThemDanhMuc = () => {
        const action = addDanhMuc({ danhmuc_ten });
        dispatch(action);
    }

    return (
        <Container fluid className="content">
            <ToastContainer autoClose={2000} />
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="span">Admin</BreadcrumbItem>
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
                </FormGroup>
                <FormGroup className="text-center">
                    <Button color="primary" className="ml-auto mr-auto" onClick={handleClickThemDanhMuc}>Thêm</Button>
                </FormGroup>

            </Form>

        </Container>
    );
}

export default ThemDanhMuc;
