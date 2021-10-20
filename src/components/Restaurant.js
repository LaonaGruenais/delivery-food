import React from 'react'

class Restaurant extends React.Component {
  // getImagerestaurantsrant() {
  //   this.props.restaurants.Photos[0].url;
  //   https://strapi.myidea.fr/{id}/uploads/
  // }

  render () {
    const { restaurant } = this.props
    if (!restaurant) {
      return (
        <p>Pas de données</p>
      )
    }
    return (
      <div className='card-restaurants'>
        {restaurant.Photos &&
          <img src={`https://strapi.myidea.fr/${restaurant.Photos[0].url}`} />}
        <h3 className='title-restaurantsrant'>{restaurant.name}</h3>
        <p className='content-restaurantsrant'>{restaurant.description}</p>
      </div>
    )
  }
}

export default Restaurant
