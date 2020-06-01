import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ChoresForm({ addChore }) {
  const [chore, setChore] = useState({
    // _id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setChore({ ...chore, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (chore.task.trim()) {
      addChore(chore);
      console.log(chore);
      // reset task input
      setChore(chore);
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        value={chore.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">pollo</Button>
    </form>
  );
}

export default ChoresForm;
