import React from 'react';

function Members(props){
    return(
        <div>
            <div className="details">
                <h2>Welcome to: household.name!</h2>
                
                <div className="details-info">
                    <h3>Members:</h3>
                    <div className="members">
                        <ul>
                            <li>
                                Member.name
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <h3>Pending approval:</h3>
                            <ul>
                                <li className="pending">
                                <p>Member.name</p><button className="button">Add</button>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members;
