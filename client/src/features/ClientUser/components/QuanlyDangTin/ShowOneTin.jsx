import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
    Container, Breadcrumb, BreadcrumbItem, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTinDangOne } from '../../../Admin/components/QuanLyTinDang/dangTinSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { formatVND } from '../../../../utils/format'

import {
    faUser, faMapMarkerAlt, faPhone, faFlag, faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";

function ShowOneTin(props) {
    const dispatch = useDispatch();
    const math = useRouteMatch();
    const { tindang_id } = useParams();
    const [modal, setModal] = useState(false);
    const [urlHinh, setURLHinh] = useState('');
    const [modalViPham, setModalViPham] = useState(false);
    const tinDangList = useSelector(state => state.tinDang); // get admin in reducer tinDangOne
    const toggle = (event) => {
        let value = event.target.src;
        setURLHinh(value)
        setModal(!modal)
    };
    const toggleViPham = () => setModalViPham(!modalViPham);
    console.log(tindang_id)
    useEffect(() => {
        dispatch(getAllTinDangOne({ tindang_id }));
    }, [])
    console.log(urlHinh)
    return (

        <Container className="mt-3">
            {
                tinDangList.tinDangOne.map((tindang, i) => (
                    <div>
                        <Row>
                            <Col>
                                <Breadcrumb>
                                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                                    <BreadcrumbItem active><a href={math.url}>Hiển thị tin</a></BreadcrumbItem>
                                </Breadcrumb>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div>
                                    <h2>{tindang.tindang_tieude}</h2>
                                </div>
                                <div>
                                    <p style={{
                                        color: '#c00',
                                        fontWeight: 'bolder',
                                        fontSize: '16px',
                                    }}>{formatVND(tindang.tindang_gia, 'VND')} </p>
                                </div>

                            </Col>

                        </Row>
                        <Row >
                            <Col md="8" className="mb-3">
                                {tindang.hinhanh.map((hinhanh, i) => (
                                    <span key={i}>
                                        <a style={
                                            {
                                                display: 'inline-block',
                                                border: '1px solid #ccc',
                                                padding: '5px 0',
                                                textAlign: 'center',
                                                marginRight: '10px',
                                                marginTop: "10px",
                                            }}

                                            color="danger" onClick={toggle} >
                                            <img width="40%" height="50%" src={hinhanh} alt={hinhanh} />
                                        </a>

                                        <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                                            toggle={toggle} >
                                            <ModalHeader toggle={toggle}>Hình ảnh </ModalHeader>
                                            <ModalBody>
                                                <div style={{ textAlign: 'center' }}>
                                                    <img width="100%" src={urlHinh} alt="" />
                                                </div>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                                            </ModalFooter>
                                        </Modal>
                                    </span>
                                ))}
                                {/* 

                                <span>
                                    <a style={
                                        {
                                            display: 'inline-block',
                                            border: '1px solid #ccc',
                                            padding: '5px 0',
                                            textAlign: 'center',
                                            marginRight: '10px',
                                            marginTop: "10px"

                                        }
                                    }
                                        color="danger" onClick={toggle}><img width="40%" height="36%" src="https://picsum.photos/200/300?grayscale" alt="" /></a>
                                    <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                                        toggle={toggle} >
                                        <ModalHeader toggle={toggle}>Hình ảnh </ModalHeader>
                                        <ModalBody>
                                            <div style={{ textAlign: 'center' }}>
                                                <img width="75%" src="https://picsum.photos/200/300?grayscale" alt="" />
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                                </span> */}




                            </Col>

                            <Col md="4" className="mb-3">
                                <Card>
                                    <CardHeader >Thông tin người dùng</CardHeader>
                                    <CardBody>
                                        <CardTitle><span><FontAwesomeIcon icon={faUser} />{' '}</span>{tindang.tindang_hoten}</CardTitle>
                                        <CardText><span><FontAwesomeIcon icon={faEnvelopeSquare} />{' '}</span>{tindang.tindang_email}</CardText>
                                        <CardText><span><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}</span>{tindang.tindang_diachi}</CardText>
                                        <CardText><span><FontAwesomeIcon icon={faPhone} />{' '}</span> {tindang.tindang_phone}</CardText>
                                    </CardBody>
                                    <CardFooter>
                                        <Button color="warning" onClick={toggleViPham}>
                                            <span>
                                                <FontAwesomeIcon icon={faFlag} />{' '}
                                            </span>
                                Báo cáo vi phạm
                            </Button>
                                        <Modal isOpen={modalViPham} toggle={toggleViPham}>
                                            <ModalHeader toggle={toggleViPham}> Báo cáo vi phạm</ModalHeader>
                                            <ModalBody>
                                                <Form>
                                                    <FormGroup>
                                                        <Label for="exampleText">Text Area</Label>
                                                        <Input style={
                                                            {
                                                                height: '250px'
                                                            }
                                                        } type="textarea" name="text" id="exampleText" />
                                                    </FormGroup>
                                                </Form>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="primary" onClick={toggleViPham}>Gửi</Button>{' '}
                                                <Button color="secondary" onClick={toggleViPham}>Hủy</Button>
                                            </ModalFooter>
                                        </Modal>
                                    </CardFooter>
                                </Card>
                            </Col>

                            <Col>
                                <h4>Nội dung</h4>
                                <p>
                                    {tindang.tindang_noidung}
                                </p>
                            </Col>



                        </Row>
                    </div>
                ))
            }


        </Container >


    );
}

export default ShowOneTin;