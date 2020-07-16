import React, { useState, useEffect } from "react";
import { Container, Table, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, CardImg, ModalFooter } from "reactstrap";
import { useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTinChoDuyet, updateTinDangActive, updateTinDangViPham } from './dangTinSlice';
import imgUserNone from '../../../../asset/images/usernone.jpg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TinDangChoDuyet = (props) => {

    const dispatch = useDispatch();
    const tinDangList = useSelector(state => state.tinDang); // get danhmuc in reducer
    const [tinDang_id, settinDang_id] = useState('');
    const [lyDoViPham, setLyDoViPham] = useState('');


    const [modal, setModal] = useState(false);
    const [modalTow, setModalTow] = useState(false);

    const toggle = (event) => {
        let value = event.target.value;
        settinDang_id(value)
        setModal(!modal)
    };
    const toggleTow = (event) => {
        let value = event.target.value;
        settinDang_id(value)
        setModalTow(!modalTow)
    };
    const math = useRouteMatch();

    useEffect(() => {
        dispatch(getAllTinChoDuyet());
    }, [])

    const handleClickDuyetTin = (event) => {
        let tindang_idd = event.target.value;// get tindang_id tại dòng đó
        dispatch(updateTinDangActive(tindang_idd));
        dispatch(getAllTinChoDuyet());
    }

    const onchangeLyDoViPham = (event) => {
        let value = event.target.value;// get tindang_id tại dòng đó
        setLyDoViPham(value);

    }

    const handleClickGuiThongBaoLoi = (event) => {
        let tindang_idd = event.target.value;// get tindang_id tại dòng đó
        const value = { tindang_idd, lyDoViPham }

        dispatch(updateTinDangViPham(value));
        dispatch(getAllTinChoDuyet());
        setModalTow(!modalTow)
    }

    return (
        <Container fluid className="content">
            <ToastContainer autoClose={2000} />
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="span">Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Tin đang chờ duyệt</BreadcrumbItem>
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
                        tinDangList.tinChoDuyet.map((tin, i) => {
                            let tindang = { ...tin }
                            return (
                                <tr key={i}>
                                    <td >{tindang.tindang_id}</td>
                                    <td >{tindang.tindang_tieude}</td>
                                    <td style={{
                                        width: '10rem',
                                        height: '4rem'
                                    }}><CardImg top width="40rem" height="50rem" src={tindang.hinhanh[0] ? tindang.hinhanh[0] : imgUserNone} alt="image tin " /></td>
                                    <td >
                                        <Button color="info" onClick={toggle} value={tindang.tindang_id}>xem chi tiêt</Button>

                                        <Modal isOpen={modal} toggle={toggle} >
                                            {
                                                tinDangList.tinChoDuyet.map((item) => {

                                                    if (item.tindang_id === parseInt(tinDang_id))
                                                        return (<div>
                                                            <ModalHeader toggle={toggle}>{item.tindang_tieude}</ModalHeader>
                                                            <ModalBody>



                                                                <Form>

                                                                    <FormGroup>
                                                                        <Label for="exampleText"><h6>Danh mục</h6>{item.danhmuc_ten}</Label><br />
                                                                        <Label for="exampleText"><h6>Nhóm</h6>{item.nhom_ten}</Label><br />
                                                                        <Label for="exampleText"><h6>Tiêu đề</h6>{item.tindang_tieude}</Label><br />
                                                                        <Label for="exampleText"><h6>Id Tin</h6>{item.tindang_id}</Label><br />
                                                                        <Label for="exampleText"><h6>Giá</h6>{item.tindang_gia}</Label><br />
                                                                        <Label for="exampleText"><h6>Từ khóa</h6>{item.tindang_tukhoa}</Label><br />
                                                                        <Label for="exampleText"><h6>Tỉnh Thành</h6>{item.tindang_tinhthanh}</Label><br />
                                                                        <Label for="exampleText"><h6>Quận Huyện</h6>{item.tindang_quanhuyen}</Label><br />
                                                                        <Label for="exampleText"><h6>Phường Xã</h6>{item.tindang_phuongxa}</Label><br />
                                                                        <Label for="exampleText"><h6>Nội Dung</h6>{item.tindang_noidung}</Label><br />
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

                                        <Button color="warning" onClick={toggleTow} value={tindang.tindang_id}>Tin lỗi</Button>{' '}
                                        <Modal isOpen={modalTow} toggle={toggleTow} >
                                            {


                                                tinDangList.tinChoDuyet.map((item) => {
                                                    if (item.tindang_id === parseInt(tinDang_id))
                                                        return (
                                                            <>
                                                                <ModalHeader toggle={toggleTow}>Lý do vi phạm</ModalHeader>
                                                                <ModalBody>
                                                                    <Form>
                                                                        <FormGroup>
                                                                            <Label for="exampleText">Text Area</Label>
                                                                            <Input style={{ height: '300px' }} type="textarea" name="text" id="exampleText" onChange={onchangeLyDoViPham} />
                                                                        </FormGroup>
                                                                    </Form>
                                                                </ModalBody>
                                                                <ModalFooter>
                                                                    <Button color="primary" value={item.tindang_id} onClick={handleClickGuiThongBaoLoi}>Gửi thông báo lỗi</Button>{' '}
                                                                    <Button color="secondary" onClick={toggleTow}>Thoát</Button>
                                                                </ModalFooter>
                                                            </>
                                                        );
                                                })


                                            }

                                        </Modal>
                                        <Button color="success" value={tindang.tindang_id} onClick={handleClickDuyetTin}>Duyệt tin</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </Table>

        </Container >
    );
}

export default TinDangChoDuyet;
