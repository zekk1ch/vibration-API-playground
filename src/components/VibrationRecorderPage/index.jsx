import React from 'react';
import PropTypes from 'prop-types';
import VibrationRecorder from '../VibrationRecorder';
import NavButton from '../NavButton';

function VibrationRecorderPage(props) {
    return (
        <div className="page vibration-recorder--wrapper">
            <VibrationRecorder
                onSave={props.onSave}
            />
            <NavButton to="/">Home</NavButton>
        </div>
    );
}

export default VibrationRecorderPage;

VibrationRecorderPage.propTypes = {
    onSave: PropTypes.func.isRequired,
};

