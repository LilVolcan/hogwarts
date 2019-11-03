import React from 'react';
import HogTile from './HogTile';



class HogContainer extends React.Component {
   

    renderHogs = () => {
        return this.props.hogs.map( (hog, i) => {
            return (
                < HogTile key={i} hog={hog} />
            )
        })
    }


    render() {
        return (
            <div className="hog-container">
                { this.renderHogs() }
            </div>
	    )
    }
	
}

export default HogContainer;