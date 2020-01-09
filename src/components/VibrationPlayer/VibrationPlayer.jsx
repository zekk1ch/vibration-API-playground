import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function VibrationPlayer(props) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const startedAt = Date.now();
        const duration = props.vibrationPattern.reduce((acc, curr) => acc + curr);

        let animationId;
        function updateProgress() {
            const timePassed = Date.now() - startedAt;

            if (timePassed < duration) {
                setProgress(timePassed / duration);
                animationId = requestAnimationFrame(updateProgress);
            } else {
                setProgress(1);
                animationId = null;
            }
        }
        requestAnimationFrame(updateProgress);

        navigator.vibrate(props.vibrationPattern);

        return () => {
            navigator.vibrate(0);
            cancelAnimationFrame(animationId);
        };
    }, [props.vibrationPattern]);

    return (
        <div className="vibration-player page">
            <progress className="vibration-player--progress" value={progress}/>
        </div>
    );
}

export default VibrationPlayer;

VibrationPlayer.propTypes = {
    vibrationPattern: PropTypes.arrayOf(PropTypes.number).isRequired,
};
