import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Submenu from './Submenu'

function SidebarMenu(props) {
    return (
        <Nav vertical>
            <NavItem style={{ background: 'red', fontSize: '20px' }}>
                <NavLink href="#" active>Danh mục sản phẩm</NavLink>
            </NavItem>
            <Submenu title="quan ly" items={submenus[1]} />
            <Submenu title="quan ly" items={submenus[2]} />
            <Submenu title="quan ly" items={submenus[2]} />
            <Submenu title="quan ly" items={submenus[2]} />
            <Submenu title="quan ly" items={submenus[2]} />
            <Submenu title="quan ly" items={submenus[2]} />
            <Submenu title="quan ly" items={submenus[2]} />
        </Nav>
    );
}
const submenus = [
    [
        {
            title: "Cập nhập mật khẩu",
            target: "/admin/capnhatmatkhau"
        },
        {
            title: "Đăng xuất",
            target: "/admin/dangxuat"
        }
    ],
    [
        {
            title: "Thêm danh mục",
            target: "/admin/themdanhmuc"
        },
        {
            title: "Tất cả danh mục",
            target: "/admin/tatcadanhmuc"
        }
    ],
    [
        {
            title: "Thêm nhóm",
            target: "/admin/themnhom"
        },
        {
            title: "Tất cả nhóm",
            target: "/admin/tatcanhom"
        }
    ],
    [
        {
            title: "Tin đăng chờ duyệt",
            target: "/admin/tindangchoduyet"
        },
        {
            title: "Tin vi phạm",
            target: "/admin/tinvipham"
        },
        {
            title: "Tin đã duyệt",
            target: "/admin/tindaduyet"
        }
    ],
    [
        {
            title: "User vi phạm",
            target: "/admin/uservipham"
        },
        {
            title: "User chưa active",
            target: "/admin/userchuaactive"
        },
        {
            title: "User đã active",
            target: "/admin/userdaactive"
        }
    ]
];
export default SidebarMenu;