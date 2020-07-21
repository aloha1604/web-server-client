import React from 'react';
import { Container, Row, Col, Form, Breadcrumb, BreadcrumbItem, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import QuyDinhNapTien from './QuyDinhNapTien';
import { useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
// fa-euro-sign
function NapDongRao(props) {
    const math = useRouteMatch();

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
                <Col md={{ size: 8, order: 0 }} sm={{ order: 1 }}>
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
                                    <Button color="success" style={{ width: '100%' }}>Thanh Toán</Button>{' '}
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