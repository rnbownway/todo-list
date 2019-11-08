import React from 'react'
import classnames from 'classnames'
import InputWithButton from '../input-with-button'

const style = require('./todo-list-item.css')

type Props = {
	text: string
	completed: boolean
	isEdited: boolean
	onToggleCompleted: () => void
	onToggleEdited: () => void
	onTextChange: (text: string) => void
	onDelete: () => void
}

const TodoListItem = (props: Props) => {
	const {
		text,
		completed,
		isEdited,
		onToggleCompleted,
		onToggleEdited,
		onTextChange,
		onDelete
	} = props

	const todoText = (
		<span
			className={classnames([
				style.todo,
				{
					[style.striked]: completed
				}
			])}
			onClick={onToggleEdited}
		>
			{text}
		</span>
	)
	
	const editedTodo = (
		<React.Fragment>
			<InputWithButton
				onSubmit={onToggleEdited}
				onTextChange={onTextChange}
				newTodo={{text, valid: true}}
				buttonLabel="Save"
			/>
		</React.Fragment>
	)

	return (
		<div className={style.container}>
			<input
				className={style.checkbox}
				type="checkbox"
				checked={completed}
				onChange={onToggleCompleted}
			/>
			{!isEdited ? todoText : editedTodo}
			<button className={style.button} onClick={onDelete}>
				Delete
			</button>
		</div>
	)
}

export default TodoListItem
