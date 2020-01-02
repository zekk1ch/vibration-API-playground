import React from 'react';
import PropTypes from 'prop-types';

function VibrationInput(props) {
    let lastActionTime = React.useRef(0);

    function handleTouchStart(e) {
        if (e.touches.length > 1) {
            return;
        }

        const isFirstAction = lastActionTime.current === 0;
        const now = Date.now();
        const calmDuration = now - lastActionTime.current;

        lastActionTime.current = now;

        if (!isFirstAction) {
             props.afterCalm && props.afterCalm(calmDuration);
        }
    }
    function handleTouchEnd(e) {
        if (e.touches.length) {
            return;
        }

        const now = Date.now();
        const vibrateDuration = now - lastActionTime.current;

        lastActionTime.current = now;

        props.afterVibrate && props.afterVibrate(vibrateDuration);
    }

    return (
        <div
            className="vibration-input"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {props.children}
        </div>
    );
}

export default VibrationInput;

VibrationInput.propTypes = {
    afterVibrate: PropTypes.func,
    afterCalm: PropTypes.func,
};
