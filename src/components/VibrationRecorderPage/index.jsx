import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VibrationPatternInput from '../VibrationPatternInput';
import NavButton from '../NavButton';
import GoBackButton from '../GoBackButton';

function VibrationRecorder(props) {
    const [isDone, setIsDone] = useState(false);

    function stopRecording() {
        setIsDone(true);
    }

    return (
        <div className="page vibration-recorder--wrapper">
            <VibrationPatternInput
                isDone={isDone}
                onDone={props.onSave}
            />
            <NavButton
                text="Save"
                onClick={stopRecording}
            />
            <GoBackButton/>
        </div>
    );
}

export default VibrationRecorder;

VibrationRecorder.propTypes = {
    onSave: PropTypes.func.isRequired,
};

