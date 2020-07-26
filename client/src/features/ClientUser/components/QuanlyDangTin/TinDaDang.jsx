import React, { useEffect } from 'react';

import {
    Container, Card, Button, CardTitle, CardText, Row, Col, CardImg, CardBody, NavLink,
    CardSubtitle, Breadcrumb, BreadcrumbItem, Jumbotron
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
    const handleClicUuTien = (event) => {
        let value = event.target.value;
        
        //goi api
    }
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
                <Col>
                    <Jumbotron fluid >
                        <Container fluid>
                            <h5 className="display-4">Để sản phẩm có cơ hội tiếp cận đến người dùng nhiều hơn!</h5>
                            <p className="lead">1. Đăng tin tiêu đề đúng mô tả cụ thể về tin.</p>
                            <p className="lead">2. Ưu tiên tin, đầy là cách nhanh nhất để có thể tiếp cận người mua nhanh hơn qua việc ưu tiên tin của mình .
                            Tuỳ theo từng chuyên mục và khu vực, số lượng các vị trí đầu trang dành cho Tin Ưu Tiên sẽ khác nhau (từ 1 vị trí, 2 vị trí đến 5 vị trí) và số lượng trang hiển thị Tin Ưu Tiên cũng sẽ khác nhau (trang 1 hoặc trang 2). Trong trường hợp có 10 vị trí Tin Ưu Tiên hiển thị ở trang 1 và trang 2 (5 vị trí mỗi trang), các tin đăng đang được thực hiện dịch vụ sẽ chia sẻ lượt hiển thị và xuất hiện ngẫu nhiên ở 1 trong 10 vị trí ở 2 trang này
                            </p>
                        </Container>
                    </Jumbotron>
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
                                    <Button color="danger">Xóa</Button>{' '}<Button color="warning" value={tindang.tindang_id} onClick={handleClicUuTien}>Ưu tiên</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container >
    );
}

export default TinDaDang;