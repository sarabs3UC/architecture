import React from 'react';
import './myaccountItem.css';

const MyAccounts = () => (
    <div className="myAccount">
        <header>My accounts</header>
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

export default MyAccounts;