import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup'

function Chore({ chore, context}) {
  const {updateChore, removeChore} = context

  function handleCheckboxClick() {
    // toggleComplete(chore);
  }

  function handleRemoveClick() {
    removeChore(chore._id);
  }

  return (
    <Form>
      <Form.Group>
        <InputGroup>
          <InputGroup.Prepend>
            <Form.Check type="checkbox"/>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            readonly
            value={chore.task}
          />
        </InputGroup>
      </Form.Group>
    </Form>
    // <ListItem style={{ display: "flex" }}>
    //   <Checkbox checked={chore.completed} onClick={handleCheckboxClick} />
    //   <Typography
    //     variant="body1"
    //     style={{
    //       textdecoration: chore.comnpleted ? "line-through" : null,
    //     }}
    //   >
    //     {chore.task}
    //   </Typography>
    //   <IconButton onClick={handleRemoveClick}>
    //     <CloseIcon />
    //   </IconButton>
    // </ListItem>
  );
}

export default Chore;
