import React from 'react';
import {
    faSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Card, CardHeader, CardBody,
    CardTitle, CardText
} from 'reactstrap'

const QuyDinhDangTin = props => {
    return (

        <div>
            <Card>
                <CardHeader>HƯỚNG DẪN ĐĂNG TIN HIỆU QUẢ</CardHeader>
                <CardBody>
                    <CardText>
                        <span style={{ color: 'red', fontSize: '10px' }}>
                            <FontAwesomeIcon icon={faSquare} className="mr-2" />
                        </span>
                        Mỗi tài khoản được đăng 2 miễn phí, tin thứ 3 sẽ tính phí!!
                    </CardText>
                    <CardText>
                        <span style={{ color: 'red', fontSize: '10px' }}>
                            <FontAwesomeIcon icon={faSquare} className="mr-2" />
                        </span>
                        Tin có phí sẽ tốn 5000 Đồng rao(DR)!!!
                    </CardText>
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

    );
};

export default QuyDinhDangTin;