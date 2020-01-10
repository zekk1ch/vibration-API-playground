import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import VibrationList from '../VibrationList';
import GoToButton from '../GoToButton';

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
            <GoToButton
                text="New"
                path="/new"
            />
        </div>
    );
}

export default VibrationListPage;

VibrationListPage.propTypes = {
    records: PropTypes.arrayOf(PropTypes.shape({
        createdAt: PropTypes.number,
    })).isRequired,
};
