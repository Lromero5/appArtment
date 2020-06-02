import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import  Card  from "react-bootstrap/Card";


function Chores({context}) {
  
  return (
    <Card>
      <Card.Header>
        Chores
      </Card.Header>
      <Card.Body>
        <TodoForm context={context} />
        <TodoList context={context} />
      </Card.Body>
    </Card>
  );
}

export default Chores;
