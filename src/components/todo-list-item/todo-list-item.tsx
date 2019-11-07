import React, { Component } from 'react'

const style = require('./todo-list-item.css')

type Props = {
	text: string
	completed: boolean
	onToggle: () => void
}

export default (props: Props) => {
	const { text, completed, onToggle } = props

	const todoText = completed ? (
		<s>
			<span className={style.todo} onClick={onToggle}>
				{text}
			</span>
		</s>
	) : (
		<span className={style.todo} onClick={onToggle}>
			{text}
		</span>
	)

	return (
		<div className={style.container}>
			{todoText}
			<button className={style.delete}>Delete</button>
		</div>
	)
}
