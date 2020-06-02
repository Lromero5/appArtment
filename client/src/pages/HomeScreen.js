import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import CardDeck from "react-bootstrap/CardDeck";
import { HouseholdConsumer } from "../utils/HouseholdProvider";
import { CreateHousehold } from "../components/CreateHousehold";
import { JoinHousehold } from "../components/JoinHousehold";
import { HouseholdList } from "../components/HouseholdList";

function HomeScreen(props) {
  return (
    <HouseholdConsumer>
      {(context) => {
        return (
          <CardDeck>
            <HouseholdList context={context} />
            <CreateHousehold context={context} />
            <JoinHousehold context={context} />
          </CardDeck>
        );
      }}
    </HouseholdConsumer>
  );
}

export default HomeScreen;
