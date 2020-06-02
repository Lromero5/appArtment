import axios from "axios";

export default {
  //Get all households
  getHouseholds: function () {
    return axios.get("/api/households");
  },
  //Get a household with the given id
  getHousehold: function (id) {
    return axios.get("/api/households/" + id);
  },
  //Deletes the household with the given id
  deleteHousehold: function (id) {
    return axios.delete("/api/households/" + id);
  },
  createHousehold: function (householdData) {
    return axios.post("/api/households", householdData);
  },

  // Get a chore with the given household_id
  getChores: function (household_id) {
    console.log(household_id);
    return axios.get("/api/chores");
    // return axios.get("/api/chores/" + household_id);
  },
  //   //Deletes the chore with the given household_id
  deleteChore: function (id) {
    return axios.delete("/api/chores/" + id);
  },

  createChore: function (householdData) {
    return axios.post("/api/chores", householdData);
  },

  updateChore: function (id, completed) {
    return axios.put("/api/chores/" + id, completed);
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
