import React, { useState } from 'react';
import { Container, Row, Col, Form, Breadcrumb, BreadcrumbItem, Button, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, Media } from 'reactstrap';
import QuyDinhNapTien from './QuyDinhNapTien';
import { useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
// fa-euro-sign
var imgStyle = {
    maxWidth: "100px",
    heightWidth: "100px",

};
function NapDongRao(props) {
    const math = useRouteMatch();
    const {
        buttonLabel,
        className
    } = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const submitForm = (event) => {
        event.preventDefault();



        // api.post('apiUser/dangtin', formData)
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }
        // dispatch(addTinDang(formData));

    }
    return (
        <Container className="mt-3">

            <Row>
                <Col md={{ size: 8, order: 0 }} sm={{ order: 1 }} >
                    <Form onSubmit={(event) => {
                        submitForm(event)
                    }} >
                        <Breadcrumb>
                            <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                            <BreadcrumbItem ><a href={math.url}>Nạp đồng rao</a></BreadcrumbItem>
                        </Breadcrumb>

                        <Row className="justify-content-center">
                            <row style={{ border: '1px solid #eee', padding: '25px' }}>

                                <FormGroup tag="fieldset" style={{ fontSize: '18px' }}>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 1.500.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span>  Giá 1.500.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 1.000.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span>  Giá 1.000.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 500.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span>  Giá 500.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 100.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span>  Giá 100.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 50.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span>  Giá 50.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 20.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span>  Giá 20.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup style={{ textAlign: 'center' }}>
                                    <Button color="success" style={{ width: '100%' }} onClick={toggle}>Thanh Toán</Button>{' '}
                                    <Modal isOpen={modal} toggle={toggle} className={className}>
                                        <ModalHeader toggle={toggle}>Hình Thức thanh toán</ModalHeader>
                                        <ModalBody>
                                            <Media>
                                                <Media left href="#" className="mr-2" style={{
                                                    margin: 'auto 0',
                                                }}>
                                                    <Media style={imgStyle} object src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRImGSnRuso0QfbqRU2xlFfobVNtVzmmzNN5w&usqp=CAU' alt="Generic placeholder image" />
                                                </Media>
                                                <Media body style={{
                                                    marginLeft: '15px'
                                                }}>
                                                    <Media heading>
                                                        Dịch vụ
                                                    </Media>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </Media>
                                            </Media>
                                            <div
                                                style={{
                                                    marginLeft: '150px'
                                                }}
                                            >
                                                Thanh toán
                                            </div>

                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                                </FormGroup>
                            </row>
                        </Row>
                    </Form>
                </Col>
                <QuyDinhNapTien />
            </Row>


        </Container >

    );
}

export default NapDongRao;