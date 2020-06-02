import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function ChoresForm({ addChore }) {
  const [chore, setChore] = useState({
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
      <Button type="submit">submit</Button>
    </form>
  );
}

export default ChoresForm;
