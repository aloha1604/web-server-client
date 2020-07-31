import React, { Suspense, useEffect, useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getAllThongtinUser, updateThongtinUser } from '../../../ClientUser/reducer/userSlice';
import {
    faUser, faMapMarkerAlt, faCalendarAlt, faKey, faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HeaderUser.scss';
import { formatThoiGianDangTin, formatVND } from '../../../../utils/format';

function MainUser(props) {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const user_id = user.userFakeData._id;
    const userList = useSelector(state => state.userAuth); // get admin in reducer
    const [hoTen, setHoTen] = useState('');
    const [phone, setPhone] = useState('');
    const [diaChi, setDiaChi] = useState('');
    const [ngaySinh, setNgaySinh] = useState('');
    const [gioiTinh, setGioiTinh] = useState('0');
    const [cmnd, setCmnd] = useState('');
    const [ngayCap, setNgayCap] = useState('');
    const [noiCap, setNoiCap] = useState('');

    const onChangeHoTen = (event) => {
        let value = event.target.value;
        setHoTen(value);
    }
    const onChangePhone = (event) => {
        let value = event.target.value;
        setPhone(value);
    }
    const onChangeDiaChi = (event) => {
        let value = event.target.value;
        setDiaChi(value);
    }
    const onChangeNgaySinh = (event) => {
        let value = event.target.value;
        setNgaySinh(value);
    }
    const onChangeGioiTinh = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        setGioiTinh(value);
    }
    const onChangeCmnd = (event) => {
        let value = event.target.value;
        setCmnd(value);
    }
    const onChangeNgayCap = (event) => {
        let value = event.target.value;
        setNgayCap(value);
    }
    const onChangeNoiCap = (event) => {
        let value = event.target.value;
        setNoiCap(value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        dispatch(updateThongtinUser(user_id, hoTen, phone, diaChi, ngaySinh, gioiTinh, cmnd, ngayCap, noiCap))
    }

    useEffect(() => {
        dispatch(getAllThongtinUser(user_id));
    }, [])

    return (
        <Suspense>
            {
                userList.thongTinUser.map((user, i) => {
                    return (
                        <Container key={i} >
                            <div className="headeruser">

                                <div className="headeruser-right ml-4">
                                    {/* <div className="headeruser-right-img">
                                        <img src="https://picsum.photos/id/237/200/300" alt="" width="100%" />
                                    </div> */}
                                    <div className="headeruser-right-name">
                                        <h6><span><FontAwesomeIcon icon={faUser} />{' '}</span>{user.hoten}</h6>
                                        <h6><span><FontAwesomeIcon icon={faDollarSign} />{' '}</span>Số đồng rao: {formatVND(user.dongrao, 'DR')} </h6>

                                    </div>
                                </div>
                                <div className="headeruser-left">
                                    <div className="headeruser-left-infor">
                                        <h6><span><FontAwesomeIcon icon={faCalendarAlt} />{' '}</span>Ngày tạo: {formatThoiGianDangTin(user.create_at)}</h6>
                                        <h6><span><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}</span>Địa chỉ : {user.diaChi ? user.diaChi : 'chưa cập nhật'}</h6>
                                        <h6><span><FontAwesomeIcon icon={faKey} />{' '}</span>Trạng thái: {' '}active</h6>
                                    </div>

                                </div>
                            </div>
                            <Breadcrumb >
                                <BreadcrumbItem><a href="#/">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Thông tin tai khoản</BreadcrumbItem>
                            </Breadcrumb>
                            <Form
                                onSubmit={(event) => {
                                    submitForm(event)
                                }}
                            >
                                <FormGroup>
                                    <Label for="exampleHoten">Họ tên</Label>
                                    <Input type="text" name="txthoten" id="exampleHoten" placeholder={user.hoten ? user.hoten : "Điền họ tên"}
                                        onChange={onChangeHoTen} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleEmail" >Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Quynamele@gmail.com" disabled />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="examplePhone">Số điện thoại</Label>
                                    <Input type="text" name="txtPhone" id="examplePhone" placeholder={user.phone ? user.phone : "Điền số điện thoại"} onChange={onChangePhone} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleAdress">Địa chỉ</Label>
                                    <Input type="text" name="txtPhone" id="exampleAdress" placeholder={user.diachi ? user.diachi : "Điền địa chi"} onChange={onChangeDiaChi} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleNgaysinh">Ngày sinh</Label>
                                    <Input type="date" name="txtNgaysinh" id="exampleNgaysinh" placeholder={user.ngaysinh ? user.ngaysinh : "Điền ngày sinh"} onChange={onChangeNgaySinh} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleGioiTinh">Giới tính</Label>
                                    <Input type="select" name="selectGioiTinh" id="exampleGioiTinh" onChange={onChangeGioiTinh}>
                                        <option value='0'>Nam</option>
                                        <option value='1'>Nữ</option>

                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleCMND">CMND/Passport</Label>
                                    <Input type="text" name="txtCMND" id="exampleCMND" placeholder={user.cmnd ? user.cmnd : "Điền CMND/Passport "} onChange={onChangeCmnd} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleNgayCap">Ngày cấp</Label>
                                    <Input type="date" name="txtNgayCap" id="exampleNgayCap" placeholder={user.ngaycap ? user.ngycap : "Điền Ngày cấp "} onChange={onChangeNgayCap} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleNoiCap">Nơi cấp</Label>
                                    <Input type="text" name="txtNoiCap" id="exampleNoiCap" placeholder={user.noicap ? user.noicap : "Điền nơi cấp "} onChange={onChangeNoiCap} />
                                </FormGroup>

                                <FormGroup style={{ textAlign: 'center' }}>
                                    <Button color="success" >Lưu lại</Button>{' '}
                                </FormGroup>

                            </Form>
                        </Container>
                    )
                })
            }




        </Suspense>
    );
}

export default MainUser;