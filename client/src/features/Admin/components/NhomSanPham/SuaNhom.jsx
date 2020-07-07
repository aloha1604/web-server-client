import React, { useState, useEffect } from "react";

import { Container, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button, Alert } from "reactstrap";
import { useRouteMatch, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { updateNhom } from './nhomSlice'

const ThemNhom = (props) => {
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const { nhom_id, nhomten } = useParams();
    const [nhom_ten, setNhom_ten] = useState('');

    const onChangeNhom = (event) => {
        let value = event.target.value;
        setNhom_ten(value);
    }
    const handleClickUpdate = () => {
        const value = { nhom_id, nhom_ten }
        const action = updateNhom(value);
        dispatch(action);
    }

    return (
        <Container fluid className="content">
            <ToastContainer autoClose={2000} />
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="a" href={'/admin'}>Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Sữa Nhóm</BreadcrumbItem>
            </Breadcrumb>
            <Form>
                <FormGroup>
                    <Alert color="primary">
                        Tên danh mục: {' '}{nhom_id}
                    </Alert>
                    <Alert color="primary">
                        Tên danh mục: {' '}{nhomten}
                    </Alert>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Tên Nhóm</Label>
                    <Input
                        type="text"
                        name="txtnhom"
                        id="exampleEmail"
                        placeholder="Điền tên nhóm"
                        onChange={onChangeNhom}
                    />
                </FormGroup>
                <FormGroup className="text-center">
                    <Button color="primary" className="ml-auto mr-auto" onClick={handleClickUpdate}>Update</Button>
                </FormGroup>

            </Form>

        </Container>
    );
}

export default ThemNhom;
