import React from 'react'
import TodoList from '../todo-list'
import InputWithButton from '../input-with-button'
import { addTodo, typeTodo } from '../../actions'
import { connect } from 'react-redux'
import { NewTodo } from '../../types'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

const style = require('./app.css')

type Props = {
	onSubmit: (text: string) => void
	onTextChange: (text: string) => void
	newTodo: NewTodo
}

const App = (props: Props) => {
	const { onSubmit, onTextChange, newTodo } = props

	return (
		<div className={style.container}>
			<Typography variant="h4" gutterBottom>ToDo List</Typography>
			<InputWithButton
				onSubmit={onSubmit}
				onTextChange={onTextChange}
				newTodo={newTodo}
				IconComponent={<AddIcon />}
			/>
			<TodoList />
		</div>
	)
}

const mapStateToProps = state => ({
	newTodo: state.newTodo
})

const mapDispatchToProps = dispatch => ({
	onSubmit: text => dispatch(addTodo(text)),
	onTextChange: text => dispatch(typeTodo(text))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
