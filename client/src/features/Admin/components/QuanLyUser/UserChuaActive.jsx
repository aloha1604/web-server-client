import React, { useState, useEffect } from "react";
import { Container, Table, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText, CardImg, ModalFooter } from "reactstrap";
import { useRouteMatch, useHistory } from 'react-router-dom';
import imgUserNone from '../../../../asset/images/usernone.jpg';
import { getAllUserChuaActive } from './userSlice';
import { useDispatch, useSelector } from 'react-redux';

const UserChuaActive = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [modalTow, setModalTow] = useState(false);
    const userList = useSelector(state => state.user); // get danhmuc in reducer

    const toggle = () => setModal(!modal);
    const toggleTow = () => setModalTow(!modalTow);
    const math = useRouteMatch();
    useEffect(() => {
        dispatch(getAllUserChuaActive());
    }, [])

    return (
        <Container fluid className="content">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="a" href={'/admin'}>Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >User đang ký mà chưa xác nhận email!!</BreadcrumbItem>
            </Breadcrumb>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID User</th>
                        <th>Email</th>
                        <th>Hình ảnh</th>
                        <th>Chi tiết</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.user.map(user => {
                        return (<tr>
                            <td >{user.user_id}</td>
                            <td >{user.email}</td>
                            <td style={{
                                width: '10rem',
                                height: '4rem'
                            }}><CardImg top width="40rem" height="50rem" src={user.hinhanh ? user.hinhanh : imgUserNone} alt="Card image cap" /></td>
                            <td>
                                <Button color="info" onClick={toggle}>xem chi tiêt</Button>
                                <Modal isOpen={modal} toggle={toggle} >
                                    <ModalHeader toggle={toggle}>Chi tiết user</ModalHeader>
                                    <ModalBody>
                                        {/* form chi tiet */}
                                        <Form>
                                            <FormGroup>
                                                <p>
                                                    <Label for="exampleText"><h6>ID User</h6> {user.user_id}</Label><br />
                                                    <Label for="exampleText"><h6>Email</h6> {user.email}</Label><br />
                                                    <Label for="exampleText"><h6>Trạng thái</h6> {user.active}</Label><br />
                                                    <Label for="exampleText"><h6>Vi phạm</h6> {user.vipham === 0 ? 'Tài khoản tốt ' : 'Tài khoản bị vi phạm'}</Label><br />
                                                    <Label for="exampleText"><h6>Họ tên</h6> {user.hoten}</Label><br />
                                                    <Label for="exampleText"><h6>Phone</h6> {user.phone}</Label><br />
                                                    <Label for="exampleText"><h6>Đia chỉ</h6> {user.diachi}</Label><br />
                                                    <Label for="exampleText"><h6>Ngày sinh</h6> {user.ngaysinh}</Label><br />
                                                    <Label for="exampleText"><h6>Tỉnh thành</h6> {user.tinhthanh}</Label><br />
                                                    <Label for="exampleText"><h6>Quận huyện</h6> {user.quanhuyen}</Label><br />
                                                    <Label for="exampleText"><h6>Phường xã</h6> {user.phuongxa}</Label><br />
                                                    <Label for="exampleText"><h6>Giới tính</h6> {user.gioitinh === 0 ? 'Nam' : 'Nữ'}</Label><br />
                                                    <Label for="exampleText"><h6>CMND/Passport</h6> {user.cmnd}</Label><br />
                                                    <Label for="exampleText"><h6>Ngày cấp</h6> {user.ngaycap}</Label><br />
                                                    <Label for="exampleText"><h6>Nơi cấp</h6> {user.noicap}</Label><br />
                                                </p>
                                            </FormGroup>
                                        </Form>
                                        {/* end form xem chi tiet */}
                                    </ModalBody>
                                </Modal>
                            </td>
                            <td>

                                <Button color="warning" onClick={toggleTow}>Thông báo</Button>{' '}
                                <Modal isOpen={modalTow} toggle={toggleTow} >
                                    <ModalHeader toggle={toggleTow}>Lý do vi phạm</ModalHeader>
                                    <ModalBody>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleText">Text Area</Label>
                                                <Input style={{ height: '300px' }} type="textarea" name="text" id="exampleText" disabled />
                                            </FormGroup>
                                        </Form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={toggleTow}>Thoát</Button>
                                    </ModalFooter>
                                </Modal>
                                <Button color="danger">Block</Button>
                            </td>
                        </tr>
                        );
                    })}

                </tbody>
            </Table>

        </Container >
    );
}

export default UserChuaActive;
