import React from 'react';
import {Button, Input, Table} from 'reactstrap';
import PropTypes from 'prop-types';

const RowItem = ({todo, toggleSelect, toggleComplete})=>(
    <tr>
        <th scope='row'>
            <Input type='checkbox' id={todo.id} checked ={todo.isSelect} onChange={()=>toggleSelect(todo.id)}/>

        </th>
        <th>
            {todo.time.toDateString()}
        </th>
        <th>
            <Button color={todo.isComplete ? 'danger' : 'success'} onClick={()=>toggleComplete(todo.id)} >
                {todo.isComplete ? 'Complete' : 'Running'}
            </Button>
        </th>
    </tr>
)

RowItem.prototype ={
    todo:PropTypes.array.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired,
} 


const TableView =({todos, toggleSelect, toggleComplete})=>(
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todos.map((todo)=>(
                <RowItem key={todo.id} todo={todo} toggleSelect={toggleSelect} toggleComplete={toggleComplete}/>
            ))}
        </tbody>
    </Table>
)

TableView.prototype ={
    todos:PropTypes.array.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired,
} 

export default TableView;