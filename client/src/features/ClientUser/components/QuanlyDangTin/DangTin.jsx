import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import { useDispatch, useSelector } from 'react-redux';

import {
    Container, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Badge, FormText, Col, Row, CustomInput,
} from 'reactstrap';
import QuyDinhDangTin from './QuyDinhDangTin';
import { getAllNhom } from '../../../Admin/components/NhomSanPham/nhomSlice';
import { getAllDanhMuc } from '../../../Admin/components/DanhMucSanPham/danhMucSlice';
import { getAllTinhThanh } from '../../../ClientUser/reducer/apiTinhThanhSlice';
import { getAllQuanHuyen } from '../../../ClientUser/reducer/apiQuanHuyenSlice';
import { getAllPhuongXa } from '../../../ClientUser/reducer/apiPhuongXaSlice';
import { addTinDang } from '../../../../features/Admin/components/QuanLyTinDang/dangTinSlice';
import { getCountTinMienPhiAndDongRao } from '../../reducer/dongraoSlice';
import { isEmpty, isEmail } from "validator";
import { formatVND } from '../../../../utils/format'


function DangTin(props) {
    const math = useRouteMatch();
    const dispatch = useDispatch();
    const danhMucList = useSelector(state => state.danhMuc); // get admin in reducer
    const nhomList = useSelector(state => state.nhom); // get nhom in reducer
    const tinhThanhList = useSelector(state => state.tinhThanh); // get nhom in reducer
    const quanHuyenList = useSelector(state => state.quanHuyen); // get nhom in reducer
    const phuongXaList = useSelector(state => state.phuongXa); // get nhom in reducer
    const dongRaoReducer = useSelector(state => state.dongRao); // get admin in reducer
    const user = JSON.parse(localStorage.getItem('user'));
    const dongRaoLocal = JSON.parse(localStorage.getItem('dongRao'));
    const user_id = user.userFakeData._id;

    const [validatetionMsg, setValidatetionMsg] = useState({});
    const [danhmuc_id, setDanhmuc_id] = useState(12);
    const [nhom_id, setNhom_id] = useState(11);
    const [tinhThanh_id, settinhThanh_id] = useState(201);
    const [quanHuyen_id, setQuanHuyen_id] = useState(1542);
    const [tieude, setTieude] = useState('');
    const [gia, setGia] = useState(0);
    const [tuKhoa, setTuKhoa] = useState('');
    const [tinhThanh, setTinhThanh] = useState('');
    const [quanHuyen, setQuanHuyen] = useState('');
    const [phuongXa, setPhuongXa] = useState('');
    const [noiDung, setNoiDung] = useState('');
    const [imgCollection, setImgCollection] = useState('');
    const [linkYoutube, setLinkYoutube] = useState('');
    const [hoTen, setHoTen] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [diachi, setDiaChi] = useState('');
    const [thoiGianLienHe, setThoiGianLienHe] = useState('');
    const [tinMienPhi, setTinMienPhi] = useState(dongRaoLocal[0].tinmienphi);
    const [dongRao, setDongRao] = useState(dongRaoLocal[0].dongrao)

    console.log(dongRao)
    console.log(tinMienPhi)
    const onChangeNhom = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        setNhom_id(value);
    }

    const onChangeTieuDe = (event) => {
        const value = event.target.value;
        setTieude(value);
    }

    const onChangeGia = (event) => {
        const value = event.target.value;
        setGia(value);
    }

    const ongChangeTuKhoa = (event) => {
        const value = event.target.value;
        setTuKhoa(value);
    }

    const onChangeNoiDung = (event, editor) => {
        const data = editor.getData();
        setNoiDung(data);
    }


    const onChangeHinhAnh = (event) => {
        const value = event.target.files;
        // // const data = {'imgCollection':}
        // setImgCollection({ imgCollection: [...event.target.files] })
        setImgCollection(value);
    }

    const onChangeLinkYoutube = (event) => {
        const value = event.target.value;
        setLinkYoutube(value);
    }

    const onChangeHoten = (event) => {
        const value = event.target.value;
        setHoTen(value);
    }

    const onChangePhone = (event) => {
        const value = event.target.value;
        setPhone(value);
    }

    const onChangeEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    }

    const onChangeDiaChi = (event) => {
        const value = event.target.value;
        setDiaChi(value);
    }

    const onChangeThoiGianLienHe = (event) => {
        const value = event.target.value;
        setThoiGianLienHe(value);
    }

    const onChangeSelectedDanhMuc = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        setDanhmuc_id(value);
    }

    const onChangeSelectedTinhThanh = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        var text = event.nativeEvent.target[index].text;
        setTinhThanh(text);
        settinhThanh_id(value);
    }

    const onChangeSelectedQuanHuyen = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var value = event.nativeEvent.target[index].value;
        var text = event.nativeEvent.target[index].text;
        setQuanHuyen(text);
        setQuanHuyen_id(value);
    }

    const onChangeSelectedPhuongXa = (event) => {
        var index = event.nativeEvent.target.selectedIndex;
        var text = event.nativeEvent.target[index].text;
        setPhuongXa(text);
    }

    const validateAll = () => {
        const msg = {};
        if (isEmpty(tieude)
            && isEmpty(gia)
            && isEmpty(tuKhoa)
            && isEmpty(noiDung)
            && isEmpty(imgCollection)
            && isEmpty(hoTen)
            && isEmpty(phone)
            && isEmpty(email)
            && isEmpty(diachi)
            && isEmpty(thoiGianLienHe)
        ) {
            msg.empty = 'Bạn không được trống thông tin yêu cầu!!!'
        }
        if (!isEmail(email)) {
            msg.email = 'Email không được trống!!!'
        }
        setValidatetionMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    }

    const submitForm = (event) => {
        event.preventDefault();

        const isValidate = validateAll();
        if (!isValidate) return;

        var formData = new FormData();

        for (const key of Object.keys(imgCollection)) {
            formData.append('imgCollection', imgCollection[key])
        }
        formData.append('nhom_id', nhom_id);
        formData.append('user_id', user_id)
        formData.append('tieude', tieude)
        formData.append('gia', gia)
        formData.append('tuKhoa', tuKhoa)
        formData.append('tinhThanh', tinhThanh)
        formData.append('quanHuyen', quanHuyen)
        formData.append('phuongXa', phuongXa)
        formData.append('noiDung', noiDung)
        formData.append('linkYoutube', linkYoutube)
        formData.append('hoTen', hoTen)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('thoiGianLienHe', thoiGianLienHe)
        formData.append('diachi', diachi)

        if (tinMienPhi <= 2) {
            let countTinminPhi = tinMienPhi + 1;
            dongRaoLocal[0].tinmienphi = countTinminPhi;
            // dongRaoLocal.dongRao
            localStorage.setItem('dongRao', JSON.stringify(dongRaoLocal))
            setTinMienPhi(countTinminPhi)
            formData.append('tinhPhiTin', '0')
            dispatch(addTinDang(formData));
        } else if (tinMienPhi > 2 && parseInt(dongRao) > 5000) {
            formData.append('tinhPhiTin', '5000')
            let tinhToanDongRao = parseInt(dongRao) - 5000;
            dongRaoLocal[0].dongrao = tinhToanDongRao;
            localStorage.setItem('dongRao', JSON.stringify(dongRaoLocal))
            setDongRao(tinhToanDongRao)
            dispatch(addTinDang(formData));
        } else {
            alert('Cần nạp Đồng rao để có thể đăng tin có phí !');
        }
        // lay so tien dang miễn phí làm gốc, nếu tinmuphien < 3 thì sẽ gửi data tien neu khong data tien sẽ là 0
        //neu day co phi thi sẽ them data tiền, rồi sẽ gửi lên server , server sẽ trừ tiền tin này trong tài khoảng
        // ở server sẽ xet xem có data tiền tồn tại datatien thì thực hiện việc trừ tiền


    }



    useEffect(() => {
        dispatch(getAllDanhMuc());
        dispatch(getAllNhom());
        dispatch(getAllTinhThanh());
        dispatch(getAllQuanHuyen());
        dispatch(getAllPhuongXa());
        dispatch(getCountTinMienPhiAndDongRao({ user_id }));
        // setTinMienPhi(dongRaoLocal[0].tinmienphi);
        // setDongRao(dongRaoLocal[0].dongrao)


    }, [])

    // console.log(noiDung);
    return (
        <Container className="mt-3">

            <Row>
                <Col md={{ size: 8, order: 0 }} sm={{ order: 1 }}>
                    <Form onSubmit={(event) => {
                        submitForm(event)
                    }} >
                        <Breadcrumb>
                            <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                            <BreadcrumbItem ><a href={math.url}>Đăng tin</a></BreadcrumbItem>
                        </Breadcrumb>
                        {/* <KiemSoatTinDang
                            onChangeTinMienPhi={onChangeTinMienPhi}
                            onChangeDongRao={onChangeDongRao}

                        /> */}



                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            {/* <Input onChange={onChangeDongRao} /> */}
                            <h5 >Tin miễn phí : <Badge color="secondary"  >{tinMienPhi}</Badge></h5>
                            <h5  >Tổng Đồng rao: <Badge color="secondary"  >{formatVND(dongRao, 'DR')}</Badge></h5>

                        </div>


                        <h4>1.<Badge color="primary">Danh mục</Badge></h4>
                        <FormGroup>
                            <Label for="exampleSelectDanhMuc">Danh mục <span style={{ color: 'red' }}>*</span></Label>
                            <Input type="select" name="selectDanhMuc" id="exampleSelectDanhMuc" onChange={onChangeSelectedDanhMuc}>
                                <option value="NAN" active>Chọn Danh mục</option>
                                {
                                    danhMucList.danhMuc.map((danhmuc, i) => (
                                        <option key={i} value={danhmuc.danhmuc_id}>{danhmuc.danhmuc_ten}</option>
                                    ))

                                }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelectNhom">Nhóm <span style={{ color: 'red' }}>*</span></Label>
                            <Input type="select" name="selectNhom" id="exampleSelectNhom" onChange={onChangeNhom}>
                                <option value="NAN" active>Chọn nhóm theo danh mục</option>
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
                            <Label for="exampleTieude">Tiêu đề <span style={{ color: 'red' }}>*</span></Label>
                            <Input type="text" name="txtTieuDe" id="exampleTieude" placeholder="Diền tiêu đề" onChange={onChangeTieuDe} />
                            <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                            <FormText>Lưu ý: Tối thiểu 10 ký tự, tối đa 70 ký tự. Không nhập số điện thoại, giá tiền. Không nhập [mua], [bán].</FormText>
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleGia">Giá <span style={{ color: 'red' }}>*</span></Label>
                                    <Input type="text" name="textGia" id="exampleGia" placeholder="Chỉ nhập số (VD:200000)" onChange={onChangeGia} />
                                    <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                                    <FormText>Giá được tính theo VND ví dụ: 1 triệu = 1000000 vnd</FormText>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleTuKhoa">Từ khóa <span style={{ color: 'red' }}>*</span></Label>
                                    <Input type="text" name="textTuKhoa" id="exampleTuKhoa" placeholder="Nhập từ khóa muốn khách hàng tìm thấy" onChange={ongChangeTuKhoa} />
                                    <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                                    <FormText>Gợi ý: Hỗ trợ tìm kiếm, Ví dụ: iphone, iphone 6</FormText>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form style={{ border: '1px solid #ccc', padding: '10px' }}>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleTinhThanh">Tỉnh/Thành <span style={{ color: 'red' }}>*</span></Label>
                                    <Input type="select" name="selectTinhThanh" id="exampleTinhThanh" onChange={onChangeSelectedTinhThanh}>
                                        <option value="NAN" active>Chọn Tỉnh/thành</option>
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
                                    <Label for="exampleQuanHuyen">Quận/Huyện <span style={{ color: 'red' }}>*</span></Label>
                                    <Input type="select" name="selectQuanHuyen" id="exampleQuanHuyen" onChange={onChangeSelectedQuanHuyen}>
                                        <option value="NAN" active>Chọn Quận/huyện</option>
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
                                    <Label for="examplePhuongXa">Phường/Xã <span style={{ color: 'red' }}>*</span></Label>
                                    <Input type="select" name="selectPhuongXa" id="examplePhuongXa" onChange={onChangeSelectedPhuongXa} >
                                        <option value="NAN" active>Chọn phường/xã</option>
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
                        <h4>3.<Badge color="primary">Nội dung </Badge></h4>
                        <FormGroup>
                            <Label for="exampleText">Miêu tả thông tin <span style={{ color: 'red' }}>*</span></Label>
                            {/* <Input style={{
                                height: '250px',
                            }} type="textarea" name="text" id="exampleText" onChange={onChangeNoiDung} />
                            <p style={{ color: 'red' }}>{validatetionMsg.empty}</p> */}
                            <span style={{
                                height: '250px'
                            }}>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={noiDung}
                                    onChange={onChangeNoiDung}
                                />

                            </span>
                            <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                            <FormText>Nội dung tối đa 1000 ký tự</FormText>
                        </FormGroup>
                        <h4>4.<Badge color="primary">Hình ảnh & Video</Badge></h4>
                        <FormGroup>
                            <FormText>Ghi chú: Dung lượng hình ảnh cho phép tối đa 5MB. Số lượng hình ảnh tối đa cho phép 6 hình ảnh.</FormText>
                            <Label for="exampleCustomFileBrowser">File Browser <span style={{ color: 'red' }}>*</span></Label>
                            <CustomInput type="file" multiple id="exampleCustomFileBrowser" name="imgCollection" onChange={onChangeHinhAnh} />
                            <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleLinkVideo">Video youtube (không cần thiết) </Label>
                            <Input
                                type="text"
                                name="txtLinkVideo"
                                id="exampleLinkVideo"
                                placeholder="Dán link video youtube vào đây, VD: https://www.youtube.com/watch?v=**********"
                                onChange={onChangeLinkYoutube}
                            />
                            <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                        </FormGroup>
                        <h4>5.<Badge color="primary">Thông tin liên hệ <span style={{ color: 'red' }}>*</span></Badge></h4>
                        <Row form >
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleHoTen">Họ tên <span style={{ color: 'red' }}>*</span></Label>
                                    <Input
                                        type="text"
                                        name="txtLinkVideo"
                                        id="exampleHoTen"
                                        placeholder="Điền họ tên"
                                        onChange={onChangeHoten}
                                    />
                                    <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                                </FormGroup>

                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="examplePhone">Số điện thoại <span style={{ color: 'red' }}>*</span></Label>
                                    <Input
                                        type="text"
                                        name="txtLinkVideo"
                                        id="examplePhone"
                                        placeholder="Điền số điện thoại"
                                        onChange={onChangePhone}
                                    />
                                    <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                                </FormGroup>

                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email <span style={{ color: 'red' }}>*</span></Label>
                                    <Input
                                        type="email"
                                        name="txtEmail"
                                        id="exampleEmail"
                                        placeholder="Điền email"
                                        onChange={onChangeEmail}
                                    />
                                    <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                                    <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                                </FormGroup>

                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleDiaChi">Địa chỉ <span style={{ color: 'red' }}>*</span></Label>
                                    <Input type="text" name="txtDiachi" id="exampleDiaChi" placeholder="Nhập địa chỉ" onChange={onChangeDiaChi} />
                                    <p style={{ color: 'red' }}>{validatetionMsg.empty}</p>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleLienHe">Thời gian liên hệ tốt nhất <span style={{ color: 'red' }}>* </span></Label>
                                    <Input type="text" name="textLienhe" id="exampleLienHe" placeholder="Điền thời gian liên hệ" onChange={onChangeThoiGianLienHe} />
                                    <p style={{ color: 'red' }}>{validatetionMsg.email}</p>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup style={{ textAlign: 'center' }}>
                            <Button type="submit" color="success">{tinMienPhi < 3 ? 'Đăng tin miễn phí' : 'Đăng tin có phí'}</Button>
                        </FormGroup>
                    </Form>
                </Col>
                <Col md={{ size: 4, order: 1 }} sm={{ order: 0 }} >
                    <QuyDinhDangTin />
                </Col>
            </Row>


        </Container >
    );
}

export default DangTin;