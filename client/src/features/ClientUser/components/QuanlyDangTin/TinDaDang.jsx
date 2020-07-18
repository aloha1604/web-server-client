import React, { useEffect } from 'react';

import {
    Container, Card, Button, CardTitle, CardText, Row, Col, CardImg, CardBody, NavLink,
    CardSubtitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTinDaDuyetByIdUser } from '../../../../features/Admin/components/QuanLyTinDang/dangTinSlice';
import { formatVND } from '../../../../utils/format';


function TinDaDang(props) {
    const dispatch = useDispatch();
    const tinDangList = useSelector(state => state.tinDang); // get admin in reducer tinDangOne
    const user = JSON.parse(localStorage.getItem('user'));

    const user_id = user.userFakeData._id;
    useEffect(() => {
        dispatch(getAllTinDaDuyetByIdUser({ user_id }));
    }, [])

    const math = useRouteMatch();
    return (
        <Container style={{ minHeight: '100vh' }}>
            <Row>
                <Col>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active><a href={math.url}>Quản lý tin đã đăng</a></BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>


            <Row>
                {
                    tinDangList.tinDaDuyetByIdUser.map((tindang, i) => (
                        <Col lg="3" md="4" className="mt-3" key={i}>
                            <Card style={{ minHeight: '400px' }}>
                                <CardImg top width="318px" height="180px" src={tindang.hinhanh[0]} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle> <h6><NavLink href={`/home/showonetin/${tindang.tindang_id}`} style={{ padding: '0' }}>{tindang.tindang_tieude}</NavLink></h6></CardTitle>
                                    <CardSubtitle>{new Date(tindang.create_at).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })}</CardSubtitle>
                                    <CardText>{tindang.tindang_tinhthanh}<br></br><h5 style={{ marginRight: '25px', color: '#c00' }}> {formatVND(tindang.tindang_gia, 'VNĐ')}</h5></CardText>
                                    <Button color="danger">Xóa</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }

                {/* <Col lg="3" md="4" className="mt-3">
                    <Card>
                        <CardImg top width="318px" height="180px" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="danger">Xóa</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" md="4" className="mt-3">
                    <Card>
                        <CardImg top width="318px" height="180px" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="danger">Xóa</Button>
                        </CardBody>
                    </Card>
                </Col>
         */}
            </Row>
        </Container >
    );
}

export default TinDaDang;