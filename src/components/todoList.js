import React, { useState,useRef } from "react";
import TodoCard from "./todoCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalComp from "./Modal";
import Layout from "../pages/breadCrumps";
function TodoList() {
    
    const [todos, setTodos] = useState([])
    
    class Todo{
        constructor(name='demo',desc='desc_demo',id,isCompleted=false){
            this.id = id || Date.now();
            this.name = name || 'demo';
            this.desc = desc || 'desc_demo';
            this.isCompleted = isCompleted
        }
    }
    
    const createTodo = (name,desc) => {
        setTodos((todos)=>[...todos,new Todo(
            name,desc
        )])
        handleHide()
    }
    const toggleTodo = (id) => {
        const index = todos.findIndex((e)=>e.id===id)
        const todosCopy = [...todos]
        todosCopy[index].isCompleted=!(todosCopy[index].isCompleted)
        setTodos(todosCopy)
        // setTodos((todos)=>{
        //     const todosCopy = [...todos]
        //     todosCopy[index].isCompleted=!(todosCopy[index].isCompleted)
        //     return todosCopy
        // })
    }
    const delTodo = (index) => {
        const todosCopy = [...todos]
        todosCopy.splice(index, 1)
        setTodos(todosCopy)
    }
    const addModalRef = useRef()
    const handleShow = ()=>addModalRef.current.show()
    const handleHide = ()=>addModalRef.current.hide()
    const handleEdit = ()=>{
        return addModalRef.current.edit
    }
    return (
        <div>
            <Layout />
            <Card style={{ width: '80%', margin: '0 auto' }}>
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>All tasks</Card.Title>
                    <Button variant="primary" onClick={handleShow}>add task</Button>
                </Card.Body>
                <ModalComp ref={addModalRef} onSubmit={createTodo} onSetTodos={setTodos}/>
                {/* <TodoList todos={todos} setModal={setModal} delTodo={delTodo}/> */}
                <div>
                    {todos.map((todo, index) => {
                        return (
                            <TodoCard onEdit={handleEdit} onToggle={toggleTodo} onDel={delTodo} todo={todo} key={index} index={index}/>
                        )
                    })}
                </div>
            </Card>
        </div>

    );
}
export default TodoList