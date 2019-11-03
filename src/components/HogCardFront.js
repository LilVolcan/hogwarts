import React from 'react';

class HogCardFront extends React.Component {
    

    
    render() {
        const { name, imgURL } = this.props.hog
        return (
            <div onClick={this.props.flipTile} className="pigTile">
                <img src={imgURL} alt={name} />
                <p>{name}</p>
            </div>
        )
    }
    
}

export default HogCardFront;

