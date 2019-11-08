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