import React from 'react';
import { Container } from 'reactstrap'

function HomeMain(props) {
    return (
        <div className="container">
            <section className="page-content">
                <div className="paragraph row">
                    <div className="col home-left">
                        <div className="groups">
                            <div className="row">
                                <div className="col-md-8 grey">
                                    <h6 className="group-header icon-group building">Bất động sản</h6>
                                    <div className="row building">
                                        <div className="col-6 col-md-5">
                                            <h6><a href="/mua-ban-nha-dat" title="Mua bán nhà đất">Mua bán nhà đất</a></h6> <a href="http://raovat.vnexpress.net/mua-ban-nha-dat/can-ho-chung-cu" alt="Căn hộ chung cư">Căn hộ chung cư</a><a href="http://raovat.vnexpress.net/mua-ban-nha-dat/nha-trong-ngo" alt="Nhà trong ngõ">Nhà trong ngõ</a>
                                            <a
                                                href="http://raovat.vnexpress.net/mua-ban-nha-dat/nha-mat-pho" alt="Nhà mặt phố">Nhà mặt phố</a><a href="http://raovat.vnexpress.net/mua-ban-nha-dat/biet-thu-lien-ke-phan-lo" alt="Biệt thự, liền kề, phân lô">Biệt thự, liền kề, phân lô</a><a href="http://raovat.vnexpress.net/mua-ban-nha-dat/dat-nen-du-an"
                                                    alt="Đất, nền dự án">Đất, nền dự án</a><a href="http://raovat.vnexpress.net/mua-ban-nha-dat/kho-bai-nha-xuong" alt="Kho bãi, nhà xưởng">Kho bãi, nhà xưởng</a> </div>
                                        <div className="col-6 col-md-7">
                                            <h6><a href="/thue-nha-dat" title="Thuê nhà đất">Thuê nhà đất</a></h6>
                                            <div className="row building">
                                                <div className="col-md-7">
                                                    <a href="http://raovat.vnexpress.net/thue-nha-dat/can-ho-chung-cu" alt="Căn hộ chung cư">Căn hộ chung cư</a><a href="http://raovat.vnexpress.net/thue-nha-dat/nha-trong-ngo" alt="Nhà trong ngõ">Nhà trong ngõ</a>
                                                    <a
                                                        href="http://raovat.vnexpress.net/thue-nha-dat/nha-mat-pho" alt="Nhà mặt phố">Nhà mặt phố</a><a href="http://raovat.vnexpress.net/thue-nha-dat/biet-thu-lien-ke-phan-lo" alt="Biệt thự, liền kề, phân lô">Biệt thự, liền kề, phân lô</a><a href="http://raovat.vnexpress.net/thue-nha-dat/phong-tro"
                                                            alt="Phòng trọ">Phòng trọ</a><a href="http://raovat.vnexpress.net/thue-nha-dat/kho-bai-nha-xuong" alt="Kho bãi, nhà xưởng">Kho bãi, nhà xưởng</a>
                                                </div>
                                                <div className="col-md-5">
                                                    <a href="http://raovat.vnexpress.net/thue-nha-dat/van-phong" alt="Văn phòng">Văn phòng</a>
                                                    <a href="http://raovat.vnexpress.net/thue-nha-dat/cua-hang" alt="Cửa hàng">Cửa hàng</a>
                                                    <a href="http://raovat.vnexpress.net/thue-nha-dat/cac-loai-bds-khac"
                                                        alt="Các loại BĐS khác">Các loại BĐS khác</a>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 grey md-left-white">
                                    <h6 className="group-header icon-group car">Ôtô, xe máy</h6>
                                    <div className="row car">
                                        <div className="col-6 col-md-7">
                                            <h6><a href="/oto" title="Ôtô">Ôtô</a></h6> <a href="http://raovat.vnexpress.net/oto/phu-tung-do-choi" alt="Phụ tùng, đồ chơi">Phụ tùng, đồ chơi</a><a href="http://raovat.vnexpress.net/oto/sua-chua-oto" alt="Sửa chữa Ôtô">Sửa chữa Ôtô</a><a href="http://raovat.vnexpress.net/oto/ban"
                                                alt="Bán">Bán</a><a href="http://raovat.vnexpress.net/oto/thue" alt="Thuê">Thuê</a><a href="http://raovat.vnexpress.net/oto/mua" alt="Mua">Mua</a> </div>
                                        <div className="col-6 col-md-5">
                                            <h6><a href="/xe-may-xe-dap" title="Xe máy">Xe máy</a></h6> <a href="http://raovat.vnexpress.net/xe-may-xe-dap/xe-may" alt="Xe máy">Xe máy</a><a href="http://raovat.vnexpress.net/xe-may-xe-dap/xe-dap" alt="Xe đạp">Xe đạp</a><a href="http://raovat.vnexpress.net/xe-may-xe-dap/xe-dap-dien"
                                                alt="Xe đạp điện">Xe đạp điện</a><a href="http://raovat.vnexpress.net/xe-may-xe-dap/dich-vu" alt="Dịch vụ">Dịch vụ</a> </div>
                                    </div>
                                </div>
                                <div className="col-md-4 grey">
                                    <h6 className="group-header icon-group faction">Thời trang, làm đẹp </h6>
                                    <div className="faction"> <a href="http://raovat.vnexpress.net/thoi-trang-lam-dep/thoi-trang-nam-nu" alt="Thời trang nam, nữ">Thời trang nam, nữ</a><a href="http://raovat.vnexpress.net/thoi-trang-lam-dep/nuoc-hoa-my-pham" alt="Nước hoa, mỹ phẩm">Nước hoa, mỹ phẩm</a>
                                        <a
                                            href="http://raovat.vnexpress.net/thoi-trang-lam-dep/dong-ho-phu-kien-thoi-trang" alt="Đồng hồ, phụ kiện thời trang">Đồng hồ, phụ kiện thời trang</a><a href="http://raovat.vnexpress.net/thoi-trang-lam-dep/dich-vu-lam-dep" alt="Dịch vụ làm đẹp">Dịch vụ làm đẹp</a><a href="http://raovat.vnexpress.net/thoi-trang-lam-dep/me-va-be" alt="Mẹ và bé">Mẹ và bé</a>                                    </div>
                                </div>
                                <div className="col-md-8 grey md-left-white">
                                    <h6 className="group-header icon-group electronic">Đồ điện tử</h6>
                                    <div className="row electronic">
                                        <div className="col-5 group-43"><a href="http://raovat.vnexpress.net/dien-tu-ky-thuat-so/dien-lanh-gia-dung" alt="Điện lạnh, gia dụng">Điện lạnh, gia dụng</a><a href="http://raovat.vnexpress.net/dien-tu-ky-thuat-so/am-thanh-audio" alt="Âm thanh , audio">Âm thanh , audio</a>
                                            <a
                                                href="http://raovat.vnexpress.net/dien-tu-ky-thuat-so/thiet-bi-hinh-anh" alt="Thiết bị hình ảnh">Thiết bị hình ảnh</a><a href="http://raovat.vnexpress.net/dien-tu-ky-thuat-so/dien-tu" alt="Điện tử">Điện tử</a><a href="http://raovat.vnexpress.net/dien-tu-ky-thuat-so/ky-thuat-so" alt="Kỹ thuật số">Kỹ thuật số</a>
                                        </div>
                                        <div className="col-4 group-37"><a href="http://raovat.vnexpress.net/pc-laptop/may-tinh-bang" alt="Máy tính bảng">Máy tính bảng</a><a href="http://raovat.vnexpress.net/pc-laptop/phu-kien-may-tinh" alt="Phụ kiện máy tính">Phụ kiện máy tính</a><a href="http://raovat.vnexpress.net/pc-laptop/laptop"
                                            alt="Laptop">Laptop</a><a href="http://raovat.vnexpress.net/pc-laptop/may-de-ban" alt="Máy để bàn">Máy để bàn</a><a href="http://raovat.vnexpress.net/pc-laptop/dich-vu" alt="Dịch vụ">Dịch vụ</a>
                                        </div>
                                        <div className="col-3 group-33"><a href="http://raovat.vnexpress.net/dien-thoai-sim/dich-vu" alt="Dịch vụ">Dịch vụ</a><a href="http://raovat.vnexpress.net/dien-thoai-sim/dien-thoai" alt="Điện thoại">Điện thoại</a><a href="http://raovat.vnexpress.net/dien-thoai-sim/sim"
                                            alt="Sim">Sim</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 grey">
                                    <h6 className="group-header icon-group tourist">Ẩm thực, du lịch</h6>
                                    <div className="tourist"><a href="http://raovat.vnexpress.net/am-thuc-du-lich/du-lich" alt="Du lịch">Du lịch</a><a href="http://raovat.vnexpress.net/am-thuc-du-lich/am-thuc" alt="Ẩm thực">Ẩm thực</a>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 grey md-left-white">
                                    <h6 className="group-header icon-group service">Dịch vụ</h6>
                                    <div className="tourist"><a href="http://raovat.vnexpress.net/dich-vu/dau-thau" alt="Đấu thầu">Đấu thầu</a><a href="http://raovat.vnexpress.net/dich-vu/tim-nha-phan-phoi-dai-ly" alt="Tìm nhà phân phối, đại lý">Tìm nhà phân phối, đại lý</a><a href="http://raovat.vnexpress.net/dich-vu/tim-doi-ta-c"
                                        alt="Tìm đối tác">Tìm đối tác</a><a href="http://raovat.vnexpress.net/dich-vu/dich-vu-gia-dinh" alt="Dịch vụ gia đình">Dịch vụ gia đình</a><a href="http://raovat.vnexpress.net/dich-vu/thong-bao-thanh-l-p-cong-ty" alt="Thông báo thành lập công ty">Thông báo thành lập công ty</a>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 grey md-left-white">
                                    <h6 className="group-header icon-group work">Tuyển sinh, tuyển dụng</h6>
                                    <div className="tourist"><a href="http://raovat.vnexpress.net/tuyen-sinh-tuyen-dung/tuyen-dung" alt="Tuyển dụng">Tuyển dụng</a><a href="http://raovat.vnexpress.net/tuyen-sinh-tuyen-dung/tuyen-sinh" alt="Tuyển sinh">Tuyển sinh</a><a href="http://raovat.vnexpress.net/tuyen-sinh-tuyen-dung/tim-viec"
                                        alt="Tìm việc">Tìm việc</a>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 grey md-left-white">
                                    <h6 className="group-header icon-group more">Khác</h6>
                                    <div className="tourist"><a href="http://raovat.vnexpress.net/khac/linh-tinh" alt="Linh tinh">Linh tinh</a><a href="http://raovat.vnexpress.net/khac/thanh-ly-giam-gia" alt="Thanh lý, giảm giá">Thanh lý, giảm giá</a><a href="http://raovat.vnexpress.net/khac/cay-canh"
                                        alt="Cây cảnh">Cây cảnh</a><a href="http://raovat.vnexpress.net/khac/thu-nuoi" alt="Thú nuôi">Thú nuôi</a><a href="http://raovat.vnexpress.net/khac/dung-cu-do-the-thao" alt="Dụng cụ, đồ thể thao">Dụng cụ, đồ thể thao</a>
                                        <a
                                            href="http://raovat.vnexpress.net/khac/van-phong-pham" alt="Văn phòng phẩm">Văn phòng phẩm</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 home-right d-none d-lg-block">
                        <div id="top-svip">
                            <div className="top-svip">
                                <a href="/tp-ho-chi-minh-quan-binh-tan/mua-ban-nha-dat-dat-nen-du-an/ho-tro-ngan-hang-thanh-ly-15-nen-dat-re-hon-thi-truong-15-gan-bx-mien-2292690.html" className="product">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/052e6e91498dd1f26da9450612ea3ec6.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <div className="text">
                                        <div>
                                            <h6>Hỗ trợ ngân hàng thanh lý 15 nền đất rẻ hơn thị trường 15% BX Miền Tây</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="/tp-ho-chi-minh-quan-binh-tan/mua-ban-nha-dat-dat-nen-du-an/thong-bao-thanh-ly-29-nen-dat-khu-tay-tphcm-khu-ten-lua-mo-rong-2293023.html" className="product">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/554bb3523c2cd944fad480597211a64b.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <div className="text">
                                        <div>
                                            <h6>Thông báo thanh lý 29 nền đất Khu Tây TPHCM, khu Tên Lửa mở rộng, gần Bến Xe Miền Tây</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="/tp-ho-chi-minh-quan-1/mua-ban-nha-dat-biet-thu-lien-ke-phan-lo/ban-biet-thu-song-lap-khu-centacity-162m-gia-tot-nhat-hien-nay-2293194.html" className="product">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/fc65593b621e6117b9698d37c7ecd462.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <div className="text">
                                        <div>
                                            <h6>Bán biệt thự song lập khu Centacity 162m giá tốt hiện nay</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="/tp-ho-chi-minh-quan-binh-tan/mua-ban-nha-dat-dat-nen-du-an/ngop-no-nen-ban-lai-nen-dat-gan-kcn-pou-yuen-so-rieng-2292967.html" className="product">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/f4803613ddedb7d5aec6f2a52fe4ddc6.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <div className="text">
                                        <div>
                                            <h6>Bán lại nền đất gần khu công nghiệp Pou Yuen sổ riêng</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="/tp-ho-chi-minh-quan-binh-tan/mua-ban-nha-dat-dat-nen-du-an/ngan-hang-thanh-ly-16-nen-dat-va-3-lo-goc-lien-ke-khu-ten-lua-binh-tan-2272662.html" className="product">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/06/16/ff59002fa8a8ff780a70fd9986029b91.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <div className="text">
                                        <div>
                                            <h6>Ngân hàng HT thanh lý 15 nền đất và 3 lô góc liền kề khu Tên Lửa Bình Tân</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="top-vip">
                    <div className="list-grid paragraph">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 ">
                                <a className="product" href="/tp-ho-chi-minh-quan-9/mua-ban-nha-dat-biet-thu-lien-ke-phan-lo/nha-pho-biet-thu-1-tret-2-lau-1-ap-mai-q9-5x20-8x20-da-xay-dung-2228540.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/03/16/6da53997f6f2c15921e6485c23514573.jpeg" className="img-fluid img-thumbnail" />
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
                                <a className="product" href="/tp-ho-chi-minh-quan-1/mua-ban-nha-dat-can-ho-chung-cu/ban-gap-chung-cu-2-mat-tien-hacom-galacity-2292770.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/b125af83f9ab95aef54bf4252f694a0b.jpeg" className="img-fluid img-thumbnail" />
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
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/tp-ho-chi-minh-huyen-binh-chanh/mua-ban-nha-dat-nha-trong-ngo/ban-nha-3-phong-ngu-tang-noi-that-cao-cap-gia-hap-dan-o-binh-chanh-2292713.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/e0c0fe0eda2a297d3ec8279a55e979de.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Bán nhà 3 phòng ngủ, tặng nội thất cao cấp, giá hấp dẫn ở Bình Chánh</h6>
                                        </li>
                                        <li><span className="price">1.780.000.000</span>
                                        </li>
                                        <li><span className="location">TP Hồ Chí Minh, Huyện Bình Chánh</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/tp-ho-chi-minh-quan-tan-binh/thue-nha-dat-can-ho-chung-cu/don-gia-hoan-thien-can-ho-1803691.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2017/11/23/c9224ecfc7b525fc174f45884eafc969.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Đơn giá hoàn thiện căn hộ</h6>
                                        </li>
                                        <li><span className="price">3.500.000</span>
                                        </li>
                                        <li><span className="location">TP Hồ Chí Minh, Quận Tân Bình</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/tp-ho-chi-minh-quan-3/thue-nha-dat-van-phong/cho-thue-mat-bang-van-phong-duong-30m-q3-gia-22tr-2293137.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/112f522df232401c6f0a45a8742f44a5.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Cho thuê mặt bằng văn phòng đường 30m quận 3</h6>
                                        </li>
                                        <li><span className="price">22.000.000</span>
                                        </li>
                                        <li><span className="location">TP Hồ Chí Minh, Quận 3</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/tp-ho-chi-minh-quan-binh-tan/mua-ban-nha-dat-dat-nen-du-an/ngan-hang-thanh-ly-16-nen-dat-va-3-lo-goc-lien-ke-khu-ten-lua-binh-tan-2272662.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/06/16/ff59002fa8a8ff780a70fd9986029b91.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Ngân hàng HT thanh lý 15 nền đất và 3 lô góc liền kề khu Tên Lửa Bình Tân</h6>
                                        </li>
                                        <li><span className="price">1.800.000.000</span>
                                        </li>
                                        <li><span className="location">TP Hồ Chí Minh, Quận Bình Tân</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/toan-quoc/thue-nha-dat-nha-trong-ngo/cho-thue-nha-nguyen-can-hem-6m-duong-biet-thu-2286678.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/06/22/bfeeeea1807f5aba1215d39647b10c0c.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Cho thuê nhà nguyên căn hẻm 6m đường Biệt Thự</h6>
                                        </li>
                                        <li><span className="price">Thương lượng</span>
                                        </li>
                                        <li><span className="location" />
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/tp-ho-chi-minh/oto-ban/isuzu-mu-x-so-san-may-dau-1-9-nhap-khau-thai-lan-2293124.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/1bcd3c014af1220cc8a28fb655832cae.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Isuzu Mu-x số sàn, máy dầu 1.9 nhập khẩu Thái Lan</h6>
                                        </li>
                                        <li><span className="price">725.000.000</span>
                                        </li>
                                        <li><span className="location">TP Hồ Chí Minh</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/tp-ho-chi-minh-quan-7/mua-ban-nha-dat-can-ho-chung-cu/chung-cu-an-vien-02-pn-02-wc-73m2-khu-nam-long-a-0174-2292927.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/aa55576f57309dd285ea4ae289fca3f9.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Chung cư An Viên 02 PN 02 WC 73m2 khu Nam Long A.0174</h6>
                                        </li>
                                        <li><span className="price">2.370.000.000</span>
                                        </li>
                                        <li><span className="location">TP Hồ Chí Minh, Quận 7</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/tp-ho-chi-minh-quan-binh-tan/mua-ban-nha-dat-dat-nen-du-an/dat-tho-cu-mat-tien-duong-huong-lo-2-voi-gia-30-trieu-m2-co-so-2292906.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/19581e0003efecf1eeb942d9ead0e37b.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Đất thổ cư mặt tiền đường Hương Lộ 2 với giá 30 triệu/m2 có sổ</h6>
                                        </li>
                                        <li><span className="price">2.100.000.000</span>
                                        </li>
                                        <li><span className="location">TP Hồ Chí Minh, Quận Bình Tân</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/tp-ho-chi-minh-quan-binh-tan/mua-ban-nha-dat-dat-nen-du-an/ho-tro-ngan-hang-thanh-ly-15-nen-dat-re-hon-thi-truong-15-gan-bx-mien-2292690.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/07/01/052e6e91498dd1f26da9450612ea3ec6.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Hỗ trợ ngân hàng thanh lý 15 nền đất rẻ hơn thị trường 15% BX Miền Tây</h6>
                                        </li>
                                        <li><span className="price">1.950.000.000</span>
                                        </li>
                                        <li><span className="location">TP Hồ Chí Minh, Quận Bình Tân</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <a className="product" href="/tp-ho-chi-minh-quan-9/mua-ban-nha-dat-dat-nen-du-an/dat-bung-ong-thoan-2265248.html">
                                    <div className="thumb"><img src="https://imgraovat.vnecdn.net/images/300_180/2020/05/21/132f52cdef373b9d05e323f5e33732fc.jpeg" className="img-fluid img-thumbnail" />
                                    </div>
                                    <ul className="info clearfix">
                                        <li>
                                            <h6>Đất Bưng Ông Thoàn</h6>
                                        </li>
                                        <li><span className="price">3.100.000.000</span>
                                        </li>
                                        <li><span className="location">TP Hồ Chí Minh, Quận 9</span>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="clearfix" /> </div>
    );
}

export default HomeMain;