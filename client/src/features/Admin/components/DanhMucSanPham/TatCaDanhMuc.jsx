import React, { useEffect } from "react";
import { Container, Table, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { useRouteMatch, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDanhMuc, removeDanhMuc } from './danhMucSlice';

const TatCaDanhMuc = (props) => {
    const history = useHistory();
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const danhMucList = useSelector(state => state.danhMuc); // get admin in reducer

    useEffect(() => {
        const action = getAllDanhMuc();
        dispatch(action);
    }, [])


    const handleClickSua = (danhmuc_id, danhmuc_ten) => {

        const SuaDanhMuc = `/admin/suadanhmuc/${danhmuc_id}/${danhmuc_ten}`;
        history.push(SuaDanhMuc);
    }

    const handleClickXoa = (danhmuc_id) => {
        const action = removeDanhMuc({ danhmuc_id });
        dispatch(action);
        const action2 = getAllDanhMuc();
        dispatch(action2);
    }

    return (
        <Container fluid className="content">
            <ToastContainer autoClose={2000} />
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="a" href={'/admin'}>Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Tất cả danh mục</BreadcrumbItem>
            </Breadcrumb>
            <Table striped>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên danh mục</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rendering danhmuc list */}
                    {danhMucList.danhMuc.map(danhmuc => (
                        <tr key={danhmuc.danhmuc_id}>
                            <td>{danhmuc.danhmuc_id}</td>
                            <td>{danhmuc.danhmuc_ten}</td>
                            <td>
                                <Button color="primary" onClick={() => handleClickSua(danhmuc.danhmuc_id, danhmuc.danhmuc_ten)}>Sữa</Button>{' '}
                                <Button color="danger" onClick={() => handleClickXoa(danhmuc.danhmuc_id)}>Xóa</Button>
                            </td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>15</td>
                        <td>Điện thoại</td>
                        <td>
                            <Button color="primary" onClick={() => handleClickSua(5)}>Sữa</Button>{' '}
                            <Button color="danger" onClick={() => handleClickXoa(5)}>Xóa</Button>
                        </td>
                    </tr> */}
                </tbody>
            </Table>

        </Container>
    );
}

export default TatCaDanhMuc;
