import React from 'react';
import { getDrivers } from "../services/drivers/";
import { MyAccounts, MyBills } from "../components";
import './account.page.css';

class AccountsContainer extends React.PureComponent{
    render () {
        return (
            <section className="settingsPage__section">
                <div className="settingsPage">
                    <MyAccounts
                        heading="My accounts"
                        data={[
                            {
                                title: '+1-386-575'
                            },
                            {
                                title: '+1-489-575'
                            }
                        ]}
                        content={
                            data => <p>{data.title}</p>
                        }
                    />
                    <MyAccounts
                        heading="My profile"
                    />
                    <MyAccounts
                        heading="My bills"
                    />
                    {/* <MyBills /> */}
                    {/* <MyProfile /> */}
                </div>
            </section>
        )
    }
};

export default AccountsContainer;