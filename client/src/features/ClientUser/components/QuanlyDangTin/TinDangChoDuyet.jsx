import React, { useEffect } from 'react';

import {
    Container, Card, Button, CardTitle, CardText, Row, Col, CardImg, CardBody, NavLink,
    CardSubtitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTinChoDuyetByIdUser, deleteTinDang } from '../../../../features/Admin/components/QuanLyTinDang/dangTinSlice';
import { formatVND } from '../../../../utils/format';


function TinDangChoDuyet(props) {
    const dispatch = useDispatch();
    const math = useRouteMatch();
    const tinDangList = useSelector(state => state.tinDang); // get admin in reducer tinDangOne
    const user = JSON.parse(localStorage.getItem('user'));

    const user_id = user.userFakeData._id;
    useEffect(() => {
        dispatch(getAllTinChoDuyetByIdUser({ user_id }));
    }, [])


    const handleClickXoaTin = (event) => {
        const tindang_id = event.target.value;
        dispatch(deleteTinDang(tindang_id));
        dispatch(getAllTinChoDuyetByIdUser({ user_id }));
        window.location.reload('flase');
    }

    return (
        <Container style={{ minHeight: '100vh' }}>
            <Row>
                <Col>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active><a href={math.url}>Quản lý tin chờ duyệt</a></BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>


            <Row>
                {
                    tinDangList.tinChoDuyetByIdUser.map((tindang, i) => (
                        <Col lg="3" md="4" className="mt-3" key={i}>
                            <Card style={{ minHeight: '400px' }}>
                                <CardImg top width="318px" height="180px" src={tindang.hinhanh[0]} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle> <h6><NavLink href={`/home/showonetin/${tindang.tindang_id}`} style={{ padding: '0' }}>{tindang.tindang_tieude}</NavLink></h6></CardTitle>
                                    <CardSubtitle>{new Date(tindang.create_at).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })}</CardSubtitle>
                                    <CardText>{tindang.tindang_tinhthanh}<br></br><h5 style={{ marginRight: '25px', color: '#c00' }}> {formatVND(tindang.tindang_gia, 'VNĐ')}</h5></CardText>
                                    <Button color="danger" value={tindang.tindang_id} onClick={handleClickXoaTin} >Xóa</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container >
    );
}

export default TinDangChoDuyet;