import React from 'react';
import PropTypes from 'prop-types';

const Message = ({message, onClick}) => (
    <React.Fragment>
        <p>{message}</p>
        <button onClick={onClick}>Register Now!</button>
    </React.Fragment>
);

Message.propTypes = {
    message: PropTypes.string,
    onClick: PropTypes.func
};

export default Message;