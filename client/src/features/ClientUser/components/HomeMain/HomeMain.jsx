import React from 'react';

// import ShowTin from '../QuanlyDangTin/ShowTin';
import { Container, Row, Col } from 'reactstrap'

import { useDispatch } from 'react-redux';


import ShowTinMoi from '../QuanlyDangTin/ShowTinMoi'
import ShowDanhMuc from '../QuanlyDangTin/ShowDanhMuc'
import SearchTin from '../QuanlyDangTin/SearchTin'

function HomeMain(props) {
    const dispatch = useDispatch();



    return (
        <Container>
            <Row className="mt-3">

                <Col md={{ size: 8, order: 0 }} xs={{ order: 1 }} className="pr-md-0 ">
                    <ShowTinMoi />
                    <ShowDanhMuc />
                </Col>
                <Col md={{ size: 4, order: 1 }} xs={{ order: 0 }} className="mb-3" style={{ marginRight: '-15px' }}>
                    <SearchTin />
                </Col>
            </Row>

        </Container>
    );
}

export default HomeMain;