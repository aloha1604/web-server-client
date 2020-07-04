import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Container
} from "reactstrap";

import {
    faUser, faMapMarkerAlt, faCalendarAlt, faFileAlt, faKey
} from "@fortawesome/free-solid-svg-icons";

import './HeaderUser.scss';

function HeaderUser(props) {
    return (
        <Container >
            <div className="headeruser">
                <div className="headeruser-right">
                    <div className="headeruser-right-img">
                        <img src="https://picsum.photos/id/237/200/300" alt="" width="100%" />
                    </div>
                    <div className="headeruser-right-name">
                        <h6><span><FontAwesomeIcon icon={faUser} />{' '}</span>le quy nam</h6>

                        <h6><span><FontAwesomeIcon icon={faFileAlt} />{' '}</span>Tin được duyệt:</h6>
                    </div>
                </div>
                <div className="headeruser-left">
                    <div className="headeruser-left-infor">
                        <h6><span><FontAwesomeIcon icon={faCalendarAlt} />{' '}</span>16/04/2020</h6>
                        <h6><span><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}</span>địa chỉ</h6>
                        <h6><span><FontAwesomeIcon icon={faKey} />{' '}</span>Trạng thái: {' '}active</h6>
                    </div>

                </div>
            </div>


        </Container>
    );
}

export default HeaderUser;