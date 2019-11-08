import React, { ReactElement } from 'react'
import { NewTodo } from '../../types'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'

const style = require('./input-with-button.css')

type Props = {
	onSubmit: (text: string) => void
	onTextChange: (text: string) => void
	newTodo: NewTodo
	IconComponent: ReactElement
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

	const { IconComponent } = props

	return (
		<form className={style.container} onSubmit={handleSubmit}>
			<TextField
				className={style.input}
				placeholder="type here"
				onChange={handleChange}
				value={props.newTodo.text}
			/>
			<IconButton type="submit" disabled={!props.newTodo.valid}>
				{IconComponent}
			</IconButton>
		</form>
	)
}

export default InputWithButton
