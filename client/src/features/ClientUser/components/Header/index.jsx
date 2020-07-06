import React, { useState } from 'react';

import {
    Container, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Input, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Alert
} from 'reactstrap';

import { isEmpty } from "validator";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { login, singIn, logout } from '../../reducer/userSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Header(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const userReducer = useSelector(state => state.userAuth); // get admin in reducer
    const math = useRouteMatch();
    console.log(math.url);



    const [isOpen, setIsOpen] = useState(false);
    const [modalDangNhap, setModalDangNhap] = useState(false);
    const [modalDangKy, setModalDangKy] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validatetionMsg, setValidatetionMsg] = useState({});


    const toggleModalDangNhap = () => {
        setModalDangNhap(!modalDangNhap);
        setEmail('');
        setPassword('');
        setValidatetionMsg({});
    };
    const toggleModalDangky = () => {
        setModalDangKy(!modalDangKy);
        setEmail('');
        setPassword('');
        setValidatetionMsg({});
    };

    const toggle = () => setIsOpen(!isOpen);//togle humberge menu

    const onChangeEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    }

    const onChangePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    }

    const validateAll = () => {
        const msg = {};
        if (isEmpty(email)) {
            msg.email = 'Email không được trống!!!'
        }

        if (isEmpty(password)) {
            msg.password = 'PassWord không được trống!!!'
        }

        setValidatetionMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    }

    const handleClickDangky = () => {
        const isValidate = validateAll();
        if (!isValidate) return;

        //call api
        const value = { email, password };
        const action = singIn(value);
        dispatch(action);
        toggleModalDangky();


    }

    const handleClickDangNhap = () => {
        const isValidate = validateAll();
        if (!isValidate) {
            return;
        };
        // call api
        const value = { email, password };
        const action = login(value);
        dispatch(action);

    }
    const handleClickLogout = () => {
        const action = logout();
        dispatch(action);
    }

    return (

        <Container>
            <ToastContainer autoClose={8000} />
            <div>
                <Navbar color="light" light expand="lg">
                    <NavbarBrand href="/">  QuýNam.vn </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" >
                        </Nav>
                        <NavbarText>
                            <Nav className="ml-auto " navbar>
                                <NavItem style={{
                                    display: 'flex'
                                }}>
                                    <Input type="text" name="textSearch" id="exampleSearch" placeholder="Nhập nội dung cần tìm " />
                                    <Button color="primary" style={{ marginLeft: '3px' }}>Tìm </Button>

                                </NavItem>
                                <NavItem>

                                </NavItem>
                                {/* ở đây sau này viết nếu chưa đăng nhập sẽ hiện Đăng ký/đăng nhập, nếu đăng nhập rồi thì sẽ Tài Khoản */}
                                {/* nếu chưa đăng nhập bấm tin sẽ phải đăng nhập, nêu đăng nhập rồi thì sẽ chuyển hướng qua trang đăng tin */}
                                {userReducer.user.logged ?
                                    <NavItem>

                                        <NavLink href="/Home/dangtin">Đăng tin</NavLink>
                                    </NavItem>
                                    : null}
                                {!userReducer.user.logged ?
                                    <NavItem>

                                        <NavLink onClick={toggleModalDangNhap}>Đăng tin</NavLink>
                                        {/* <Button color="danger" onClick={toggleModalDangNhap}>dang nhap</Button> */}
                                        <Modal isOpen={modalDangNhap} toggle={toggleModalDangNhap} >
                                            <ModalHeader toggle={toggleModalDangNhap}>Đăng nhập</ModalHeader>
                                            <ModalBody>
                                                <Form>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">Email</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Nhập email" onChange={onChangeEmail} value={email} />
                                                        <p style={{ color: 'red' }}>{validatetionMsg.email}</p>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="examplePassword">Password</Label>
                                                        <Input type="password" name="password" id="examplePassword" placeholder="Nhập password" onChange={onChangePassword} value={password} />
                                                        <p style={{ color: 'red' }}>{validatetionMsg.password}</p>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Button color="primary" size="sm" onClick={handleClickDangNhap}>Đăng nhập</Button>{' '}
                                                        <Button color="secondary" size="sm">Quên mật khẩu</Button>
                                                    </FormGroup>
                                                </Form>
                                            </ModalBody>
                                        </Modal>
                                    </NavItem>
                                    : null}
                                {!userReducer.user.logged ?
                                    <NavItem>
                                        <NavLink onClick={toggleModalDangky}>Đăng ký</NavLink>
                                        {/* <Button color="danger" onClick={toggleModalDangNhap}>dang nhap</Button> */}
                                        <Modal isOpen={modalDangKy} toggle={toggleModalDangky} >
                                            <ModalHeader toggle={toggleModalDangky}>Đăng ký</ModalHeader>
                                            <ModalBody>
                                                <Form>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">Email</Label>
                                                        <Input type="email" name="email" id="exampleEmail" placeholder="Nhập email" onChange={onChangeEmail} value={email} />
                                                        <p style={{ color: 'red' }}>{validatetionMsg.email}</p>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="examplePassword">Password</Label>
                                                        <Input type="password" name="password" id="examplePassword" placeholder="Nhập password" onChange={onChangePassword} value={password} />
                                                        <p style={{ color: 'red' }}>{validatetionMsg.password}</p>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Alert color="primary">
                                                            Đăng ký xong hãy vào email xác nhận !
                                                </Alert>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Button color="primary" size="sm" onClick={handleClickDangky}>Đăng ký</Button>
                                                    </FormGroup>
                                                </Form>
                                            </ModalBody>

                                        </Modal>
                                    </NavItem>
                                    : null}

                                {userReducer.user.logged ?

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <ToastContainer autoClose={8000} />
                                            Tài khoản
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavLink href={`${math.url}/mainuser`}>Thông tin cá nhân</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink href={`${math.url}/quanlydangtin/tindadang`}>Quản lý tin đăng</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink href={`${math.url}/quanlydangtin/tindangchoduyet`}>Quản lý tin đăng duyệt</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink href={`${math.url}/quanlydangtin/tinbiloi`}>Quản lý tin lỗi</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                Tin lưu trữ
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem onClick={handleClickLogout}>
                                                Thoát tài khoản
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    : null}
                            </Nav>

                        </NavbarText>
                    </Collapse>

                </Navbar>
            </div>

        </Container>


    );
}

export default Header;