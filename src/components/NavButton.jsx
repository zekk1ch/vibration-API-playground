import React from 'react';
import PropTypes from 'prop-types';

function NavButton(props) {
    return (
        <button
            className="nav-button"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default NavButton;

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
