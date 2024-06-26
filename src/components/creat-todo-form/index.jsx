import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';


class CreateTodoForm extends React.Component {
    state = {
        text: '',
        description: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo(this.state);
        e.target.reset();
        this.setState({
            text: '',
            description: ''
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="text">Text</Label>
                    <Input type="text" name="text" id="text" placeholder='do some code' value={this.state.text} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" value={this.state.description} onChange={this.handleChange} />
                </FormGroup>
                <Button type="submit">Create Task</Button>
            </Form>
        )
    }

}
CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired,
}

export default CreateTodoForm;
