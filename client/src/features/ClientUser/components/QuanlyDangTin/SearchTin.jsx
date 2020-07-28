import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    Container, Button, Form, FormGroup, Label, Input, Badge, FormText, Col, Row, Alert
} from 'reactstrap';

import { getAllNhom } from '../../../Admin/components/NhomSanPham/nhomSlice';
import { getAllDanhMuc } from '../../../Admin/components/DanhMucSanPham/danhMucSlice';
import { getAllTinhThanh } from '../../../ClientUser/reducer/apiTinhThanhSlice';
import { getAllQuanHuyen } from '../../../ClientUser/reducer/apiQuanHuyenSlice';
import { getAllPhuongXa } from '../../../ClientUser/reducer/apiPhuongXaSlice';
import { isEmpty } from "validator";

function SearchTin(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const danhMucList = useSelector(state => state.danhMuc); // get admin in reducer
    const nhomList = useSelector(state => state.nhom); // get nhom in reducer
    const tinhThanhList = useSelector(state => state.tinhThanh); // get nhom in reducer
    const quanHuyenList = useSelector(state => state.quanHuyen); // get nhom in reducer
    const phuongXaList = useSelector(state => state.phuongXa); // get nhom in reducer


    const [validatetionMsg, setValidatetionMsg] = useState({});
    const [danhmuc_id, setDanhmuc_id] = useState(12);
    const [nhom_id, setNhom_id] = useState('');
    const [tinhThanh_id, settinhThanh_id] = useState(201);
    const [quanHuyen_id, setQuanHuyen_id] = useState(1542);
    const [tieude, setTieude] = useState('');

    const [tinhThanh, setTinhThanh] = useState('');
    const [quanHuyen, setQuanHuyen] = useState('');
    const [phuongXa, setPhuongXa] = useState('');


    const onChangeNhom = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        setNhom_id(value);
    }

    const onChangeTieuDe = (event) => {
        const value = event.target.value;
        setTieude(value);
    }

    const onChangeSelectedDanhMuc = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        setDanhmuc_id(value);
    }

    const onChangeSelectedTinhThanh = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        var text = event.nativeEvent.target[index].text;
        setTinhThanh(text);
        settinhThanh_id(value);
    }

    const onChangeSelectedQuanHuyen = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        var text = event.nativeEvent.target[index].text;
        setQuanHuyen(text);
        setQuanHuyen_id(value);
    }

    const onChangeSelectedPhuongXa = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var text = event.nativeEvent.target[index].text;
        setPhuongXa(text);
    }

    const validateAll = () => {
        const msg = {};
        if (isEmpty(tieude)) {
            msg.empty = 'Bạn không được trống yêu cầu tìm kiếm!!!'
        }


        setValidatetionMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    }

    const submitForm = (event) => {
        event.preventDefault();

        const isValidate = validateAll();
        if (!isValidate) return;

        history.push(`/home/showtinsearch/${nhom_id ? nhom_id : 0}/${tieude ? tieude : 0}/${tinhThanh ? tinhThanh : 0}/${quanHuyen ? quanHuyen : 0}/${phuongXa ? phuongXa : 0}/${1}`)

    }



    useEffect(() => {
        dispatch(getAllDanhMuc());
        dispatch(getAllNhom());
        dispatch(getAllTinhThanh());
        dispatch(getAllQuanHuyen());
        dispatch(getAllPhuongXa());

    }, [])


    return (
        <Container className="mt-3">

            <Row>
                <Col md={{ size: 12, order: 0 }} sm={{ order: 1 }}>
                    <Form onSubmit={(event) => {
                        submitForm(event)
                    }} >
                        <Alert color="primary">
                            <h5><Badge color="secondary">Tìm kiếm nâng cao</Badge></h5>
                        </Alert>

                        <Row form style={{ border: '1px solid #ccc', padding: '10px', boxShadow: ' 0px 0px 16px 0px rgba(204, 204, 204, 1)' }}>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleTinhThanh">Tỉnh/Thành <span style={{ color: 'red' }}>*</span></Label>
                                    <Input type="select" name="selectTinhThanh" id="exampleTinhThanh" onChange={onChangeSelectedTinhThanh}>
                                        <option value="NAN" active>Chọn Tỉnh/thành</option>
                                        {
                                            tinhThanhList.tinhThanh.map((tinhthanh, i) => (
                                                <option key={i} value={tinhthanh.ProvinceID} >{tinhthanh.ProvinceName}</option>
                                            ))
                                        }
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleQuanHuyen">Quận/Huyện <span style={{ color: 'red' }}>*</span></Label>
                                    <Input type="select" name="selectQuanHuyen" id="exampleQuanHuyen" onChange={onChangeSelectedQuanHuyen}>
                                        <option value="NAN" active>Chọn Quận/huyện</option>
                                        {

                                            quanHuyenList.quanHuyen.map((quanhuyen, i) => {
                                                if (quanhuyen.ProvinceID === parseInt(tinhThanh_id))
                                                    return (
                                                        <option key={i} value={quanhuyen.DistrictID} >{quanhuyen.DistrictName}</option>
                                                    )
                                            })
                                        }
                                    </Input>
                                </FormGroup>

                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="examplePhuongXa">Phường/Xã <span style={{ color: 'red' }}>*</span></Label>
                                    <Input type="select" name="selectPhuongXa" id="examplePhuongXa" onChange={onChangeSelectedPhuongXa} >
                                        <option value="NAN" active>Chọn phường/xã</option>
                                        {
                                            phuongXaList.phuongXa.map((phuongxa, i) => {
                                                if (phuongxa.DistrictID === parseInt(quanHuyen_id))
                                                    return (
                                                        <option key={i} value={phuongxa.WardCode} >{phuongxa.WardName}</option>
                                                    )
                                            })
                                        }
                                    </Input>
                                </FormGroup>

                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleSelectDanhMuc">Danh mục <span style={{ color: 'red' }}>*</span></Label>
                            <Input type="select" name="selectDanhMuc" id="exampleSelectDanhMuc" onChange={onChangeSelectedDanhMuc}>
                                <option value="NAN" active>Chọn Danh mục</option>
                                {
                                    danhMucList.danhMuc.map((danhmuc, i) => (
                                        <option key={i} value={danhmuc.danhmuc_id}>{danhmuc.danhmuc_ten}</option>
                                    ))

                                }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelectNhom">Nhóm <span style={{ color: 'red' }}>*</span></Label>
                            <Input type="select" name="selectNhom" id="exampleSelectNhom" onChange={onChangeNhom}>
                                <option value="NAN" active>Chọn nhóm theo danh mục</option>
                                {
                                    nhomList.nhom.map((nhom, i) => {
                                        if (nhom.danhmuc_id === parseInt(danhmuc_id))
                                            return (
                                                <option key={i} value={nhom.nhom_id}>{nhom.nhom_ten}</option>
                                            )
                                    })
                                }
                            </Input>

                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleTieude">Tiêu đề <span style={{ color: 'red' }}>*</span></Label>
                            <Input type="text" name="txtTieuDe" id="exampleTieude" placeholder="Diền tiêu đề" onChange={onChangeTieuDe} />
                            <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                            <FormText>Lưu ý: Tối thiểu 10 ký tự, tối đa 70 ký tự. Không nhập số điện thoại, giá tiền. Không nhập [mua], [bán].</FormText>
                        </FormGroup>





                        <FormGroup style={{ textAlign: 'center' }}>
                            <Button type="submit" color="success" style={{ padding: '5px 35px' }}>Tìm</Button>
                        </FormGroup>
                    </Form>
                </Col>

            </Row>


        </Container >
    );
}

export default SearchTin;