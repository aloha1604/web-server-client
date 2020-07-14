import React from 'react';
import {
    faSignOutAlt,
    faCopy,
    faCheckSquare,
    faCaretSquareRight,
    faSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Container, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Badge, FormText, Col, Row, CustomInput, Card, CardHeader, CardBody,
    CardTitle, CardText
} from 'reactstrap'

const QuyDinhDangTin = props => {
    return (
        <Col md={{ size: 4, order: 1 }} sm={{ order: 0 }}>
            <div>
                <Card>
                    <CardHeader>HƯỚNG DẪN ĐĂNG TIN HIỆU QUẢ</CardHeader>
                    <CardBody>
                        <CardTitle>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>Thông tin có dấu sao <span style={{ color: 'red' }}>*</span>
                        là bắt buộc
                        </CardTitle>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                        Đăng tin bằng tài khoản đăng ký để dễ dàng quản lý bài đăng và được xét duyệt nhanh hơn.
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                        Điền đầy đủ thông tin một cách chính xác để người xem dễ tiếp cận và đưa ra quyết định giao dịch.
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                        Nội dung Tiếng Việt có dấu và không viết tắt, mô tả đầy đủ về tài sản đăng mua bán/cho thuê.
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                        Số điện thoại liên hệ phải ở tình trạng liên lạc được.
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                        Các ảnh đại diện và ảnh chi tiết phải đúng là ảnh của tài sản, các tin vi phạm sẽ không được duyệt lên website.
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                        Các ảnh đại diện và ảnh chi tiết phải đúng là ảnh của tài sản, các tin vi phạm sẽ không được duyệt lên website.
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                        Không chèn link website trong bài, các bài vi phạm sẽ bị xoá link website khỏi nội dung.
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                        Không chèn link website trong bài, các bài vi phạm sẽ bị xoá link website khỏi nội dung.
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                        Không đăng tin trùng lặp dưới bất kỳ hình thức tin đăng nào. Các tin trùng sẽ bị từ chối.
                    </CardText>

                    </CardBody>
                </Card>
            </div>
        </Col>
    );
};

export default QuyDinhDangTin;