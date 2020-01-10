import React from 'react';
import { useHistory } from 'react-router-dom';
import NavButton from './NavButton';

function GoBackButton() {
    const history = useHistory();

    function goBack() {
        history.goBack();
    }

    return (
        <NavButton
            text="Go back"
            onClick={goBack}
        />
    );
}

export default GoBackButton;
