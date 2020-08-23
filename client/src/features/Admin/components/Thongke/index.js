import React, { useEffect } from 'react';
import { Container, Col, Row, Card, Button, CardTitle, CardText, Badge, Table } from 'reactstrap';
import {
    faDollarSign,
    faSyncAlt,
    faFileInvoiceDollar,
    faHandHoldingUsd,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import { getAllThongKe } from './thongKeSlice';
import { formatVND } from '../../../../utils/format'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ThongKe = (props) => {
    const dispatch = useDispatch();
    const thongKeList = useSelector(state => state.thongKe); // get nhom in reducer

    useEffect(() => {
        dispatch(getAllThongKe());
    }, [])
    return (
        <Container fluid className="content">

            <Row>
                <Col lg="3" md="4" className="mt-3">
                    <Card body outline >
                        <CardTitle><h3 className="text-center" style={{ color: '#9a9a9a' }}> <FontAwesomeIcon style={{ color: '#fbc658' }} icon={faDollarSign} className="mr-2" />Tổng đồng rao</h3></CardTitle>
                        <hr ></hr>
                        <CardText><h4>{formatVND(thongKeList.thongKe.tongDongRao, '')}<Badge color="secondary">DR</Badge></h4> </CardText>
                        <hr></hr>
                        <div> <FontAwesomeIcon style={{ color: '#fbc658' }} icon={faSyncAlt} className="mr-2" /> Update Now</div>
                    </Card>
                </Col>

                <Col lg="3" md="4" className="mt-3">
                    <Card body outline >
                        <CardTitle><h3 className="text-center" style={{ color: '#6bd098' }}> <FontAwesomeIcon style={{ color: '#6bd098' }} icon={faFileInvoiceDollar} className="mr-2" />Tiền đăng tin</h3></CardTitle>
                        <hr ></hr>
                        <CardText><h4>{formatVND(thongKeList.thongKe.tongTienDangTin, '')}<Badge color="secondary">DR</Badge></h4> </CardText>
                        <hr></hr>
                        <div> <FontAwesomeIcon style={{ color: '#6bd098' }} icon={faSyncAlt} className="mr-2" /> Update Now</div>
                    </Card>
                </Col>

                <Col lg="3" md="4" className="mt-3">
                    <Card body outline >
                        <CardTitle><h3 className="text-center" style={{ color: '#ef8157' }}> <FontAwesomeIcon style={{ color: '#ef8157' }} icon={faHandHoldingUsd} className="mr-2" />Tiền ưu tiên</h3></CardTitle>
                        <hr ></hr>
                        <CardText><h4>{formatVND(thongKeList.thongKe.tongTienUuTien, '')}<Badge color="secondary">DR</Badge></h4> </CardText>
                        <hr></hr>
                        <div> <FontAwesomeIcon style={{ color: '#ef8157' }} icon={faSyncAlt} className="mr-2" /> Update Now</div>
                    </Card>
                </Col>


                <Col lg="3" md="4" className="mt-3">
                    <Card body outline >
                        <CardTitle><h3 className="text-center" style={{ color: '#51cbce' }}> <FontAwesomeIcon style={{ color: '#51cbce' }} icon={faGlobe} className="mr-2" />Doanh thu</h3></CardTitle>
                        <hr ></hr>
                        <CardText><h4>{formatVND(thongKeList.thongKe.doanhThu, '')}<Badge color="secondary">DR</Badge></h4> </CardText>
                        <hr></hr>
                        <div> <FontAwesomeIcon style={{ color: '#51cbce' }} icon={faSyncAlt} className="mr-2" /> Update Now</div>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col lg="9" md="9">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Loại </th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#252422' }}>
                            <tr>
                                <td><h6>Tin chờ duyệt</h6></td>
                                <td>{thongKeList.thongKe.soLuongTinChoDuyet}</td>
                            </tr>
                            <tr>
                                <td><h6>Tin đã duyệt</h6></td>
                                <td>{thongKeList.thongKe.soLuongTinDaDuyet}</td>
                            </tr>
                            <tr>
                                <td><h6>Tin bị lỗi</h6></td>
                                <td>{thongKeList.thongKe.soLuongTinBiLoi}</td>
                            </tr>
                            <tr>
                                <td><h6>Số lần ưu tiên</h6></td>
                                <td>{thongKeList.thongKe.soLanUuTien}</td>
                            </tr>
                            <tr>
                                <td><h6>User chưa active</h6></td>
                                <td>{thongKeList.thongKe.soLuongUserChuaActive}</td>
                            </tr>
                            <tr>
                                <td><h6>User đã active</h6></td>
                                <td>{thongKeList.thongKe.soLuongUserActive}</td>
                            </tr>

                        </tbody>
                    </Table>
                </Col>
                <Col lg="3" md="3">
                    <Calendar

                    />
                </Col>
            </Row>
        </Container >
    );
}

export default ThongKe;