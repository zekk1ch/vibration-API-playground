import React from 'react';
import PropTypes from 'prop-types';
import GoBackButton from '../GoBackButton';
import VibrationPlayer from '../VibrationPlayer';

function VibrationPlayerPage(props) {
    return (
        <div className="page vibration-player--wrapper">
            <VibrationPlayer
                vibrationPattern={props.vibrationPattern}
            />
            <GoBackButton/>
        </div>
    );
}

export default VibrationPlayerPage;

VibrationPlayerPage.propTypes = {
    vibrationPattern: PropTypes.arrayOf(PropTypes.number).isRequired,
};
