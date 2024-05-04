import React from 'react';
import ListView from '../listview';
import TableView from '../tableview';
import Controller from '../controllers';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import CreateTodoForm from '../creat-todo-form';
import shortid from 'shortid';

class Todos extends React.Component {
    state = {
        todos:[
            {
                id:"kmkmdxdkfd",
                text:"main todo text",
                description:"todo description",
                time:new Date(),
                isComplete: false,
                isSelect: false
            
            },
            {
                id:"kmkmdxdk",
                text:"soton in soton",
                description:"todo description",
                time:new Date(),
                isComplete: false,
                isSelect: false
            
            }
        ],
        isOpenTodoForm: false,
        searchTerm: "",
        view :"list",
        filter: "all"
    }
    toggleSelect=todoId=>{
        const todos=this.state.todos.map(todo=>{
            if(todo.id===todoId){
                todo.isSelect=!todo.isSelect
            }
            return todo
        })
        this.setState({todos})
    }

    toggleComplete = todoId=>{
        const todos=this.state.todos.map(todo=>{
            if(todo.id===todoId){
                todo.isComplete=!todo.isComplete
            }
            return todo
        })
        this.setState({todos})
    }

    handleSearch = value=>{
        this.setState({searchTerm: value})
    }

    createTodo = todo=>{
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.icSelect = false
        this.setState({
            todos:[ todo, ...this.state.todos]
        })
        this.toggleForm()
    }
    toggleForm = todoId=>{
        this.setState({isOpenTodoForm:!this.state.isOpenTodoForm})
    }
    handleFilter = filter=>{
        this.setState({filter: filter})
    }
    changeView = event=>{
        this.setState({view: event.target.value })
    }
    clearSelected =() =>{
        const todos = this.state.todos.filter(todo=> !todo.isSelect)
        this.setState({todos})
    }
    clearCompleted = ()=>{
        const todos = this.state.todos.filter(todo=> !todo.isComplete)
        this.setState({todos})
    }
    reset = ()=>{
        this.setState({
            filter:"all",
            searchTerm:"",
            view:"list",
            isOpenTodoForm:false
        })
    }

    performSearch = ()=>{
        return this.state.todos.filter(todo=>todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    performFilter = (todos)=>{
        const {filter} = this.state
        if(filter === 'completed'){
            return todos.filter(todo=>todo.isComplete)
        }else if(filter === 'running'){
            return todos.filter(todo=> !todo.isComplete)
        }else{
            return todos
        }
    }

    getView =()=>{
        let todos = this.performSearch()
        todos = this.performFilter(todos)
        return this.state.view ==='list' ? (<ListView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete}/>) : (<TableView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete}/>);
    }
    render() {
        return(
            <div>
                <h1 className='display-4 text-center mb=5'>Stack Todos</h1>
                <Controller view={this.state.view} handleFilter={this.handleFilter} changeView={this.changeView} clearSelected={this.clearSelected} clearCompleted={this.clearCompleted} reset={this.reset} toggleForm={this.toggleForm} term={this.state.searchTerm} handleSearch={this.handleSearch}/>

                <div>
                    {this.getView()}
                </div>

                <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>Create New Todo Item</ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo}/>
                    </ModalBody>

                </Modal>
            </div>
        )
    }
}

export default Todos;
