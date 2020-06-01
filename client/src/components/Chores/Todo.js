import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Chore({ chore, toggleComplete, removeChore }) {
  function handleCheckboxClick() {
    toggleComplete(chore);
  }

  function handleRemoveClick() {
    removeChore(chore._id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={chore.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textdecoration: chore.comnpleted ? "line-through" : null,
        }}
      >
        {chore.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Chore;
