import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import SubMenu from "./SubMenu.jsx";

import auth from '../Auth/auth'
const SideBar = ({ isOpen, toggle }, props) => {
    const match = useRouteMatch();

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
                    <p>Quy nam le</p>
                    <SubMenu title="Home" icon={faHome} items={submenus[0]} />
                    <NavItem>
                        <NavLink tag={Link} to={'/about'}>
                            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                            About
                        </NavLink>
                    </NavItem>
                    <SubMenu title="Pages" icon={faCopy} items={submenus[1]} />
                    <NavItem>
                        <NavLink tag={Link} to={"/pages"}>
                            <FontAwesomeIcon icon={faImage} className="mr-2" />
                            Portfolio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/faq"}>
                            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                            FAQ
                        </NavLink>
                    </NavItem>
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
                </Nav>
            </div>
        </div>)

};

const submenus = [
    [
        {
            title: "Home 1",
            target: "Home-1",
        },
        {
            title: "Home 2",
            target: "Home-2",
        },
        {
            title: "Home 3",
            target: "Home-3",
        },
        {
            title: "Home 4",
            target: "Home-4",
        },
    ],
    [
        {
            title: "Page 1",
            target: "Page-1",
        },
        {
            title: "Page 2",
            target: "Page-2",
        },
    ],
];

export default SideBar;
