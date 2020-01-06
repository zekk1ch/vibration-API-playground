import React from 'react';
import PropTypes from 'prop-types';
import VibrationListItem from '../VibrationListItem/VibrationListItem';

function VibrationList(props) {
    return (
        <div className="vibration-list page">
            {props.records.map((record) => (
                <VibrationListItem
                    key={record.createdAt}
                    createdAt={record.createdAt}
                />
            ))}
        </div>
    );
}

export default VibrationList;

VibrationList.propTypes = {
    records: PropTypes.arrayOf(PropTypes.exact({
        vibrationPattern: PropTypes.arrayOf(PropTypes.number),
        createdAt: PropTypes.number,
    })).isRequired,
};
