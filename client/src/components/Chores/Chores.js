import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";


function Chores(props) {
  const [chores, setChores] = useState([]);

  const {id} = useParams(); //household ID

  // console.log(id)

  useEffect(() => {
    API.getChores("5ecc800d2c0155578876c0bc")
      .then((res) => {
        console.log(res.data);
        setChores(res.data);
      })
      .catch((err) => console.log(err));

    // if (storageTodos) {
    //   setTodos(storageTodos);
    // }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

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
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        Chores
      </Typography>
      <TodoForm addChore={addChore} />
      <TodoList
        chores={chores}
        toggleComplete={toggleComplete}
        removeChore={removeChore}
      />
    </div>
  );
}

export default Chores;
