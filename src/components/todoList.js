import React, { useState,useRef } from "react";
import TodoCard from "./todoCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalComp from "./Modal";
import Layout from "../pages/breadCrumps";
import {useSelector} from 'react-redux'
function TodoList() {
    const todos = useSelector(state=>state.todoList.value)
    const addModalRef = useRef()
    const handleShow = ()=>addModalRef.current.show()
    const handleEdit = ()=>{
        return addModalRef.current.edit
    }
    // console.log(handleEdit)
    return (
        <div>
            <Layout />
            <Card style={{ width: '80%', margin: '0 auto' }}>
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>All tasks</Card.Title>
                    <Button variant="primary" style={{margin:'0'}} onClick={handleShow}>add task</Button>
                </Card.Body>
                <ModalComp ref={addModalRef}/>
                {/* <TodoList todos={todos} setModal={setModal} delTodo={delTodo}/> */}
                <div>
                    {todos.map((todo, index) => {
                        return (
                            <TodoCard onEdit={handleEdit} todo={todo} key={index}/>
                        )
                    })}
                </div>
            </Card>
        </div>

    );
}
export default TodoList