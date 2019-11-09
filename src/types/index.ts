export type Todo = {
	id: number
	text: string
	completed: boolean
	isEdited: boolean
}

export type NewTodo = {
	text: string
	valid: boolean
}

export type Action = {
	type: string
	payload: any
}

export type State = {
	todos: Todo[]
	newTodo: NewTodo
	count: number
}