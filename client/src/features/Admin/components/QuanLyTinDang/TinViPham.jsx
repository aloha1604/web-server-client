import React, { useState } from "react";
import { Container, Table, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText, CardImg, ModalFooter } from "reactstrap";
import { useRouteMatch } from 'react-router-dom'

const TinViPham = (props) => {


    const [modal, setModal] = useState(false);
    const [modalTow, setModalTow] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleTow = () => setModalTow(!modalTow);
    const math = useRouteMatch();

    return (
        <Container fluid className="content">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem active tag="span">Admin</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={math.url} active >Tất cả tin Vi Phạm</BreadcrumbItem>
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
                    <tr >
                        <td >02</td>
                        <td >tieude1</td>
                        <td style={{
                            width: '10rem',
                            height: '4rem'
                        }}><CardImg top width="40rem" height="50rem" src="https://picsum.photos/seed/picsum/200/300" alt="Card image cap" /></td>
                        <td>
                            <Button color="info" onClick={toggle}>xem chi tiêt</Button>
                            <Modal isOpen={modal} toggle={toggle} >
                                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    {/* form chi tiet */}
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSelect">Select</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSelectMulti">Select Multiple</Label>
                                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleText">Text Area</Label>
                                            <Input type="textarea" name="text" id="exampleText" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleFile">File</Label>
                                            <Input type="file" name="file" id="exampleFile" />
                                            <FormText color="muted">
                                                This is some placeholder block-level help text for the above input.
                                                It's a bit lighter and easily wraps to a new line.
                                             </FormText>
                                        </FormGroup>
                                        <FormGroup tag="fieldset">
                                            <legend>Radio Buttons</legend>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" />{' '}
                                                     Option one is this and that—be sure to include why it's great
                                                 </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" />{' '}
                                                    Option two can be something else and selecting it will deselect option one
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check disabled>
                                                <Label check>
                                                    <Input type="radio" name="radio1" disabled />{' '}
                                                    Option three is disabled
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" />{' '}
                                            Check me out
                                            </Label>
                                        </FormGroup>
                                    </Form>
                                    {/* end form xem chi tiet */}
                                </ModalBody>
                            </Modal>
                        </td>
                        <td>

                            <Button color="warning" onClick={toggleTow}>Lý do</Button>{' '}
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
                            <Button color="danger">Xóa tin</Button>
                        </td>
                    </tr>
                    <tr >
                        <td>04</td>
                        <td>tieude2</td>
                        <td style={{
                            width: '10rem',
                            height: '4rem'
                        }}><CardImg top width="40rem" height="50rem" src="https://picsum.photos/id/237/200/300" alt="Card image cap" /></td>
                        <td><Button color="info">xem chi tiêt</Button></td>
                        <td>
                            <Button color="warning" onClick={toggleTow}>Lý do</Button>{' '}
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
                            <Button color="danger">Xóa tin</Button></td>
                    </tr>
                    <tr >

                        <td>434</td>
                        <td>tieude3</td>
                        <td style={{
                            width: '10rem',
                            height: '4rem'
                        }}><CardImg top width="40rem" height="50rem" src="https://picsum.photos/id/237/200/300" alt="Card image cap" /></td>
                        <td><Button color="info">xem chi tiêt</Button></td>
                        <td>
                            <Button color="warning" onClick={toggleTow}>Lý do</Button>{' '}
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
                            <Button color="danger">Xóa tin</Button></td>
                    </tr>
                </tbody>
            </Table>

        </Container>
    );
}

export default TinViPham;
