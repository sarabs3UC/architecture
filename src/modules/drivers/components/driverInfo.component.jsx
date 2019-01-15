import React from 'react';
import PropTypes from 'prop-types';

const DriverInfo = ({driver}) => (
    <div>
        <h3>Driver details</h3>
        <p>{driver.name}</p>
        <p>{driver.email}</p>
        <p>{driver.address}</p>
    </div>
);

DriverInfo.propTypes = {
    driver: PropTypes.object
};

export default DriverInfo;