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
    createHousehold: function(householdData){
        return axios.post("/api/households", householdData)
    },
//newcode 
login: function (userData) {
    return axios.post("api/users/login", userData);
},
signup: function (userData) {
    return axios.post("api/users/signup", userData);
},
isAuth: function (_id) {
    return axios.get("api/users/" + _id);
},
logout: function () {
    return axios.get("api/users/logout");
},

};