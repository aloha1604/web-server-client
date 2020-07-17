import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
    Container, Breadcrumb, BreadcrumbItem, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Form, FormGroup, Label, Input,
} from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
    faUser, faMapMarkerAlt, faCalendarAlt, faPhone, faFlag
} from "@fortawesome/free-solid-svg-icons";

function HomeTinDangOne(props) {
    const math = useRouteMatch();
    const [modal, setModal] = useState(false);
    const [modalViPham, setModalViPham] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleViPham = () => setModalViPham(!modalViPham);

    return (
        <Container className="mt-3">
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
                        <h2>tieu de</h2>
                    </div>
                    <div>
                        <p style={{
                            color: '#c00',
                            fontWeight: 'bolder',
                            fontSize: '16px',
                        }}>8555550</p>
                    </div>

                </Col>

            </Row>
            <Row >
                <Col md="8" className="mb-3">
                    <a style={
                        {
                            display: 'inline-block',
                            border: '1px solid #ccc',
                            padding: '5px 0',
                            textAlign: 'center',
                            marginRight: '10px',
                            marginTop: "10px"
                        }}
                        href="/"
                        color="danger" onClick={toggle} >
                        <img width="40%" height="36%" src="https://picsum.photos/200/300?grayscale" alt="" /></a>
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
                        color="danger" onClick={toggle}><img width="40%" height="36%" src="https://picsum.photos/200/300/?blur" alt="" /></a>
                    <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                        toggle={toggle} >
                        <ModalHeader toggle={toggle}>Hình ảnh </ModalHeader>
                        <ModalBody>
                            <div style={{ textAlign: 'center' }}>
                                <img width="75%" src="https://picsum.photos/200/300/?blur" alt="" />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Col>

                <Col md="4" className="mb-3">
                    <Card>
                        <CardHeader >Thông tin người dùng</CardHeader>
                        <CardBody>
                            <CardTitle><span><FontAwesomeIcon icon={faUser} />{' '}</span>Lê Quý Nam</CardTitle>
                            <CardText><span><FontAwesomeIcon icon={faCalendarAlt} />{' '}</span>16/04/2020</CardText>
                            <CardText><span><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}</span>địa chỉ</CardText>
                            <CardText><span><FontAwesomeIcon icon={faPhone} />{' '}</span> 038475269</CardText>
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rem vitae pariatur cumque. A sed error libero illo ipsam impedit omnis, rem officiis iusto neque dolorum, odit aspernatur quo quasi.
                    </p>
                </Col>



            </Row>

        </Container >


    );
}

export default HomeTinDangOne;