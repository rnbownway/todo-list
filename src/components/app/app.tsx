import React, { Component } from 'react'
import TodoList from '../todo-list'
import { Todo, NewTodo } from '../../types'
import InputWithButton from '../input-with-button'

const style = require('./app.css')

type State = {
	todos: Todo[]
	count: number
	newTodo: NewTodo
}

export default class App extends Component<{}, State> {
	state = {
		todos: [],
		count: 0,
		newTodo: {
			text: '',
			valid: false
		}
	}

	handleSubmit = (text: string) => {
		this.setState(prevState => {
			const newTodo = {
				id: prevState.count,
				text,
				completed: false,
				isEdited: false
			}

			return {
				todos: [...prevState.todos, newTodo],
				count: prevState.count + 1,
				newTodo: {
					text: '',
					valid: false
				}
			}
		})
	}

	handleChange = (text: string) => {
		this.setState({
			newTodo: {
				text,
				valid: text.trim().length !== 0
			}
		})
	}

	toggleCompleted = (id: number) => {
		this.updateItem(id, { completed: !this.getTodoById(id).completed })
	}

	toggleEdited = (id: number) => {
		this.updateItem(id, { isEdited: !this.getTodoById(id).isEdited })
	}

	handleTextChange = (id: number, text: string) => {
		this.updateItem(id, { text })
	}

	updateItem = (id: number, payload: Partial<Todo>) => {
		const index = this.state.todos.findIndex(item => item.id === id)

		if (index < 0) return

		this.setState(prevState => {
			const updatedTodo = {
				...prevState.todos[index],
				...payload
			}

			return {
				todos: [
					...prevState.todos.slice(0, index),
					updatedTodo,
					...prevState.todos.slice(index + 1)
				]
			}
		})
	}

	getTodoById = (id: number) => {
		return this.state.todos.find(item => item.id === id)
	}

	handleDelete = (id: number) => {
		const index = this.state.todos.findIndex(item => item.id === id)

		if (index < 0) return

		this.setState(prevState => {
			return {
				todos: [
					...prevState.todos.slice(0, index),
					...prevState.todos.slice(index + 1)
				]
			}
		})
	}

	render() {
		return (
			<div className={style.container}>
				<h1>ToDo List</h1>
				<InputWithButton
					onSubmit={this.handleSubmit}
					onTextChange={this.handleChange}
					newTodo={this.state.newTodo}
					buttonLabel="Add"
				/>
				<TodoList
					todos={this.state.todos}
					onToggleCompleted={this.toggleCompleted}
					onToggleEdited={this.toggleEdited}
					onDelete={this.handleDelete}
					onTextChange={this.handleTextChange}
				/>
			</div>
		)
	}
}
