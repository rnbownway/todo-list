import React, { Fragment } from 'react'
import TodoListItem from '../todo-list-item'
import { connect } from 'react-redux'
import { Todo } from '../../types'

type Props = {
	todos: Todo[]
}

const TodoList = (props: Props) => {
	const { todos } = props

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

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps)(TodoList)
