import React from 'react'

class HogCardBack extends React.Component {


    render() {
        const { name, specialty, weight} = this.props.hog;
        let highestMedalAchieved = this.props.hog['highest medal achieved'];

        return (
            <div onClick={this.props.flipTile} className="pigTile">
                <p> Name: {name} </p>
                <p> Specialty: {specialty} </p>
                <p> Weight: {weight} </p>
                <p> Highest Medal Achieved: {highestMedalAchieved} </p>
            </div>
	    )
    }
}

export default HogCardBack