import React, { useState, useEffect } from "react";
import { Container, Table, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, CardImg, ModalFooter } from "reactstrap";
import { useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTinDaDuyet, deleteTinDang } from './dangTinSlice';
import imgUserNone from '../../../../asset/images/usernone.jpg';
import parser from 'html-react-parser';
import {formatVND} from '../../../../utils/format'

const TinDaDuyet = (props) => {

    const dispatch = useDispatch();
    const tinDangList = useSelector(state => state.tinDang); // get danhmuc in reducer

    const [tinDang_id, settinDang_id] = useState('')

    const [modal, setModal] = useState(false);
    const [modalTow, setModalTow] = useState(false);

    const toggle = (event) => {
        let value = event.target.value;
        settinDang_id(value)
        setModal(!modal)
    };

    const toggleTow = () => setModalTow(!modalTow);
    const math = useRouteMatch();

    useEffect(() => {
        dispatch(getAllTinDaDuyet());
    }, [])

    const handleClickXoaTin = (event) => {
        const tindang_id = event.target.value;
        dispatch(deleteTinDang(tindang_id));
        dispatch(getAllTinDaDuyet());
    }
    return (
        <Container fluid className="content">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="span">Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Tin đã duyệt</BreadcrumbItem>
            </Breadcrumb>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID Tin</th>
                        <th>Tiêu đề</th>
                        <th>Hình ảnh</th>
                        <th>Chi tiết</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tinDangList.tinDaDuyet.map((tindang, i) => (
                            <tr key={i}>
                                <td >{tindang.tindang_id}</td>
                                <td >{tindang.tindang_tieude.length > 25 ? tindang.tindang_tieude.slice(0, 25) + '....' : (tindang.tindang_tieude)}</td>
                                <td style={{
                                    width: '10rem',
                                    height: '4rem'
                                }}><CardImg top width="40rem" height="50rem" src={tindang.hinhanh[0] ? tindang.hinhanh[0] : imgUserNone} alt="image tin " /></td>
                                <td>
                                    <Button color="info" onClick={toggle} value={tindang.tindang_id}>xem chi tiêt</Button>
                                    <Modal isOpen={modal} toggle={toggle} >
                                        {
                                            tinDangList.tinDaDuyet.map((item) => {

                                                if (item.tindang_id === parseInt(tinDang_id))
                                                    return (<div>
                                                        <ModalHeader toggle={toggle}>{item.tindang_tieude}</ModalHeader>
                                                        <ModalBody>



                                                            <Form>

                                                                <FormGroup>
                                                                <Label for="exampleText"><h6>Loại tin </h6>{parseInt(item.tindang_mienphi) === 0 ? 'Tin miễn phí' : 'Tin có phí'}</Label><br />
                                                                    <Label for="exampleText"><h6>Danh mục</h6>{item.danhmuc_ten}</Label><br />
                                                                    <Label for="exampleText"><h6>Nhóm</h6>{item.nhom_ten}</Label><br />
                                                                    <Label for="exampleText"><h6>Tiêu đề</h6>{item.tindang_tieude}</Label><br />
                                                                    <Label for="exampleText"><h6>Id Tin</h6>{item.tindang_id}</Label><br />
                                                                    <Label for="exampleText"><h6>Giá</h6>{formatVND(item.tindang_gia, 'VND')}</Label><br />
                                                                    <Label for="exampleText"><h6>Từ khóa</h6>{item.tindang_tukhoa}</Label><br />
                                                                    <Label for="exampleText"><h6>Tỉnh Thành</h6>{item.tindang_tinhthanh}</Label><br />
                                                                    <Label for="exampleText"><h6>Quận Huyện</h6>{item.tindang_quanhuyen}</Label><br />
                                                                    <Label for="exampleText"><h6>Phường Xã</h6>{item.tindang_phuongxa}</Label><br />
                                                                    <Label for="exampleText"><h6>Nội Dung</h6>{parser(item.tindang_noidung)}</Label><br />
                                                                    <Label for="exampleText"><h6>Link youtube</h6>{item.tindang_linkyoutube}</Label><br />
                                                                    <Label for="exampleText"><h6>Email</h6>{item.tindang_email}</Label><br />
                                                                    <Label for="exampleText"><h6>Địa chỉ</h6>{item.tindang_diachi}</Label><br />
                                                                    <Label for="exampleText"><h6>Thời gian liên hệ</h6>{item.tindang_thoigianlienhe}</Label><br />
                                                                    <Label for="exampleText"><h6>Trạng thái</h6>{item.tindang_active === 0 ? 'Chờ duyệt' : null}</Label><br />
                                                                    <Label for="exampleText"><h6>Ngày tạo</h6>{new Date(item.create_at).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })}</Label><br />
                                                                    <Label for="exampleText"><h6>Hình ảnh</h6>{item.hinhanh ? ':' : 'Không có hình ảnh'}</Label><br />
                                                                    <div style={{
                                                                        display: 'flex',
                                                                        flexDirection: 'column'
                                                                    }} >
                                                                        {item.hinhanh.map(hinhanh => (
                                                                            <div style={{
                                                                                width: '100%',

                                                                                margin: '5px'
                                                                            }}>

                                                                                <CardImg top width="100%" src={hinhanh ? hinhanh : imgUserNone} alt="image tin " />


                                                                            </div>
                                                                        ))}
                                                                    </div>

                                                                </FormGroup>

                                                            </Form>
                                                            {/* end form xem chi tiet */}
                                                        </ModalBody>
                                                    </div>)
                                            })
                                        }



                                    </Modal>
                                </td>
                                <td>
                                    <Button color="danger" value={tindang.tindang_id} onClick={handleClickXoaTin}>Xóa tin</Button>
                                </td>
                            </tr>
                        ))
                    }



                </tbody>
            </Table>

        </Container>
    );
}

export default TinDaDuyet;
