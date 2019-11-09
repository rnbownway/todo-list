import React, { Fragment } from 'react'
import TodoListItem from '../todo-list-item'
import { useSelector, shallowEqual } from 'react-redux'
import { Todo, State } from '../../types'

const TodoList = () => {
	const todos: Todo[] = useSelector((state: State) => state.todos, shallowEqual)

	const items = todos.map(item => {
		const { id } = item
		return (
			<Fragment key={id}>
				<TodoListItem item={item} />
			</Fragment>
		)
	})

	return <div>{items}</div>
}

export default TodoList
