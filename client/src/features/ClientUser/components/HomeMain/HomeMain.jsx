import React from 'react';
import { Container } from 'reactstrap'
import ShowTin from './ShowTin'

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
                </div>

            </section>
            <ShowTin />
            <div className="clearfix" /> </div>
    );
}

export default HomeMain;