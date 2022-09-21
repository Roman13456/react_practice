import React,{forwardRef,useImperativeHandle,useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ModalComp =  forwardRef((props,ref)=> {
    const nameRef = React.createRef()
    const descRef = React.createRef()
    const showModal = () => setModal({ bool: true, mode: 'add' })
    const hideModal = () => setModal({ bool: false, mode: 'add' })
    const [status, setModal] = useState({ bool: false, mode: 'add' })
    useImperativeHandle(ref,()=>({
        hide: ()=> hideModal(),
        show: ()=> showModal(),
        edit: (index,name,desc)=> {
            console.log(index,name,desc)
            setModal({ bool: true, mode: 'edit',idx:index,task:{name,desc}})
        }
    }))
    const editTodo = (index) => {
        // const changedTodo = {
        //     id: Date.now(),
        //     name: nameRef.current.value || 'demo',
        //     desc: descRef.current.value || 'demo_desc',
        //     isCompleted: false
        // }
        props.onSetTodos((todos)=>{
            const todosCopy = [...todos]
            // todosCopy[index].name = nameRef.current.value || 'name_demo'
            // todosCopy[index].desc = descRef.current.value || 'desc_demo'
            todosCopy[index] = Object.assign(todosCopy[index],{name : nameRef.current.value || 'name_demo',desc : descRef.current.value || 'desc_demo'})
            return todosCopy
        })
        hideModal()
    }
    return (
        <Modal show={status.bool} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>{console.log(status)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>enter name and body</p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>header</Form.Label>
                        <Form.Control type="text" className="name" ref={nameRef} placeholder="Enter header" defaultValue={status.mode === 'edit'?status.task.name:'' }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>description</Form.Label>
                        <Form.Control type="textarea" className="desc" ref={descRef} placeholder="Enter description" defaultValue={status.mode === 'edit'?status.task.desc:''}/>
                    </Form.Group>
                    <Button variant="primary" onClick={status.mode === 'add' ?()=> props.onSubmit(nameRef.current.value,descRef.current.value) : () => editTodo(status.idx)}>
                        {status.mode === 'add' ? 'Add' : 'Edit'} 
                    </Button>{/*onClick={status.mode === 'add' ? props.createTodo : () => editTodo(status.idx)}*/}
                </Form>
            </Modal.Body>
        </Modal>
    )
})
export default ModalComp