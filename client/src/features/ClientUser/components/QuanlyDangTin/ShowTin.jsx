import React, { useState, useEffect } from 'react';
import { Media, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button, ButtonGroup } from 'reactstrap';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTinDangUuTienByIdNhom, getAllTinDangByIdNhom } from '../../../Admin/components/QuanLyTinDang/dangTinSlice';
import { formatVND } from '../../../../utils/format';
import { useParams, useHistory } from 'react-router-dom';
import { formatThoiGianDangTin } from '../../../../utils/format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAward
} from "@fortawesome/free-solid-svg-icons";
var imgStyle = {
    maxWidth: "100px",
    heightWidth: "100px",

};



const ShowTin = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { nhom_id, page } = useParams();

    const [activeTab, setActiveTab] = useState('1');
    // const [pagePer, setPagePer] = useState(page);
    const tinDangList = useSelector(state => state.tinDang); // get admin in reducer

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        // call tin uu tien
        // call tin thuong
        dispatch(getAllTinDangUuTienByIdNhom(nhom_id));
        dispatch(getAllTinDangByIdNhom(nhom_id, page));
    }, [])
    const handleClickPrev = () => {
        const value = parseInt(page) - 1;
        if (value === 0) {
            value = 1
        }
        // setPagePer(value);
        history.push(`/home/showtin/${nhom_id}/${value}`)
        dispatch(getAllTinDangUuTienByIdNhom(nhom_id));
        dispatch(getAllTinDangByIdNhom(nhom_id, value));
    }

    const handleClickNext = () => {
        const value = parseInt(page) + 1;
        // setPagePer(value);
        history.push(`/home/showtin/${nhom_id}/${value}`)
        dispatch(getAllTinDangUuTienByIdNhom(nhom_id));
        dispatch(getAllTinDangByIdNhom(nhom_id, value));
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
                                {
                                    tinDangList.tinDangUuTienByIdNhom.map((tindang, i) => (
                                        <Media key={i} className="mb-3 pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                                            <Media left href="">
                                                <NavLink href={`/home/showonetin${tindang.tindang_id}`} style={{ padding: '0' }}><Media style={imgStyle} object src={tindang.hinhanh[0]} alt="Generic placeholder image" /></NavLink>
                                            </Media>
                                            <Media body className="ml-3">
                                                <Media >
                                                    <h6><NavLink href={`/home/showonetin/${tindang.tindang_id}`} style={{ padding: '0' }}>{tindang.tindang_tieude}</NavLink></h6><sub style={{ marginLeft: '5px', color: 'rgb(243, 126, 33)' }}><FontAwesomeIcon icon={faAward} /> ưu tiên</sub>
                                                </Media>
                                                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                                    <p>{tindang.tindang_tinhthanh} <br></br> {formatThoiGianDangTin(tindang.create_at)}</p> <h5 style={{ marginRight: '25px', color: '#c00' }}> {formatVND(tindang.tindang_gia, 'VNĐ')}</h5>
                                                </div>


                                            </Media>
                                        </Media>
                                    ))
                                }
                                {
                                    tinDangList.tinDangByIdNhom.map((tindang, i) => (
                                        <Media key={i} className="mb-3 pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                                            <Media left href="">
                                                <NavLink href={`/home/showonetin${tindang.tindang_id}`} style={{ padding: '0' }}><Media style={imgStyle} object src={tindang.hinhanh[0]} alt="Generic placeholder image" /></NavLink>
                                            </Media>
                                            <Media body className="ml-3">
                                                <Media >
                                                    <h6><NavLink href={`/home/showonetin/${tindang.tindang_id}`} style={{ padding: '0' }}>{tindang.tindang_tieude}</NavLink></h6>
                                                </Media>
                                                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                                    <p>{tindang.tindang_tinhthanh} <br></br> {formatThoiGianDangTin(tindang.create_at)}</p> <h5 style={{ marginRight: '25px', color: '#c00' }}> {formatVND(tindang.tindang_gia, 'VNĐ')}</h5>
                                                </div>


                                            </Media>
                                        </Media>
                                    ))
                                }
                                <div style={{ textAlign: 'center' }}>
                                    <ButtonGroup >
                                        <Button
                                            disabled={page <= 1}
                                            onClick={handleClickPrev}>
                                            Prev
                                        </Button>
                                        <Button color="primary">Page: {page}</Button>
                                        <Button
                                            disabled={tinDangList.tinDangByIdNhom.length < 10}
                                            onClick={handleClickNext}
                                        >Next</Button>
                                    </ButtonGroup>
                                </div>


                            </div>
                        </Col>
                    </Row>
                </TabPane>

            </TabContent>
        </div >



    );
};

export default ShowTin;