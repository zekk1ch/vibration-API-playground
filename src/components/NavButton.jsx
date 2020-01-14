import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavButton(props) {
    const history = useHistory();

    function navigate() {
        history.push(props.to);
    }

    return (
        <button
            className="nav-button"
            onClick={navigate}
        >
            {props.children}
        </button>
    );
}

export default NavButton;

NavButton.propTypes = {
    to: PropTypes.string.isRequired,
};
