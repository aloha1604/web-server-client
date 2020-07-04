import React, { Suspense } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from "reactstrap";

const HeaderUser = React.lazy(() => import('./HeaderUser'));
function MainUser(props) {
    return (
        <Suspense>
            <HeaderUser />

            <Container >
                <Breadcrumb >
                    <BreadcrumbItem><a href="#/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Thông tin tai khoản</BreadcrumbItem>
                </Breadcrumb>
                <Form>
                    <FormGroup>
                        <Label for="exampleHoten">Họ tên</Label>
                        <Input type="text" name="txthoten" id="exampleHoten" placeholder="Điền họ tên" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail" >Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Quynamele@gmail.com" disabled />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePhone">Họ tên</Label>
                        <Input type="text" name="txtPhone" id="examplePhone" placeholder="Điền số điện thoại" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleAdress">Địa chỉ</Label>
                        <Input type="text" name="txtPhone" id="exampleAdress" placeholder="Điền địa chi" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleNgaysinh">Ngày sinh</Label>
                        <Input type="date" name="txtNgaysinh" id="exampleNgaysinh" placeholder="Điền ngày sinh" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleTinhThanh">Tỉnh/Thành</Label>
                        <Input type="select" name="selectTinhThanh" id="exampleTinhThanh">
                            <option active>Tất cả</option>
                            <option>Tphcm</option>
                            <option>Hà nội</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleQuanHuyen">Quận/Huyện</Label>
                        <Input type="select" name="selectQuanHuyen" id="exampleQuanHuyen">
                            <option active>Tất cả</option>
                            <option>Quận 1</option>
                            <option>Quận 2</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePhuongXa">Phường/Xã</Label>
                        <Input type="select" name="selectPhuongXa" id="examplePhuongXa">
                            <option active>Tất cả</option>
                            <option>Bình trị đông a</option>
                            <option>Bình Trị đông b</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleGioiTinh">Giới tính</Label>
                        <Input type="select" name="selectGioiTinh" id="exampleGioiTinh">
                            <option>Nam</option>
                            <option>Nữ</option>

                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleCMND">CMND/Passport</Label>
                        <Input type="text" name="txtCMND" id="exampleCMND" placeholder="Điền CMND/Passport " />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleNgayCap">Ngày cấp</Label>
                        <Input type="date" name="txtNgayCap" id="exampleNgayCap" placeholder="Điền Ngày cấp " />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleNoiCap">Nơi cấp</Label>
                        <Input type="text" name="txtNoiCap" id="exampleNoiCap" placeholder="Điền nơi cấp " />
                    </FormGroup>

                    <FormGroup style={{ textAlign: 'center' }}>
                        <Button color="success">Lưu lại</Button>{' '}
                    </FormGroup>

                </Form>
            </Container>



        </Suspense>
    );
}

export default MainUser;