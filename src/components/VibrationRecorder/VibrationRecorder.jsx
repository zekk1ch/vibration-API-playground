import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VibrationPatternInput from '../VibrationPatternInput/VibrationPatternInput';

function VibrationRecorder(props) {
    const [isDone, setIsDone] = useState(false);

    return (
        <div className="vibration-recorder page">
            <VibrationPatternInput
                isDone={isDone}
                onDone={props.onSave}
            />
            <button onClick={() => setIsDone(true)}>Save</button>
        </div>
    );
}

export default VibrationRecorder;

VibrationRecorder.propTypes = {
    onSave: PropTypes.func.isRequired,
};

