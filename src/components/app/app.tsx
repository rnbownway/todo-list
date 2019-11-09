import React, { useCallback } from 'react'
import TodoList from '../todo-list'
import InputWithButton from '../input-with-button'
import { addTodo, typeTodo } from '../../actions'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { NewTodo, State } from '../../types'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

const style = require('./app.css')

const App = () => {
	const newTodo: NewTodo = useSelector((state: State) => state.newTodo, shallowEqual)
	const dispatch = useDispatch()

	const onSubmit = useCallback((text) => dispatch(addTodo(text)), [dispatch])
	const onTextChange = useCallback((text) => dispatch(typeTodo(text)), [dispatch])

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

export default App
