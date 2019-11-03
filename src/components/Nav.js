import piggy from '../porco.png'
import React from 'react'

class Nav extends React.Component {

	render() {
		return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span><br></br><br></br>
			<button onClick={this.props.filterGreased}>Filter Greasy Piggos</button>
			<button onClick={this.props.sortName}>Sort By Name</button>
			<button onClick={this.props.sortWeight}>Sort By Weight</button>
		</div>
	)
	}
	
}

export default Nav
