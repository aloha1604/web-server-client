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
    NavbarText, Input, Button
} from 'reactstrap';


function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Container>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Ebay classifieds</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" >
                        </Nav>
                        <NavbarText> <Nav className="ml-auto" navbar>
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
                                <NavLink href="/components/">Đăng ký</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Đăng nhập</NavLink>
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
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Tin lưu trữ
                                    </DropdownItem>
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