import {
    ADD_TODO,
    TYPE_TODO,
	DELETE_TODO,
	TOGGLE_TODO,
	EDIT_MODE,
	EDIT_DONE
} from '../actions'
import { Action, State } from '../types'

const initialState: State = {
	todos: [
		{
			id: 1,
			text: 'do something',
			completed: false,
			isEdited: false
		}
	],
	newTodo: {
		text: '',
		valid: false
	},
	count: 100
}

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [
					...state.todos,
					{
						id: state.count + 1,
						text: action.payload.text,
						completed: false,
						isEdited: false
					}
				],
				newTodo: {
					text: '',
					valid: false
                },
                count: state.count + 1
            }
        case TYPE_TODO:
            return {
                todos: state.todos,
                newTodo: {
                    text: action.payload.text,
                    valid: true
                },
                count: state.count
            }
		case DELETE_TODO:
			const id: number = action.payload.id
			return {
				...state,
				todos: state.todos.filter(item => item.id !== id)
			}
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(item => {
					return item.id === action.payload.id
						? { ...item, completed: !item.completed }
						: item
				})
			}
		case EDIT_MODE:
			return {
				...state,
				todos: state.todos.map(item => {
					return item.id === action.payload.id
						? { ...item, isEdited: !item.isEdited }
						: item
				})
			}
		case EDIT_DONE:
			return {
				...state,
				todos: state.todos.map(item => {
					return item.id === action.payload.id
						? {
								...item,
								text: action.payload.text
						  }
						: item
				})
			}
		default:
			return state
	}
}

export default reducer
