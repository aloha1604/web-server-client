import React, { useEffect } from "react";
import { Container, Table, Breadcrumb, BreadcrumbItem, Button, Badge } from "reactstrap";
import { useRouteMatch, useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDanhMuc, removeDanhMuc } from '../DanhMucSanPham/danhMucSlice';
import { getAllNhom } from './nhomSlice'
const TatCaNhom = (props) => {

    const math = useRouteMatch();
    const history = useHistory();
    const dispatch = useDispatch();
    const danhMucList = useSelector(state => state.danhMuc); // get danhmuc in reducer
    const nhomList = useSelector(state => state.nhom); // get nhom in reducer


    useEffect(() => {

        dispatch(getAllDanhMuc());
        dispatch(getAllNhom());

    }, [])

    return (
        <Container fluid className="content">
            <ToastContainer autoClose={2000} />
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="span">Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Tất cả Nhóm</BreadcrumbItem>
            </Breadcrumb>
            {danhMucList.danhMuc.map(danhmuc => (
                <div>
                    <h4> Danh mục: <Badge color="secondary">{danhmuc.danhmuc_ten}</Badge></h4>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên Nhóm</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>

                        <tbody>
                            {nhomList.nhom.map(nhom => {
                                if (nhom.danhmuc_id === danhmuc.danhmuc_id)
                                    return (
                                        <tr key={nhom.nhom_id}>
                                            <td>{nhom.nhom_id}</td>
                                            <td style={{ minWidth: '250px' }}>{nhom.nhom_ten}</td>
                                            <td><Button color="primary">Sữa</Button>{' '}<Button color="danger">Xóa</Button></td>
                                        </tr>
                                    );
                            })}


                        </tbody>
                    </Table>
                </div>))}


        </Container>
    );
}

export default TatCaNhom;
