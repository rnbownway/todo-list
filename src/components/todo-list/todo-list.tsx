import React, { Fragment } from 'react'
import TodoListItem from '../todo-list-item'
import { Todo } from '../../types'

type Props = {
	todos: Todo[]
    onToggleCompleted: (id: number) => void
    onToggleEdited: (id: number) => void
    onTextChange: (id: number, text: string) => void
	onDelete: (id: number) => void
}

const TodoList = (props: Props) => {
	const { todos, onToggleCompleted, onToggleEdited, onTextChange, onDelete } = props

	const items = todos.map(item => {
		const { id, ...itemProps } = item
		return (
			<Fragment key={id}>
				<TodoListItem
                    onToggleCompleted={() => onToggleCompleted(id)}
                    onToggleEdited={() => onToggleEdited(id)}
                    onTextChange={(text) => onTextChange(id, text)}
					onDelete={() => onDelete(id)}
					{...itemProps}
				/>
			</Fragment>
		)
	})

	return <div>{items}</div>
}

export default TodoList
