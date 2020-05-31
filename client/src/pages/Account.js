import React, { useState, useEffect }  from "react";
import Members from "../components/Members";
import Finance from "../components/Finance/Finance";
import Chores from "../components/Chores/Chores";
import { useParams } from "react-router-dom";
import API from '../utils/API';
import { GlobalProvider } from "../components/Finance/context/globalState";

function Account(props){

    const [household, setHousehold] = useState({});
    const {id} = useParams([]) //Household ID the user belongs to

    const houseID = props.match.params.id;

    useEffect(() => {
        loadHousehold(id);
    }, [])


    function loadHousehold(id){
        API.getHousehold(id)
        .then(res => 
            {setHousehold(res.data)})
        .catch(err => console.log(err));
    }

  
    return(
        <div className="group">
        <div className="data">
        <h1 className="text">Welcome to: {household.name}</h1>
        <h1 className="text">Your home ID is: {household._id}</h1>
        </div>
        <div className="row">
        <GlobalProvider houseID={houseID}>
        <br></br>

        <div className="column">
        <div className="card">
        <div className="households">
        <Members household={household}/>
        </div>
        </div>
        </div>

        <div className="column">
        <div className="card">
        <Chores/>
        </div>
        </div>

        <div className="column">
        <div className="card">
        <Finance/>
        </div>
        </div>
        </GlobalProvider>
    </div>
    </div>
  );
}

export default Account;