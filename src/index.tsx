import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	render() {
		return (
			<div>
				<h1>To Do</h1>
				<span>List</span>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
