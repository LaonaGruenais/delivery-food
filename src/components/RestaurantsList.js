import React from 'react';
import Restaurant from './Restaurant';

class RestaurantsList extends React.Component {

  render() {
    if(!this.props.restaurants || this.props.restaurants.length < 1) {
        return(
            <p>Aucun restaurant</p>
        )
    }

    return (
        <div>
            {this.props.restaurants.map((restaurant) => {
                return(
                    <Restaurant {... this.props} key={restaurant._id} restaurant={restaurant} />
                )
            })}
        </div>
    )
}
        
}

export default RestaurantsList;
