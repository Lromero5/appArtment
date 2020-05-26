import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { useParams } from 'react-router-dom';


function Members(props){
    const {id} = useParams();

    const [household, setHousehold] = useState({});
    const [members, setMembers] =useState({})


    useEffect(() => {
        loadHousehold(id);
        loadMembers(id);
    }, [])

    function loadHousehold(id){
        API.getHousehold(id)
        .then(res => 
            {setHousehold(res.data)})
        .catch(err => console.log(err));
    }

    function loadMembers(id){
        API.getMembers(id)
        .then(res => 
            {setMembers(res.data)})
        .catch(err => console.log(err));
    }

    const memberList = household.members
    console.log(memberList)

    return(
        <div className="profile-info">
            <div className="details">
                    <div>
                        <h2>Welcome to: {household.name}</h2>
                    </div>
                    <br></br>
                <div className="details-info">
                    {
                        members.length ? (
                            <ul className="members">
                            <h3 className="members">Members:</h3>
                                <li>{household.members}</li>
                                <br></br>
                
                            {/* {
                                memberList.map(member => 
                                
                                    <li key={member._id}>
                                        {member}
                                    </li>
                                    )
                            }   */}
                                </ul>
                                ):
                        (
                            <h3>No current members</h3>
                        )
                    }

                   
                </div>
            </div>
        </div>
    )
}

export default Members;
