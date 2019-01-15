import React from 'react';
import { getDrivers } from "../services/drivers/";
import {DriverInfo} from '../components/';

class DriversContainer extends React.PureComponent{
    state = {
        driver: {}
    }
    componentDidMount () {
        // get drivers
        getDrivers()
        .then(driver => this.setState( () => ({driver})));
    }
    render () {
        const {driver} = this.state;
        return (
            <DriverInfo driver={driver} />
        )
    }
}

export default DriversContainer;