import React from 'react'
import { NewTodo } from '../../types'

const style = require('./input-with-button.css')

type Props = {
	onSubmit: (text: string) => void
	onTextChange: (text: string) => void
	newTodo: NewTodo
	buttonLabel: string
}

const InputWithButton = (props: Props) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	
		props.onSubmit(props.newTodo.text.trim().replace(/\s+/g, ' '))
	}
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const text = event.target.value
		props.onTextChange(text)
	}

	return (
		<form className={style.container} onSubmit={handleSubmit}>
			<input
				className={style.input}
				type="text"
				placeholder="type here"
				onChange={handleChange}
				value={props.newTodo.text}
			/>
			<button type="submit" disabled={!props.newTodo.valid}>
				{props.buttonLabel}
			</button>
		</form>
	)
}

export default InputWithButton