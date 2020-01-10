import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import VibrationInput from './VibrationInput';

function VibrationPatternInput(props) {
    const vibrationPattern = useRef([]);

    useEffect(() => {
        if (props.isDone) {
            props.onDone(vibrationPattern.current);
        }
    }, [props.isDone]);

    function handleVibrationPeriod(duration) {
        vibrationPattern.current.push(duration);
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
