import React from 'react'
import classnames from 'classnames'
import InputWithButton from '../input-with-button'
import { connect } from 'react-redux'
import { editMode, deleteTodo, toggleTodo, editDone } from '../../actions'
import { Todo } from '../../types'

const style = require('./todo-list-item.css')

type MappedProps = {
	onToggleEdited: (id: number) => void
	onToggleCompleted: (id: number) => void
	onDelete: (id: number) => void
	onEditDone: (id: number, text: string) => void
}

type OwnProps = {
	item: Todo
}

type Props = OwnProps & MappedProps

const TodoListItem = (props: Props) => {
	const {
		onToggleEdited,
		onToggleCompleted,
		onDelete,
		onEditDone,
		item
	} = props
	const { id, completed, text, isEdited } = item

	const todoText = (
		<span
			className={classnames([
				style.todo,
				{
					[style.striked]: completed
				}
			])}
			onClick={() => onToggleEdited(id)}
		>
			{text}
		</span>
	)

	const editedTodo = (
		<React.Fragment>
			<InputWithButton
				onSubmit={() => onToggleEdited(id)}
				onTextChange={(text) => onEditDone(id, text)}
				newTodo={{ text, valid: true }}
				buttonLabel="Edit"
			/>
		</React.Fragment>
	)

	return (
		<div className={style.container}>
			<input
				className={style.checkbox}
				type="checkbox"
				checked={completed}
				onChange={() => onToggleCompleted(id)}
			/>
			{!isEdited ? todoText : editedTodo}
			<button className={style.button} onClick={() => onDelete(id)}>
				Delete
			</button>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	onToggleEdited: id => dispatch(editMode(id)),
	onToggleCompleted: id => dispatch(toggleTodo(id)),
	onDelete: id => dispatch(deleteTodo(id)),
	onEditDone: (id, text) => dispatch(editDone(id, text))
})

export default connect(
	null,
	mapDispatchToProps
)(TodoListItem)
