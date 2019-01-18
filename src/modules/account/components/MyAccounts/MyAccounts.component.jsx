import React from 'react';
import PropTypes from 'prop-types';
import './myaccount.css';

const MyAccounts = ({heading, data, content}) => (
    <div className="myAccount">
        <header>{heading}</header>
        <section>
            <ul>
                <li className="myAccount__listItem active">
                    <div className="myAccount__content">
                        <div className="myAccount__account-number">+1-386-575-1232</div>
                        <div className="myAccount__status myAccount__status--available">Available</div>
                    </div>
                    <div className="myAccount__actions">
                        <button onClick={() => {}} className="myAccount__button--gradient myAccount__button">Edit</button>
                    </div>
                </li>
                <li className="myAccount__listItem">
                    <div className="myAccount__content">
                        <div className="myAccount__account-number">+1-386-575-1232</div>
                        <div className="myAccount__status">Not Available</div>
                    </div>
                    <div className="myAccount__actions">
                        <button onClick={() => {}} className="myAccount__button--gradient myAccount__button">Delete</button>
                    </div>
                </li>
            </ul>
        </section>
    </div>
);

MyAccounts.propTypes = {
    heading: PropTypes.string
};

export default MyAccounts;