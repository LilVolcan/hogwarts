import React from 'react';
import HogCardFront from './HogCardFront';
import HogCardBack from './HogCardBack';



class HogTile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detailsView: false //imageView
        }
    }

    flipTile = () => {
        this.setState({
            detailsView: !this.state.detailsView
        })
    }



    render() {
        if (!this.state.detailsView){
           return < HogCardFront hog={this.props.hog} flipTile={this.flipTile} />
        } else {
            return < HogCardBack hog={this.props.hog} flipTile={this.flipTile} />
        }  
    }
	
}

export default HogTile;