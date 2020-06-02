import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import MultiSelect from "@khanacademy/react-multi-select";

function ChoresForm({context}) {
  const {addChore, members} = context
  const blankForm = {
    task: "",
    completed: false,
    users:[]
  };

  const [chore, setChore] = useState(blankForm);

  function handleChange({name, value}) {
    setChore({ ...chore, [name]: value });
  }

  function handleSubmit() {
    if (chore.task.trim()) {
      addChore(chore);
      //console.log(chore);
      // reset task input
      setChore(blankForm);
    }
  }

  function handleAddMember(e){
    console.log(e);
  }

  function getUserList() {
    if (!members) {
      console.log("no members");
      return [];
    }
    
    const mList = members.map(member =>{
            return {label: member.displayName, value: member._id}
          })
    console.log(mList);
    return mList
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Task</Form.Label>
        <Form.Control name="task" type="text" 
          onChange={(e) => handleChange(e.target)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Assign to member</Form.Label>
        <MultiSelect
          options={getUserList()}
          onChange={handleAddMember}
          selected={chore.users}
          onSelectedChanged={users => setChore({ ...chore, users})}
        />
      </Form.Group>
      <Button onClick={handleSubmit} >Submit</Button>
    </Form>
  );
}

export default ChoresForm;
