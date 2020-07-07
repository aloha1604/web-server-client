import React from "react";

import { Container, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button, Alert } from "reactstrap";
import { useRouteMatch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
// import { updateDanhMuc } from './danhMucSlice';


const ThemNhom = (props) => {
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const { nhom_id, danhmucten, nhomten } = useParams();
    const [danhmuc_ten, setDanhmuc_ten] = useState('');

    const onChangeNhom = (event) => {
        // let value = event.target.value;
        // setDanhmuc_ten(value);
    }
    const handleClickUpdate = () => {
        // const value = { danhmuc_id, danhmuc_ten }
        // const action = updateDanhMuc(value);
        // dispatch(action);
    }

    return (
        <Container fluid className="content">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="span">Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Sữa Nhóm</BreadcrumbItem>
            </Breadcrumb>
            <Form>
                <FormGroup>

                    <Alert color="primary">
                        Tên danh mục: {' '}{danhmucten}
                    </Alert>
                    <Alert color="primary">
                        Tên danh mục: {' '}{nhom_id}
                    </Alert>
                    <Alert color="primary">
                        Tên danh mục: {' '}{nhomten}
                    </Alert>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Danh mục sản phẩm</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Nhà đất</option>
                        <option>Xe máy</option>
                        <option>Laptop</option>
                        <option>Điện Thoại</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Tên Nhóm</Label>
                    <Input
                        type="text"
                        name="txtnhom"
                        id="exampleEmail"
                        placeholder="Điền tên nhóm"
                    />
                </FormGroup>
                <FormGroup className="text-center">
                    <Button color="primary" className="ml-auto mr-auto">Thêm</Button>
                </FormGroup>

            </Form>

        </Container>
    );
}

export default ThemNhom;
