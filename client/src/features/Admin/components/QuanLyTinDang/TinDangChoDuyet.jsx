import React, { useState } from "react";
import { Container, Table, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText, CardImg, ModalFooter } from "reactstrap";
import { useRouteMatch } from 'react-router-dom'

const TatCaDanhMuc = (props) => {


    const [modal, setModal] = useState(false);
    const [modalTow, setModalTow] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleTow = () => setModalTow(!modalTow);
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
                        <th>ID sản phẩm</th>
                        <th>Tiêu đề</th>
                        <th>Hình ảnh</th>
                        <th>Trạng thai</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ lineHeight: '100px' }}>
                        <td >02</td>
                        <td >tieude1</td>
                        <td><CardImg top width="100px" height="100px" src="https://picsum.photos/seed/picsum/200/300" alt="Card image cap" /></td>
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
                            <Button color="success">Duyệt tin</Button>{' '}
                            <Button color="warning" onClick={toggleTow}>Tin vi phạm</Button>
                            <Modal isOpen={modalTow} toggle={toggleTow} >
                                <ModalHeader toggle={toggleTow}>Lý do vi phạm</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleText">Text Area</Label>
                                            <Input style={{ height: '300px' }} type="textarea" name="text" id="exampleText" />
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={toggleTow}>Báo cáo vi phạm</Button>{' '}
                                    <Button color="secondary" onClick={toggleTow}>Thoát</Button>
                                </ModalFooter>
                            </Modal>
                        </td>
                    </tr>
                    <tr style={{ lineHeight: '100px' }}>
                        <td>04</td>
                        <td>tieude2</td>
                        <td><CardImg top width="100px" height="100px" src="https://picsum.photos/id/237/200/300" alt="Card image cap" /></td>
                        <td><Button color="info">xem chi tiêt</Button></td>
                        <td><Button color="success">Duyệt tin</Button>{' '}<Button color="warning">Tin vi phạm</Button>{' '}</td>
                    </tr>
                    <tr style={{ lineHeight: '100px' }}>

                        <td>434</td>
                        <td>tieude3</td>
                        <td>02</td>
                        <td><Button color="info">xem chi tiêt</Button></td>
                        <td><Button color="success">Duyệt tin</Button>{' '}<Button color="warning">Tin vi phạm</Button>{' '}</td>
                    </tr>
                </tbody>
            </Table>

        </Container>
    );
}

export default TatCaDanhMuc;
