import React from 'react';
import PropTypes from 'prop-types';
import VibrationListItem from './VibrationListItem';

function VibrationList(props) {
    return (
        <div className="vibration-list">
            {props.records.map((record) => (
                <VibrationListItem
                    key={record.createdAt}
                    createdAt={record.createdAt}
                    onSelect={props.onSelect}
                />
            ))}
        </div>
    );
}

export default VibrationList;

VibrationList.propTypes = {
    records: PropTypes.arrayOf(PropTypes.shape({
        createdAt: PropTypes.number,
    })).isRequired,
    onSelect: PropTypes.func.isRequired,
};
