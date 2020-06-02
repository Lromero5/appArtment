import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Card from 'react-bootstrap/Card'

function Chores(props) {
  const [chores, setChores] = useState([]);





  useEffect(() => {
    API.getChores("5ecc800d2c0155578876c0bc")
      .then((res) => {
        setChores(res.data);
      })
      .catch((err) => console.log(err));

 
  }, []);



  function addChore(chore) {
    API.createChore(chore);
    setChores([chore, ...chores]);
  }

  function toggleComplete(chore) {
    setChores(
      chores.map((element) => {
        if (element._id === chore._id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
    API.updateChore(chore._id, {
      ...chore,
      completed: !chore.completed,
    });
  }
  function removeChore(id) {
    setChores(chores.filter((chore) => chore._id !== id));
    API.deleteChore(id);
  }

  return (
    <Card>
      <Card.Header>Add Chores</Card.Header>
      <Card.Body>
      <TodoForm addChore={addChore} />
      <TodoList
        chores={chores}
        toggleComplete={toggleComplete}
        removeChore={removeChore}
      />
      </Card.Body>
    
    </Card>
  );
}

export default Chores;
