import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import VibrationList from '../VibrationList';
import NavButton from '../NavButton';

function VibrationListPage(props) {
    const history = useHistory();

    function goToVibrationPage(createdAt) {
        history.push(`${createdAt}`);
    }

    return (
        <div className="page vibration-list--wrapper">
            <VibrationList
                records={props.records}
                onSelect={goToVibrationPage}
            />
            <NavButton to="/new">New</NavButton>
        </div>
    );
}

export default VibrationListPage;

VibrationListPage.propTypes = {
    records: PropTypes.arrayOf(PropTypes.shape({
        createdAt: PropTypes.number,
    })).isRequired,
};
