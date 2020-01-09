import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import VibrationInput from '../VibrationInput/VibrationInput';

function VibrationPatternInput(props) {
    const vibrationPattern = useRef([]);
    const wasResultSubmitted = useRef(false);

    useEffect(() => {
        if (props.isDone && !wasResultSubmitted.current) {
            wasResultSubmitted.current = true;
            props.onDone(vibrationPattern.current);
        }
    });

    function handleVibrationPeriod(duration) {
        if (!props.isDone) {
            vibrationPattern.current.push(duration);
        }
    }

    return (
        <VibrationInput
            afterVibrate={handleVibrationPeriod}
            afterCalm={handleVibrationPeriod}
        />
    );
}

export default VibrationPatternInput;

VibrationPatternInput.propTypes = {
    isDone: PropTypes.bool.isRequired,
    onDone: PropTypes.func.isRequired,
};
