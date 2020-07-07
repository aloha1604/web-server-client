import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Badge, FormText, Col, Row, CustomInput } from 'reactstrap'
import { getAllNhom } from '../../../Admin/components/NhomSanPham/nhomSlice';
import { getAllDanhMuc } from '../../../Admin/components/DanhMucSanPham/danhMucSlice';
import { getAllTinhThanh } from '../../../ClientUser/reducer/apiTinhThanhSlice';
import { getAllQuanHuyen } from '../../../ClientUser/reducer/apiQuanHuyenSlice';
import { getAllPhuongXa } from '../../../ClientUser/reducer/apiPhuongXaSlice';

function DangTin(props) {
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const danhMucList = useSelector(state => state.danhMuc); // get admin in reducer
    const nhomList = useSelector(state => state.nhom); // get nhom in reducer
    const tinhThanhList = useSelector(state => state.tinhThanh); // get nhom in reducer
    const quanHuyenList = useSelector(state => state.quanHuyen); // get nhom in reducer
    const phuongXaList = useSelector(state => state.phuongXa); // get nhom in reducer


    const [danhmuc_id, setDanhmuc_id] = useState(12);

    const [tinhThanh_id, settinhThanh_id] = useState(201);
    const [quanHuyen_id, setQuanHuyen_id] = useState(1542);



    const onChangeSelectedDanhMuc = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        setDanhmuc_id(value);
    }

    const onChangeSelectedTinhThanh = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        settinhThanh_id(value);
    }
    const onChangeSelectedQuanHuyen = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        setQuanHuyen_id(value);
    }
    console.log(quanHuyen_id);



    useEffect(() => {
        dispatch(getAllDanhMuc());
        dispatch(getAllNhom());
        dispatch(getAllTinhThanh());
        dispatch(getAllQuanHuyen());
        dispatch(getAllPhuongXa());

    }, [])


    return (
        <Container className="mt-3">

            <Form>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem ><a href={math.url}>Đăng tin</a></BreadcrumbItem>
                </Breadcrumb>
                <h4>1.<Badge color="primary">Danh mục</Badge></h4>
                <FormGroup>
                    <Label for="exampleSelectDanhMuc">Danh mục</Label>
                    <Input type="select" name="selectDanhMuc" id="exampleSelectDanhMuc" onChange={onChangeSelectedDanhMuc}>
                        {
                            danhMucList.danhMuc.map((danhmuc, i) => (
                                <option key={i} value={danhmuc.danhmuc_id}>{danhmuc.danhmuc_ten}</option>
                            ))

                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectNhom">Nhóm</Label>
                    <Input type="select" name="selectNhom" id="exampleSelectNhom">
                        {
                            nhomList.nhom.map((nhom, i) => {
                                if (nhom.danhmuc_id === parseInt(danhmuc_id))
                                    return (
                                        <option key={i} value={nhom.nhom_id}>{nhom.nhom_ten}</option>
                                    )
                            })
                        }
                    </Input>
                </FormGroup>

                <h4>2.<Badge color="primary">Tiêu đề & giá</Badge></h4>
                <FormGroup>
                    <Label for="exampleTieude">Tiêu đề*</Label>
                    <Input type="text" name="txtTieuDe" id="exampleTieude" placeholder="Diền tiêu đề" />
                    <FormText>Lưu ý: Tối thiểu 10 ký tự, tối đa 70 ký tự. Không nhập số điện thoại, giá tiền. Không nhập [mua], [bán].</FormText>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleGia">Giá</Label>
                            <Input type="text" name="textGia" id="exampleGia" placeholder="Chỉ nhập số (VD:200000)" />
                            <FormText>Thương lượng</FormText>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Từ khóa</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Nhập từ khóa muốn khách hàng tìm thấy" />
                            <FormText>Gợi ý: Hỗ trợ tìm kiếm, Ví dụ: iphone, iphone 6</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form style={{ border: '1px solid #ccc', padding: '10px' }}>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleTinhThanh">Tỉnh/Thành</Label>
                            <Input type="select" name="selectTinhThanh" id="exampleTinhThanh" onChange={onChangeSelectedTinhThanh}>
                                {
                                    tinhThanhList.tinhThanh.map((tinhthanh, i) => (
                                        <option key={i} value={tinhthanh.ProvinceID} >{tinhthanh.ProvinceName}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleQuanHuyen">Quận/Huyện</Label>
                            <Input type="select" name="selectQuanHuyen" id="exampleQuanHuyen" onChange={onChangeSelectedQuanHuyen}>
                                {

                                    quanHuyenList.quanHuyen.map((quanhuyen, i) => {
                                        if (quanhuyen.ProvinceID === parseInt(tinhThanh_id))
                                            return (
                                                <option key={i} value={quanhuyen.DistrictID} >{quanhuyen.DistrictName}</option>
                                            )
                                    })
                                }
                            </Input>
                        </FormGroup>

                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="examplePhuongXa">Phường/Xã</Label>
                            <Input type="select" name="selectPhuongXa" id="examplePhuongXa" >
                                {
                                    phuongXaList.phuongXa.map((phuongxa, i) => {
                                        if (phuongxa.DistrictID === parseInt(quanHuyen_id))
                                            return (
                                                <option key={i} value={phuongxa.WardCode} >{phuongxa.WardName}</option>
                                            )
                                    })
                                }
                            </Input>
                        </FormGroup>

                    </Col>
                </Row>
                <h4>3.<Badge color="primary">Nội dung</Badge></h4>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input style={{
                        height: '250px',
                    }} type="textarea" name="text" id="exampleText" />
                    <FormText>Nội dung tối đa 1000 ký tự</FormText>
                </FormGroup>
                <h4>4.<Badge color="primary">Hình ảnh & Video</Badge></h4>
                <FormGroup>
                    <FormText>Ghi chú: Dung lượng hình ảnh cho phép tối đa 5MB. Số lượng hình ảnh tối đa cho phép 6 hình ảnh.</FormText>
                    <Label for="exampleCustomFileBrowser">File Browser</Label>
                    <CustomInput type="file" multiple id="exampleCustomFileBrowser" name="customFile" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleLinkVideo">Video youtube</Label>
                    <Input
                        type="text"
                        name="txtLinkVideo"
                        id="exampleLinkVideo"
                        placeholder="Dán link video youtube vào đây, VD: https://www.youtube.com/watch?v=**********"
                    />
                </FormGroup>
                <h4>5.<Badge color="primary">Thông tin liên hệ</Badge></h4>
                <Row form >
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleHoTen">Họ tên</Label>
                            <Input
                                type="text"
                                name="txtLinkVideo"
                                id="exampleHoTen"
                                placeholder="Điền họ tên"
                            />
                        </FormGroup>

                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="examplePhone">Số điện thoại</Label>
                            <Input
                                type="text"
                                name="txtLinkVideo"
                                id="examplePhone"
                                placeholder="Điền số điện thoại"
                            />
                        </FormGroup>

                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input
                                type="email"
                                name="txtEmail"
                                id="exampleEmail"
                                placeholder="Điền email"
                            />
                        </FormGroup>

                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleDiaChi">Địa chỉ</Label>
                            <Input type="text" name="txtDiachi" id="exampleDiaChi" placeholder="Nhập địa chỉ" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleLienHe">Thời gian liên hệ tốt nhất</Label>
                            <Input type="text" name="textLienhe" id="exampleLienHe" placeholder="Điền thời gian liên hệ" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup style={{ textAlign: 'center' }}>
                    <Button color="success">Đăng tin</Button>
                </FormGroup>
            </Form>

        </Container >
    );
}

export default DangTin;