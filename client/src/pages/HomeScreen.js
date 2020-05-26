import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import API from '../utils/API';
import AuthService from '../Services/AuthService'


function HomeScreen(props){

    const [households, setHouseholds] = useState([]);
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadHouseholds()
    }, [])

    function loadHouseholds(){
        API.getHouseholds()
        .then(res => 
            setHouseholds(res.data))
        .catch( err => console.log(err));
    }

    function testAuth(){
        AuthService.isAuthenticated()
        .then(res => {
           console.log('WE GOT REST from auth test',res)
        })
        .catch( err => console.log('WE GOT AN ERR Auth test', err));
    }
    

    function handleInputChange(event){
        const {name, value} = event.target;
        setFormObject({...formObject, [name]: value})
    }


    function handleFormSubmit(event){
        event.preventDefault();
        console.log("working")
        if(formObject.name){
            API.createHousehold({
                name: formObject.name
            })
            .then(res => loadHouseholds())
            .catch(err => console.log(err))
        }
    }

    return(
       
        <div>
             <div className="profile-info">
                <h2>Hi! User.name</h2>
                    <p>You currently belong to:</p>
                        <ul className="households">
                             { households.map(house => 
                                 <li key={house._id}>
                                    <div className="household">
                                        <Link to={'/household/' + house._id}>{house.name}</Link>
                                    </div>
                                    
                                    <br></br>
                                </li>)}
                        </ul>
            </div>
 

    <div className="create">
        <form>
            <label>Create your own: </label>
            <input type="text" 
            id="hname" 
            name="name" 
            placeholder="Household Name" 
            onChange={handleInputChange}/>
            <br/>
            <input type="submit" 
            value="Create" 
            className="btn btn-warning" 
            onClick={handleFormSubmit}/>
            <br/>
        </form>
    </div>
    <br></br>

    <div className="join">
            <h3>Feeling FOMO?</h3>
            <form>
            <label>Join your roommates:</label>
            <input type="text" 
            id="hname" 
            name="name" 
            placeholder="Household name"
            onChange={handleInputChange}/>
            <br/>
            <input type="submit" 
            value="Join" 
            className="btn btn-warning"
            onClick={handleFormSubmit}/>
        </form>
        <br/>
        <hr/>
    </div>
    <button onClick={testAuth}>AUTH TEST BUTTON!!</button>
   <Footer/>
   </div>
    )
}

export default HomeScreen;