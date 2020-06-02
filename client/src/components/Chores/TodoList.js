import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

function ChoresList({ chores, toggleComplete, removeChore }) {
  return (
    <List>
      {chores.map((chore) => (
        <Todo
          key={chore._id}
          chore={chore}
          toggleComplete={toggleComplete}
          removeChore={removeChore}
        />
      ))}
    </List>
  );
}

export default ChoresList;
