import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import VibrationInput from '../VibrationInput';

function VibrationRecorder(props) {
    const vibrationPattern = useRef([]);
    const [vibrateOnInput, setVibrateOnInput] = useState(true);

    function updateVibrationPattern(duration) {
        vibrationPattern.current.push(duration);
    }
    function save() {
        props.onSave(vibrationPattern.current);
    }
    function handleVibrateOnInputChange(e) {
        setVibrateOnInput(e.currentTarget.checked);
    }

    return (
        <div className="vibration-recorder">
            <VibrationInput
                afterVibrate={updateVibrationPattern}
                afterCalm={updateVibrationPattern}
                vibrateOnInput={vibrateOnInput}
            />
            <label>
                <input type="checkbox" value={vibrateOnInput} onChange={handleVibrateOnInputChange}/>
                Vibrate
            </label>
            <button onClick={save}>Save</button>
        </div>
    );
}

export default VibrationRecorder;

VibrationRecorder.propTypes = {
    onSave: PropTypes.func.isRequired,
};
