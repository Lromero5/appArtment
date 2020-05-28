import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import API from '../utils/API';
// import AuthService from '../Services/AuthService'


function HomeScreen(props){

    const [households, setHouseholds] = useState([]);
    const [household, setThisHousehold] = useState([]);
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadHouseholds()
        getThisHousehold()
    }, [])

    function loadHouseholds(){
        API.getHouseholds()
        .then(res => {
            console.log(res);
            setHouseholds(res.data)})
        .catch( err => console.log(err));
    }

    
    function getThisHousehold(){
        
        API.getHousehold("5ec734becc6ff0002aa496fb")
        .then(res => { 
            console.log(res.data); 
            setThisHousehold(res.data)
        })
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
   
   <Footer/>
   </div>
    )
}

export default HomeScreen;