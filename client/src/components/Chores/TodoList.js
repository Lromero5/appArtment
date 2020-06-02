import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

function ChoresList({ context }) {
  const {chores} = context
  return (
    <List>
      {
        !chores ? 
        (<h3> No Chores Added</h3>) :
        (
          chores.map((chore) => (
            <Todo 
              key={chore._id}
              chore={chore}
              context={context}
            />
          ))
        )
      }
    </List>
  );
}

export default ChoresList;
