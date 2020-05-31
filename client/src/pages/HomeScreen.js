import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../utils/API';

function HomeScreen(props){

    const [households, setHouseholds] = useState([]);
    const [formObject, setFormObject] = useState({});
    const [member, setMember] = useState([]);
    // const [userHousehold, setUserHousehold] = useState([]);
    const {id} = useParams([]) // User ID


    const memberData = {
        members: id}
   

    useEffect(() => {
        loadHouseholds()
        loadMember(id)
    }, [])

    //Loads all existing households in the db
    function loadHouseholds(){
        API.getHouseholds()
        .then(res => 
            {setHouseholds(res.data)})
        .catch( err => console.log(err));
    }

    //Loads logged in user's username
    function loadMember(id){
        API.getMember(id)
        .then(res => {
            setMember(res.data.username)})
        .catch(err => console.log(err))
    }

    //Handles value
    function handleInputChange(event){
        const {name, value} = event.target;
        setFormObject({...formObject, [name]: value})
    }

    function handleFormSubmit(event){
        event.preventDefault();
        if(formObject.name){
            API.createHousehold({
                name: formObject.name
            })
            .then(res => 
                API.updateMember(res.data._id, memberData))
            .then(res => loadHouseholds())
            .catch(err => console.log(err))
        }
        else if(formObject.household_id){
            API.updateMember(formObject.household_id, memberData)
            .then(alert('You have joined ' + formObject.household_id))
            .then(res => console.log("created"))
            .catch(err => console.log(err))
        }
    }

    function deleteHousehold(id) {
        API.deleteHousehold(id)
          .then(res => loadHouseholds())
          .catch(err => console.log(err));
      }
 
    return(
        <div className="group">
        <div className="row">
        <div className="column">
        <div className="card">
            <br></br>
            <br></br>
                    <h2>Hi {member} !</h2>
                    <br></br>
                    {
                        households.length ? (
                            <ul className="text">
                            <h3 className="text">You currently belong to: </h3>
                             { households.map(house => 
                                 <li key={house._id} className="text">
                                    <div className="household">
                                        <Link to={'/household/' + house._id}> <button className="btn-1">{house.name}</button></Link>
                                    </div>
                                    <button onClick={() => deleteHousehold(house._id)}>Delete</button>
                                </li>)}
                        </ul>
                        ) :
                        (
                            <h3>You don't belong to any groups yet</h3>
                        )
                    }
                   
            </div>
            </div>
 
        <div className="column">
        <div className="card">
            <form>
                <br></br>
                <label>Create your own home: </label>
                <input type="text" 
                id="hname" 
                name="name" 
                placeholder="Household Name" 
                onChange={handleInputChange}/>
                <br/>
                <br></br>
                <input type="submit" 
                value="Create" 
                className="btn" 
                onClick={handleFormSubmit}/>
            </form>
            <br></br>
        </div>
        </div>

        <div className="column">
        <div className="card">
            <h3>Feeling FOMO?</h3>
            <form>
                <label>Join your roommates:</label>
                <input type="text" 
                id="household_id" 
                name="household_id" 
                placeholder="Household ID"
                onChange={handleInputChange}/>
                <br/>
                <br></br>
                <input type="submit" 
                value="Join" 
                className="btn"
                onClick={handleFormSubmit}
                />
                <br></br>
            </form>
        </div>
        </div>
        </div>
   </div>
    )
}

export default HomeScreen;