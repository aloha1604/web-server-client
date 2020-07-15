import React, { useState } from "react";
import {
    Collapse,
    NavItem,
    NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink as RRNavLink } from "react-router-dom";
const Submenu = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const { icon, title, items } = props;
    return (
        <>
            <NavItem>

                <NavLink
                    active

                    onClick={toggle}
                    action
                    style={{
                        width: "100%",
                        background: "blue",
                        color: 'white',
                        borderBottom: '1px solid black'

                    }}
                >
                    menu 1
             </NavLink>
                <Collapse isOpen={isOpen} style={{ background: "deeppink" }}>


                    <NavLink href="/"
                        style={{
                            borderBottom: '1px solid black'
                        }}
                    >link 2</NavLink>

                    <NavLink href="#"
                        style={{
                            borderBottom: '1px solid black'
                        }}
                    >link 2</NavLink>

                    <NavLink href="#"
                        style={{
                            borderBottom: '1px solid black'
                        }}
                    >link 2</NavLink>
                </Collapse>
            </NavItem>
        </>
    );
};


export default Submenu;
