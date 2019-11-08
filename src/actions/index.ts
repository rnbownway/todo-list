const ADD_TODO = 'ADD_TODO'
const TYPE_TODO = 'TYPE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const EDIT_MODE = 'EDIT_MODE'
const EDIT_DONE = 'EDIT_DONE'

const addTodo = (text: string) => {
	return {
		type: ADD_TODO,
		payload: {
			text
		}
	}
}

const typeTodo = (text: string) => {
    return {
        type: TYPE_TODO,
        payload: {
            text
        }
    }
}

const deleteTodo = (id: number) => {
	return {
		type: DELETE_TODO,
		payload: {
			id
		}
	}
}

const toggleTodo = (id: number) => {
	return {
		type: TOGGLE_TODO,
		payload: {
			id
		}
	}
}

const editMode = (id: number) => {
	return {
		type: EDIT_MODE,
		payload: {
			id
		}
	}
}

const editDone = (id: number, text: string) => {
	return {
		type: EDIT_DONE,
		payload: {
			id,
			text
		}
	}
}

export {
    addTodo,
    typeTodo,
	deleteTodo,
	toggleTodo,
	editMode,
	editDone,
    ADD_TODO,
    TYPE_TODO,
	DELETE_TODO,
	TOGGLE_TODO,
	EDIT_MODE,
	EDIT_DONE
}
