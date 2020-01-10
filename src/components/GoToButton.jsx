import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavButton from './NavButton';

function GoToButton(props) {
    const history = useHistory();

    function go() {
        history.push(props.path);
    }

    return (
        <NavButton
            text={props.text}
            onClick={go}
        />
    );
}

export default GoToButton;

GoToButton.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};
