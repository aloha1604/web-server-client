import React from 'react';
import { Pagination, PaginationItem, PaginationLink, Breadcrumb, BreadcrumbItem } from 'reactstrap';


function ShowTin(props) {
    return (
        <div className="mt-3">


            <div id="top-vip">
                <div className="list-grid paragraph">
                    <div className="row">

                        <div className="col-lg-3 col-md-3 col-sm-6 ">
                            <a className="product" href="https://www.google.com/">
                                <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/03/16/6da53997f6f2c15921e6485c23514573.jpeg" className="img-fluid img-thumbnail" alt="description of image" aria-hidden="true" />
                                </div>
                                <ul className="info clearfix">
                                    <li>
                                        <h6>Nhà phố, biệt thự xây sẵn 1 trệt 2 lầu, ngay khu Công Nghệ Cao Quận 9</h6>
                                    </li>
                                    <li><span className="price">7.100.000.000</span>
                                    </li>
                                    <li><span className="location">TP Hồ Chí Minh, Quận 9</span>
                                    </li>
                                </ul>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <a className="product" href="#/tp-ho-chi-minh-quan-1/mua-ban-nha-dat-can-ho-chung-cu/ban-gap-chung-cu-2-mat-tien-hacom-galacity-2292770.html">
                                <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/b125af83f9ab95aef54bf4252f694a0b.jpeg" className="img-fluid img-thumbnail" alt="description of image" aria-hidden="true" />
                                </div>
                                <ul className="info clearfix">
                                    <li>
                                        <h6>Bán gấp chung cư 2 mặt tiền Hacom Galacity</h6>
                                    </li>
                                    <li><span className="price">Thương lượng</span>
                                    </li>
                                    <li><span className="location">TP Hồ Chí Minh, Quận 1</span>
                                    </li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
}

export default ShowTin;