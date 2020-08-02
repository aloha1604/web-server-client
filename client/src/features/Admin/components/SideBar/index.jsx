import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignOutAlt,
    faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from 'react-router-dom';

import SubMenu from "./SubMenu.jsx";


const SideBar = ({ isOpen, toggle, nameAdmin }) => {


    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>
            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                    &times;
                </span>
                <h3>Admin</h3>
            </div>
            <div className="side-menu">
                <Nav vertical className="list-unstyled pb-3">
                    <p>Chào mừng {nameAdmin} đến với admin</p>

                    {/* <SubMenu title="Admin" icon={faHome} items={submenus[0]} /> */}
                    <SubMenu title="QLDanh mục" icon={faCopy} items={submenus[1]} />
                    <SubMenu title="QL Nhóm" icon={faCopy} items={submenus[2]} />
                    <SubMenu title="QL Đăng Tin" icon={faCopy} items={submenus[3]} />
                    <SubMenu title="QL UserClient" icon={faCopy} items={submenus[4]} />

                    {/* <NavItem>
                        <NavLink tag={Link} to={"/faq"}>
                            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                            FAQ
                        </NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink tag={Link} to={"/contact"}>
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                            <button onClick={() => {
                                auth.logout(() => {
                                    props.history.push('/admin');
                                })
                            }}
                            >logout</button>
                        </NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink tag={Link} to={"/admin/thoat"}>
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                            Thoát
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>)

};

const submenus = [
    [
        {
            title: "Cập nhập mật khẩu",
            target: "/admin/capnhatmatkhau",
        },
        {
            title: "Đăng xuất",
            target: "/admin/dangxuat",
        },
    ],
    [
        {
            title: "Thêm danh mục",
            target: "/admin/themdanhmuc",
        },
        {
            title: "Tất cả danh mục",
            target: "/admin/tatcadanhmuc",
        },
    ],
    [
        {
            title: "Thêm nhóm",
            target: "/admin/themnhom",
        },
        {
            title: "Tất cả nhóm",
            target: "/admin/tatcanhom",
        },
    ],
    [
        {
            title: "Tin đăng chờ duyệt",
            target: "/admin/tindangchoduyet",
        },
        {
            title: "Tin vi phạm",
            target: "/admin/tinvipham",
        },
        {
            title: "Tin đã duyệt",
            target: "/admin/tindaduyet",
        },
    ],
    [
        {
            title: "User chưa active",
            target: "/admin/userchuaactive",
        },
        {
            title: "User đã active",
            target: "/admin/userdaactive",
        },
    ],
];

export default SideBar;
