import React from 'react';

import {
    Container, Card, Button, CardTitle, CardText, Row, Col, CardImg, CardBody,
    CardSubtitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { useRouteMatch } from 'react-router-dom'



function TinBiLoi(props) {
    const math = useRouteMatch();
    return (
        <Container style={{ minHeight: '100vh' }}>
            <Row>
                <Col>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active><a href={math.url}>Quản lý tin bị lỗi</a></BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col lg="3" md="6" className="mt-3">
                    <Card>
                        <CardImg top width="318px" height="180px" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary">Sữa</Button>{' '} <Button color="danger">Xóa</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" md="6" className="mt-3">
                    <Card>
                        <CardImg top width="318px" height="180px" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary">Sữa</Button>{' '} <Button color="danger">Xóa</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" md="6" className="mt-3">
                    <Card>
                        <CardImg top width="318px" height="180px" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary">Sữa</Button>{' '} <Button color="danger">Xóa</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" md="6" className="mt-3">
                    <Card>
                        <CardImg top width="318px" height="180px" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary">Sữa</Button>{' '}<Button color="danger">Xóa</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" md="6" className="mt-3">
                    <Card>
                        <CardImg top width="318px" height="180px" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary">Sữa</Button>{' '}<Button color="danger">Xóa</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="3" md="6" className="mt-3">
                    <Card>
                        <CardImg top width="318px" height="180px" src="https://picsum.photos/id/237/200/300" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="primary">Sữa</Button>{' '}<Button color="danger">Xóa</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default TinBiLoi;