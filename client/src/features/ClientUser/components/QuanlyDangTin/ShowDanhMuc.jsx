import React, { useState, useEffect } from 'react';
import { Media, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStickyNote, faGlobeAsia, faNewspaper
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { getAllNhom } from '../../../Admin/components//NhomSanPham/nhomSlice';
import { getAllDanhMuc } from '../../../Admin/components/DanhMucSanPham/danhMucSlice';
import './ShowDanhMuc.scss';
const ShowDanhMuc = () => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const danhMucList = useSelector(state => state.danhMuc); // get admin in reducer
    const nhomList = useSelector(state => state.nhom); // get nhom in reducer

    useEffect(() => {
        dispatch(getAllDanhMuc());
        dispatch(getAllNhom());

    }, [])

    return (
        <div>
            {
                danhMucList.danhMuc.map((danhmuc, i) => (
                    <div key={i}>
                        <Nav tabs>
                            <NavItem >
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                    style={{ background: '#F37E21' }}

                                >
                                    <h6 style={{ color: '#5C5C5C' }}>{danhmuc.danhmuc_ten}</h6>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab} className="tab">
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <div className="mt-3" >
                                            {nhomList.nhom.map((nhom, i) => {
                                                if (nhom.danhmuc_id === danhmuc.danhmuc_id)
                                                    return (
                                                        <Media key={i} className="mb-4 pb-2 chil" style={{ borderBottom: '1px solid #ccc' }}>
                                                            <Media left href="">
                                                                <span style={{ fontSize: '35px', color: '#8BC34A' }}><FontAwesomeIcon icon={faStickyNote} />{' '}</span>
                                                            </Media>
                                                            <Media body className="ml-3">
                                                                <Row>
                                                                    <Col sm='4'>
                                                                        <h6><NavLink href="#">{nhom.nhom_ten}</NavLink><span style={{ color: '#fff', background: '#8BC34A', fontSize: '12px', borderRadius: '3px', paddingTop: '1px', paddingRight: '4px', paddingBottom: '1px', paddingLeft: '4px' }}>Mới đăng</span></h6>
                                                                    </Col>
                                                                    <Col sm='8'>
                                                                        <Row>
                                                                            <Col sm='6'>
                                                                                <span style={{ fontSize: '16px', color: '#8BC34A' }}><FontAwesomeIcon icon={faNewspaper} />{' '}</span>Số bài đăng :18k
                                                                            </Col>
                                                                            <Col sm='6'>
                                                                                <span style={{ fontSize: '16px', color: '#8BC34A' }}><FontAwesomeIcon icon={faGlobeAsia} />{' '}</span>Lượt truy cập:
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                            </Media>
                                                        </Media>
                                                    )
                                            })}


                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>

                        </TabContent>
                    </div>
                ))
            }

        </div >



    );
};

export default ShowDanhMuc;