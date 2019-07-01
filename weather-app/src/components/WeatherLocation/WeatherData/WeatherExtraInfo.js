import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{`${humidity}% - `}</span>
        <span>{`${wind} viento`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.number.isRequired,
}

export default WeatherExtraInfo;