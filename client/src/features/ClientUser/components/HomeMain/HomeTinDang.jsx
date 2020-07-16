import React from 'react';

// import ShowTin from '../QuanlyDangTin/ShowTin';
import { Container, Row, Col } from 'reactstrap'

import ShowTin from '../QuanlyDangTin/ShowTin';
import SearchTin from '../QuanlyDangTin/SearchTin';


function HomeTinDang(props) {
    

    return (
        <Container>
            <Row className="mt-3">

                <Col md={{ size: 8, order: 0 }} xs={{ order: 1 }} className="pr-md-0 ">
                    <ShowTin />
                </Col>
                <Col md={{ size: 4, order: 1 }} xs={{ order: 0 }} className="mb-3" style={{ marginRight: '-15px' }}>
                    <SearchTin />
                </Col>
            </Row>

        </Container>
    );
}

export default HomeTinDang;