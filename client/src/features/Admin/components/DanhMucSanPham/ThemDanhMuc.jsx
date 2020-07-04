import React from "react";

import { Container, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { useRouteMatch } from 'react-router-dom'


const ThemDanhMuc = (props) => {
    const math = useRouteMatch();
    return (
        <Container fluid className="content">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="span">Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Thêm danh mụcdanh mục</BreadcrumbItem>
            </Breadcrumb>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Tên danh mục</Label>
                    <Input
                        type="text"
                        name="txtdanhmuc"
                        id="exampleEmail"
                        placeholder="Điền tên danh mục"
                    />
                </FormGroup>
                <FormGroup className="text-center">
                    <Button color="primary" className="ml-auto mr-auto">Thêm</Button>
                </FormGroup>

            </Form>

        </Container>
    );
}

export default ThemDanhMuc;