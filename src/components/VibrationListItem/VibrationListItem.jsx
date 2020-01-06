import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function VibrationListItem(props) {
    return (
        <div className="vibration-list--item">
            <div className="vibration-list--item--createdAt">
                {moment(props.createdAt).calendar()}
            </div>
        </div>
    );
}

export default VibrationListItem;

VibrationListItem.propTypes = {
    createdAt: PropTypes.number.isRequired,
};
