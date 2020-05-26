import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import API from '../utils/API';

function HomeScreen(props){

    const [households, setHouseholds] = useState([]);
    const [formObject, setFormObject] = useState({});


    const memberData = '5ec5b8615052f61cf80e779d'
   

    useEffect(() => {
        loadHouseholds()
    }, [])

    function loadHouseholds(){
        API.getHouseholds()
        .then(res => 
            {setHouseholds(res.data)})
        .catch( err => console.log(err));
    }

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
            .then(res => loadHouseholds())
            .catch(err => console.log(err))
        }
        else if(formObject.household_id){
            console.log(formObject.household_id)
            API.updateHousehold(formObject.household_id, memberData)
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
       
        <div className="card">
             <div className="card">
                    <h2>Hi USER.USERNAME !</h2>
                    <br></br>
                    {
                        households.length ? (
                            <ul className="households">
                            <p>You currently belong to: </p>
                             { households.map(house => 
                                 <li key={house._id}>
                                    <div className="household">
                                        <Link to={'/household/' + house._id}>{house.name}</Link>
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
 

    <div className="card">
        <form>
            <label>Create your own: </label>
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
   <Footer/>
   </div>
    )
}

export default HomeScreen;