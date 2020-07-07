import React, { useEffect } from 'react';

// import ShowTin from '../QuanlyDangTin/ShowTin';
import { Container, Col, ListGroup, ListGroupItem } from 'reactstrap'

import { useDispatch, useSelector } from 'react-redux';

import { getAllNhom } from '../../../Admin/components/NhomSanPham/nhomSlice';
import { getAllDanhMuc } from '../../../Admin/components/DanhMucSanPham/danhMucSlice';

function HomeMain(props) {
    const dispatch = useDispatch();
    const danhMucList = useSelector(state => state.danhMuc); // get admin in reducer
    const nhomList = useSelector(state => state.nhom); // get nhom in reducer

    useEffect(() => {
        dispatch(getAllDanhMuc());
        dispatch(getAllNhom());

    }, [])

    return (
        <Container>
            {
                danhMucList.danhMuc.map(danhmuc => (
                    <ListGroup className="mt-3">
                        <ListGroupItem active tag="a" href="#" action>{danhmuc.danhmuc_ten}</ListGroupItem>
                        {nhomList.nhom.map(nhom => {
                            if (nhom.danhmuc_id === danhmuc.danhmuc_id)
                                return (<ListGroupItem color="info" tag="a" href="#" action>{nhom.nhom_ten}</ListGroupItem>)
                        })}
                    </ListGroup>
                ))
            }
        </Container>
    );
}

export default HomeMain;