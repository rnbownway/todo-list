import React, { Component } from 'react'
import TodoListItem from '../todo-list-item'
import { Todo } from '../../types'

type Props = {
	todos: Todo[]
	onToggle: (id: number) => void
	onDelete: (id: number) => void
}

const TodoList = (props: Props) => {
	const { todos, onToggle, onDelete } = props

	const items = todos.map(item => {
		const { id, ...itemProps } = item
		return (
			<li key={id}>
				<TodoListItem
					onToggle={() => onToggle(id)}
					onDelete={() => onDelete(id)}
					{...itemProps}
				/>
			</li>
		)
	})

	return <ul>{items}</ul>
}

export default TodoList
