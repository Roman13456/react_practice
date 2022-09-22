import React,{forwardRef,useImperativeHandle,useState} from "react";
import {useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createTodo,editTodo } from "../counterSlice";
const ModalComp =  forwardRef((props,ref)=> {
    const dispatch = useDispatch()
    const nameRef = React.createRef()
    const descRef = React.createRef()
    const showModal = () => setModal({ bool: true, mode: 'add' })
    const hideModal = () => setModal({ bool: false, mode: 'add' })
    const [status, setModal] = useState({ bool: false, mode: 'add' })
    useImperativeHandle(ref,()=>({
        show: ()=> showModal(),
        edit: (index,name,desc)=> {
            console.log(index,name,desc)
            setModal({ bool: true, mode: 'edit',idx:index,task:{name,desc}})
        }
    }))
    const onSubmit = ()=>{
        dispatch(
            createTodo({
                name:nameRef.current.value,
                desc:descRef.current.value
            })
        )
        hideModal()
    }
    const onEdit = ()=>{
        dispatch(
            editTodo({
                id:status.idx,
                body:{
                    name:nameRef.current.value,
                    desc:descRef.current.value,
                }
            })
        )
        hideModal()
    }
    return (
        <Modal show={status.bool} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>{console.log(status)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>enter name and description</p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>header</Form.Label>
                        <Form.Control type="text" className="name" ref={nameRef} placeholder="Enter header" defaultValue={status.mode === 'edit'?status.task.name:'' }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>description</Form.Label>
                        <Form.Control type="textarea" className="desc" ref={descRef} placeholder="Enter description" defaultValue={status.mode === 'edit'?status.task.desc:''}/>
                    </Form.Group>
                    <Button variant="primary" onClick={status.mode === 'add' ?()=> onSubmit(nameRef.current.value,descRef.current.value) : () => onEdit()}>
                        {status.mode === 'add' ? 'Add' : 'Edit'} 
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
})
export default ModalComp