import axios from 'axios';

export default {
    //Get all households
    getHouseholds: function(){
        return axios.get("/api/households")
    },
    //Get a household with the given id
    getHousehold: function(id){
        return axios.get("/api/households/" + id)
    },
    //Deletes the household with the given id
    deleteHousehold: function(id){
        return axios.delete("/api/households/" + id)
    },
    //Creates a household
    createHousehold: function(householdData){
        return axios.post("/api/households", householdData)
    },
    //Adds a member to a certain household
    updateHousehold: function(id, memberData){
        return axios.put("/api/households/" + id, memberData)
    },
    getMembers: function(id){
        return axios.get("api/users/" + id)
    }
};