import React, { useState } from 'react';
import { formatVND } from '../../../../utils/format'
import { Container, Row, Col, Form, Breadcrumb, BreadcrumbItem, Button, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, Media } from 'reactstrap';
import QuyDinhNapTien from './QuyDinhNapTien';
import { useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "validator";
import Checkout from './Checkout';
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
    const [dataGiaDongRao, setDataGiaDongRao] = useState("");
    const [dataGiaPayViSa, setDataGiaDongRaoPayViSa] = useState(0);
    const [validatetionMsg, setValidatetionMsg] = useState({});
    const [noiDungGiaoDich, SetNoiDungGiaoDich] = useState("");
    const user = JSON.parse(localStorage.getItem('user'));
    const user_id = user.userFakeData._id;


    const validateAll = () => {
        const msg = {};
        if (isEmpty(dataGiaDongRao)) {
            msg.empty = 'Cần chọn giá tiền để xác nhận thanh toán!!!'
        }

        setValidatetionMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    }

    const toggle = () => {
        const isValidate = validateAll();
        if (!isValidate) return;
        setModal(!modal)
    }


    const onChangeRaido = (event) => {
        let value = event.target.value;
        let paydata = Number.parseFloat((value / 23000)).toFixed(2);
        let noidung = `Nạp thêm  ${value} Đồng Rao vào tài khoản`;
        SetNoiDungGiaoDich(noidung);
        setDataGiaDongRao(value);
        setDataGiaDongRaoPayViSa(paydata);
    }
    console.log(dataGiaDongRao)
    console.log(dataGiaPayViSa)
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

                                <FormGroup tag="fieldset" style={{ fontSize: '18px' }} onChange={onChangeRaido}>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" value={1500000} style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 1.500.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span> ~{' '}  Giá 1.500.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" value={1000000} style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 1.000.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span> ~{' '}  Giá 1.000.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" value={500000} style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 500.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span> ~{' '}  Giá 500.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" value={100000} style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 100.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span> ~{' '}  Giá 100.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" value={50000} style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 50.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span> ~{' '}  Giá 50.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                    <FormGroup check className="mt-3">
                                        <Label check style={{ display: 'flex', alignContent: 'center' }}>
                                            <Input type="radio" name="radio1" value={20000} style={{ width: '20px', height: '20px' }} />{' '}
                                            <span style={{ marginLeft: '15px' }}>Nạp 20.000</span>  <span style={{ fontSize: '18px', color: '#8BC34A', margin: '0 5px' }}><FontAwesomeIcon icon={faEuroSign} />{' '}</span>~{' '}   Giá 20.000 VNĐ
                                     </Label>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup style={{ textAlign: 'center' }}>
                                    <Button color="success" style={{ width: '100%' }} onClick={toggle}>Xác nhận thanh toán</Button>{' '}
                                    <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
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
                                                    <Media heading style={{
                                                        marginLeft: '15px'
                                                    }}>
                                                        Dịch vụ
                                                    </Media>
                                                    <div
                                                        style={{
                                                            marginLeft: '15px'
                                                        }}
                                                    >
                                                        <p>Thanh toán Đồng Rao</p>
                                                        <p>Đồng rao nạp thêm {formatVND(parseInt(dataGiaDongRao), 'VND')} </p>
                                                        <p>Số tiền phải Thanh toán : {dataGiaPayViSa} USD</p>
                                                        <Checkout
                                                            amount={Number.parseFloat(dataGiaPayViSa).toFixed(2) * 100}
                                                            name={'Visa/MasterCard'}
                                                            user_id={user_id}
                                                            noiDungGiaoDich={noiDungGiaoDich}
                                                            dataGiaDongRao={dataGiaDongRao}
                                                        ></Checkout>
                                                    </div>

                                                </Media>
                                            </Media>

                                        </ModalBody>
                                        <ModalFooter>
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