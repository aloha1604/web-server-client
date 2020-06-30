import React from "react";
import { Container, Table, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { useRouteMatch } from 'react-router-dom'

const TatCaDanhMuc = (props) => {

    const math = useRouteMatch();

    return (
        <Container fluid className="content">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="span">Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Tất cả danh mục</BreadcrumbItem>
            </Breadcrumb>
            <Table striped>
                <thead>
                    <tr>
                        <th>Tên danh mục</th>
                        <th>Trạng thai</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Điện thoại</td>
                        <td><Button color="success">active</Button><Button color="warning">warning</Button></td>
                        <td><Button color="primary">Sữa</Button>{' '}<Button color="danger">Xóa</Button></td>
                    </tr>
                    <tr>
                        <td>Nhà đất</td>
                        <td><Button color="success">active</Button><Button color="warning">warning</Button></td>
                        <td><Button color="primary">Sữa</Button>{' '}<Button color="danger">Xóa</Button></td>
                    </tr>
                    <tr>

                        <td>Laptop</td>
                        <td><Button color="success">active</Button><Button color="warning">warning</Button></td>
                        <td><Button color="primary">Sữa</Button>{' '}<Button color="danger">Xóa</Button></td>
                    </tr>
                </tbody>
            </Table>

        </Container>
    );
}

export default TatCaDanhMuc;
