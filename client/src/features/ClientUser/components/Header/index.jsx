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
    NavbarText, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText, Alert
} from 'reactstrap';


function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const {
        buttonLabel,
        className
    } = props;

    const [modalDangNhap, setModalDangNhap] = useState(false);
    const [modalDangKy, setModalDangKy] = useState(false);

    const toggleModalDangNhap = () => setModalDangNhap(!modalDangNhap);
    const toggleModalDangky = () => setModalDangKy(!modalDangKy);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Container>
            <div>
                <Navbar color="light" light expand="lg">
                    <NavbarBrand href="/">QuýNam.vn</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" >
                        </Nav>
                        <NavbarText> <Nav className="ml-auto " navbar>
                            <NavItem style={{
                                display: 'flex'
                            }}>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Nhập nội dung cần tìm " />
                                <Button color="primary" style={{ marginLeft: '3px' }}>Tìm </Button>

                            </NavItem>
                            <NavItem>

                            </NavItem>
                            {/* ở đây sau này viết nếu chưa đăng nhập sẽ hiện Đăng ký/đăng nhập, nếu đăng nhập rồi thì sẽ Tài Khoản */}
                            <NavItem>
                                <NavLink href="/components/">Đăng tin</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={toggleModalDangky}>Đăng ký</NavLink>
                                {/* <Button color="danger" onClick={toggleModalDangNhap}>dang nhap</Button> */}
                                <Modal isOpen={modalDangKy} toggle={toggleModalDangky} >
                                    <ModalHeader toggle={toggleModalDangky}>Đăng ký</ModalHeader>
                                    <ModalBody>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleEmail">Email</Label>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="Nhập email" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Password</Label>
                                                <Input type="password" name="password" id="examplePassword" placeholder="Nhập password" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Alert color="primary">
                                                    Đăng ký xong hãy vào email xác nhận !
                                                </Alert>
                                            </FormGroup>
                                            <FormGroup>
                                                <Button color="primary" size="sm">Đăng ký</Button>{' '}

                                            </FormGroup>
                                        </Form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={toggleModalDangky}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={toggleModalDangNhap}>Đăng nhập</NavLink>
                                {/* <Button color="danger" onClick={toggleModalDangNhap}>dang nhap</Button> */}
                                <Modal isOpen={modalDangNhap} toggle={toggleModalDangNhap} >
                                    <ModalHeader toggle={toggleModalDangNhap}>Đăng nhập</ModalHeader>
                                    <ModalBody>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleEmail">Email</Label>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="Nhập email" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Password</Label>
                                                <Input type="password" name="password" id="examplePassword" placeholder="Nhập password" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Button color="primary" size="sm">Đăng nhập</Button>{' '}
                                                <Button color="secondary" size="sm">Quên mật khẩu</Button>
                                            </FormGroup>
                                        </Form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={toggleModalDangNhap}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Tài khoản
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Thông tin cá nhân
                                    </DropdownItem>
                                    <DropdownItem>
                                        Quản lý tin đăng
                                    </DropdownItem>
                                    <DropdownItem>
                                        Tin lưu trữ
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Thoát tài khoản
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav></NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        </Container>
    );
}

export default Header;