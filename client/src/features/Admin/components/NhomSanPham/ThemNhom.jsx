import React, { useState, useEffect } from "react";

import { Container, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { useRouteMatch } from 'react-router-dom'
import { addNhom } from './nhomSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDanhMuc } from '../DanhMucSanPham/danhMucSlice';


const ThemNhom = (props) => {
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const [nhom_ten, setNhom_ten] = useState('');
    const [danhmuc_id, setDanhmuc_id] = useState('');
    const danhMucList = useSelector(state => state.danhMuc); // get danhmuc in reducer

    useEffect(() => {
        dispatch(getAllDanhMuc());
    }, [])
    const onChangeNhom = (event) => {
        let value = event.target.value;
        setNhom_ten(value);
    }
    const onChangeSelected = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        setDanhmuc_id(value);
    }

    const handleClickThemDanhNhom = () => {
        const action = addNhom({ danhmuc_id, nhom_ten });
        dispatch(action);
    }

    return (
        <Container fluid className="content">
            <ToastContainer autoClose={2000} />
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="a" href={'/admin'}>Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Thêm Nhóm</BreadcrumbItem>
            </Breadcrumb>
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Danh mục sản phẩm</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={onChangeSelected} >
                        <option value="N/A">Tất cả</option>
                        {danhMucList.danhMuc.map(danhmuc => (
                            <option value={danhmuc.danhmuc_id}>{danhmuc.danhmuc_ten}</option>
                        ))}
                    </Input>
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
                    <Button
                        color="primary"
                        className="ml-auto mr-auto"
                        onClick={handleClickThemDanhNhom}>Add
                    </Button>
                </FormGroup>

            </Form>

        </Container>
    );
}

export default ThemNhom;
