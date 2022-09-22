import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Trash } from 'react-bootstrap-icons';
import { HiPencil } from 'react-icons/hi';
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from "../counterSlice";

function TodoCard({ todo, onEdit }) {
  const dispatch = useDispatch()
  const { name, desc, isChecked } = todo
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <input type='checkbox' id='checkbox' style={{marginRight:'5px'}} checked={isChecked} onChange={() => dispatch(toggleTodo(todo.id))}></input>
            <label for='checkbox'>{name}</label>
            </div>
          <div>
            <Button variant="primary" style={{marginRight:'5px'}} onClick={() => dispatch(deleteTodo(todo.id))}><Trash /></Button>
            <Button variant="primary" onClick={() => onEdit()(todo.id, name, desc)}><HiPencil /></Button>
          </div>
        </div>
        <Card.Text style={{textAlign:'center'}}>
          {desc}
        </Card.Text>

      </Card.Body>
    </Card>
  )
}
export default TodoCard