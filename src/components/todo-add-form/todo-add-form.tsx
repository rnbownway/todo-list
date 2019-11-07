import React, { Component } from 'react'

const style = require('./todo-add-form.css')

type Props = {
	onSubmit: (text: string) => void
}

type State = {
	text: string
	valid: boolean
}

export default class TodoAddForm extends Component<Props, State> {
	state = {
		text: '',
		valid: false
	}

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		this.props.onSubmit(
			this.state.text
				.trim()
				.replace(/\s+/g,' ')
		)

		this.setState({
			text: '',
			valid: false
		})
	}

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const text = event.target.value
		this.setState({
			text,
			valid: text.trim().length !== 0
		})
	}

	render() {
		return (
			<form className={style.container} onSubmit={this.handleSubmit}>
				<input
					className={style.input}
					type="text"
					placeholder="type here"
					onChange={this.handleChange}
					value={this.state.text}
				/>
				<button type="submit" disabled={!this.state.valid}>
					Add
				</button>
			</form>
		)
	}
}
