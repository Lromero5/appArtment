import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { useParams } from 'react-router-dom';
import EmailForm from './EmailForm';
import {Button} from 'reactstrap';


function Members({household}){
    
    const {id} = useParams(); //Household ID params

    const [members, setMembers] = useState([]) //All existing members in the app
    const [householdUsers, setHouseholdUsers] = useState([])
    const [memberToBeDeleted, setMemberToBeDeleted] = useState([]) //Household member to delete


    // console.log(householdUsers)
    // console.log(members)


    useEffect(() => {
        loadAllMembers()
        loadHouseholdMembers(id);
    }, [id])

    useEffect(() => {
       setHouseholdMembers();
    }, [members])

    useEffect(() => {
        updateHouseholdMember();
    }, [memberToBeDeleted])


    //Gets all existing members in the database
    
    function loadAllMembers(){
        API.getMembers()
        .then(res => 
            {setMembers(res.data)})
        .catch(err => console.log(err));
    }

    //Sets the state of the household users to grant access to the user object data.
    
    function loadHouseholdMembers(id){
        API.getHousehold(id)
            .then(res => 
                setHouseholdUsers(res.data.members))
            .catch(err => console.log(err));
    }

    //Returns a new array with the household users that matches the app's member's ID's. 
    
    function setHouseholdMembers(){
        const matchingUsers = members.filter(member => {
            // console.log(member)
            return householdUsers.includes(member._id)
        })
        // console.log(householdUsers)
    }
    
    // function setMemberToDelete(){
    //     const match = members.filter(member => {
    //         return householdUsers.includes(member._id)
    //         // return householdUsers.includes(!member._id)
    //     })
    // }

    // function setMemberToDelete() {
    //     const updatedMembers = members.filter(member => {
    //         return householdUsers.includes(!member._id)
    //     })
    // }

    function updateHouseholdMember(){
        // const memberToDelete = householdUsers.map(member => {
        //     return member._id
        // })    
        // API.updateMember(id, {members: memberToDelete})
    }
 
    
 




    // New array =members. Filter !user makes new array without user then household.members equals new array
    
   
    return(
        <div className="profile-info">
            <div className="details">
                    
                    <br></br>
                <div className="details-info">
                    {
                        householdUsers.length ? (
                            <ul className="text">
                            <h1 className="text">Current Members:</h1>
                            <br></br>
                                 
                                {householdUsers.map(member => 
                                    <li key={member._id} className="text">
                                        {member.username}
                                        <Button onClick={updateHouseholdMember()}>Delete</Button>
                                    </li>
                                    )}

                             </ul>      
                        ):
                        (
                            <h3>No current members</h3>
                        )
                    }
                </div>
            </div>
    
            <h3>Want to add more roommates?</h3>
           <EmailForm/>
        </div>
    )
}

export default Members;
