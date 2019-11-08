import React from 'react'
import classnames from 'classnames'
import InputWithButton from '../input-with-button'
import { connect } from 'react-redux'
import { editMode, deleteTodo, toggleTodo, editDone } from '../../actions'
import { Todo } from '../../types'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

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
		<Typography
			variant="body1"
			gutterBottom
			className={classnames([
				style.todo,
				{
					[style.striked]: completed
				}
			])}
			onClick={() => onToggleEdited(id)}
		>
			{text}
		</Typography>
	)

	const editedTodo = (
		<React.Fragment>
			<InputWithButton
				onSubmit={() => onToggleEdited(id)}
				onTextChange={text => onEditDone(id, text)}
				newTodo={{ text, valid: true }}
				IconComponent={<SaveIcon />}
			/>
		</React.Fragment>
	)

	return (
		<div className={style.container}>
			<Checkbox
				className={style.checkbox}
				checked={completed}
				color="primary"
				onChange={() => onToggleCompleted(id)}
			/>
			{!isEdited ? todoText : editedTodo}
			<IconButton onClick={() => onDelete(id)}>
				<DeleteIcon />
			</IconButton>
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
