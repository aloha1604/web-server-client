import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text-muted">@Coppy notRight Quynamle</span>
            </div>
        </footer>
    );
}

export default Footer;