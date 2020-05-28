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
    getTransactions:  function(id){
        return axios.get(`/api/households/${id}/transaction`)
    },

    createTransaction: function(id, data){
        return axios.post(`/api/households/${id}/transaction`, data)
    }
    
};