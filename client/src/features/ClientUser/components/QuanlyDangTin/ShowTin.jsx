import React, { useState } from 'react';
import { Media, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
var imgStyle = {
    maxWidth: "64px",
    heightWidth: "64px",

};
const ShowTin = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                        style={{ background: '#F37E21' }}
                    >
                        <h6 style={{ color: '#5C5C5C' }}>Tin rao vặt mới</h6>
                    </NavLink>
                </NavItem>

            </Nav>
            <TabContent activeTab={activeTab} >
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div className="mt-3" >
                                <Media className="mb-3 pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                                    <Media left href="">
                                        <Media style={imgStyle} object src="https://picsum.photos/id/237/200/300" alt="Generic placeholder image" />
                                    </Media>
                                    <Media body className="ml-3">
                                        <Media >
                                            <h6>Media heading</h6>
                                        </Media>
                                         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                     </Media>
                                </Media>
                                <Media className="mb-3 pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                                    <Media left href="">
                                        <Media style={imgStyle} object src="https://picsum.photos/id/237/200/300" alt="Generic placeholder image" />
                                    </Media>
                                    <Media body className="ml-3">
                                        <Media >
                                            <h6>Media heading</h6>
                                        </Media>
                                         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                     </Media>
                                </Media>
                                <Media className="mb-3 pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                                    <Media left href="">
                                        <Media style={imgStyle} object src="https://picsum.photos/id/237/200/300" alt="Generic placeholder image" />
                                    </Media>
                                    <Media body className="ml-3">
                                        <Media >
                                            <h6>Media heading</h6>
                                        </Media>
                                         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                     </Media>
                                </Media>
                                <Media className="mb-3 pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                                    <Media left href="">
                                        <Media style={imgStyle} object src="https://picsum.photos/id/237/200/300" alt="Generic placeholder image" />
                                    </Media>
                                    <Media body className="ml-3">
                                        <Media >
                                            <h6>Media heading</h6>
                                        </Media>
                                         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                     </Media>
                                </Media>
                                <Media className="mb-3 pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                                    <Media left href="">
                                        <Media style={imgStyle} object src="https://picsum.photos/id/237/200/300" alt="Generic placeholder image" />
                                    </Media>
                                    <Media body className="ml-3">
                                        <Media >
                                            <h6>Media heading</h6>
                                        </Media>
                                         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                     </Media>
                                </Media>
                            </div>

                        </Col>
                    </Row>
                </TabPane>

            </TabContent>
            <div className="d-flex justify-content-center">
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                         </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>



    );
};

export default ShowTin;

