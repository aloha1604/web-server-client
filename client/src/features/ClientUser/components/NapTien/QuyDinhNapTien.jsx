import React from 'react';
import {
    faSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Col, Card, CardHeader, CardBody,
    CardTitle, CardText
} from 'reactstrap'

const QuyDinhNapTien = props => {
    return (
        <Col md={{ size: 4, order: 1 }} sm={{ order: 0 }}>
            <div>
                <Card>
                    <CardHeader>HƯỚNG DẪN NẠP ĐỒNG RAO</CardHeader>
                    <CardBody>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                            Khi sử dụng Đồng Rao để thanh toán cho các dịch vụ từ Rao vặt, Đồng Rao trong Rao vặt có giá trị chỉ trong Raovat.vn
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                            Đồng Rao (ĐR) là phương thức thanh toán được Rao vặt cung cấp cho người dùng, để chi trả cho các dịch vụ từ Rao vặt. Khi sử dụng Đồng Rao để mua dịch vụ từ Rao vặt, 1 Đồng Rao có giá trị tương đương với 1 Việt Nam Đồng (1 Đồng Rao = 1 Việt Nam Đồng)
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                            Đối với các tài khoản đã đăng kí trên Rao Vặt, Đồng Rao không được dùng để thuyên chuyển giữa các tài khoản cá nhân khác nhau và cũng không quy đổi thành tiền mặt ra khỏi tài khoản
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                            Đồng Rao trong tài khoản sẽ được khách hàng nạp trực tiếp bằng phương thức thanh toán qua ngân hàng nội địa ATM, thẻ VISA/MASTER/JCB, ví điện tử MoMo hoặc thẻ cào
                    </CardText>
                        <CardText>
                            <span style={{ color: 'red', fontSize: '10px' }}>
                                <FontAwesomeIcon icon={faSquare} className="mr-2" />
                            </span>
                            Đồng Rao trong tài khoản có giá trị sử dụng 365 ngày tính từ ngày giao dịch Đồng Rao cuối cùng của tài khoản, trừ trường hợp khách hàng và Rao vặt có thỏa thuận riêng về giá trị sử dụng Đồng Rao
                    </CardText>
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
};

export default QuyDinhNapTien;