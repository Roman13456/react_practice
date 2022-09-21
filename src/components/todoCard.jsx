import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Trash } from 'react-bootstrap-icons';
import { HiPencil } from 'react-icons/hi';
function TodoCard({todo,index,onDel,onToggle,onEdit}){    
    const {name,desc,isChecked} = todo  
    console.log(onEdit)
    return(
        <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <input type='checkbox' checked={isChecked} onChange={() => onToggle(todo.id)}></input>
                  <Card.Title>{name}</Card.Title>
                  <Button variant="primary" onClick={() => onDel(index)}><Trash /></Button>
                  <Button variant="primary" onClick={()=> onEdit()(index,name,desc)}><HiPencil /></Button>
                </div>
                <Card.Text>
                  {desc}
                </Card.Text>

              </Card.Body>
            </Card>
    )
}
export default TodoCard