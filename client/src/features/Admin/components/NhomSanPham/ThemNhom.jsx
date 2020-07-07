import React from "react";

import { Container, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { useRouteMatch } from 'react-router-dom'


const ThemNhom = (props) => {
    const math = useRouteMatch();
    return (
        <Container fluid className="content">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="span">Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Thêm Nhóm</BreadcrumbItem>
            </Breadcrumb>
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Danh mục sản phẩm</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Nhà đất</option>
                        <option>Xe máy</option>
                        <option>Laptop</option>
                        <option>Điện Thoại</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Tên Nhóm</Label>
                    <Input
                        type="text"
                        name="txtnhom"
                        id="exampleEmail"
                        placeholder="Điền tên nhóm"
                    />
                </FormGroup>
                <FormGroup className="text-center">
                    <Button color="primary" className="ml-auto mr-auto">Add</Button>
                </FormGroup>

            </Form>

        </Container>
    );
}

export default ThemNhom;
