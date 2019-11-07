import React, { Component } from 'react'
import TodoAddForm from '../todo-add-form'
import TodoList from '../todo-list'
import { Todo } from '../../types'

const style = require('./app.css')

type State = {
	todos: Todo[]
	count: number
}

export default class App extends Component<{}, State> {
	state = {
		todos: [],
		count: 0
	}

	handleSubmit = (text: string) => {
		this.setState(prevState => {
			const newTodo = { id: prevState.count, text, completed: false }

			return {
				todos: [...prevState.todos, newTodo],
				count: prevState.count + 1
			}
		})
	}

	handleToggle = (id: number) => {
		const index = this.state.todos.findIndex(item => item.id === id)

		if (index < 0) return

		this.setState(prevState => {
			const toggledTodo = {
                ...prevState.todos[index],
                completed: !prevState.todos[index].completed
            }
            
			return {
				todos: [
					...prevState.todos.slice(0, index),
                    toggledTodo,
                    ...prevState.todos.slice(index+1)
				]
			}
		})
	}

	render() {
		return (
			<div className={style.container}>
				<h1>ToDo List</h1>
				<TodoAddForm onSubmit={this.handleSubmit} />
				<TodoList todos={this.state.todos} onToggle={this.handleToggle} />
			</div>
		)
	}
}
