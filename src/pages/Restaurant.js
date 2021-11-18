// Créer une page restaurant qui affiche les détails d'un restaurant
// La page doit également afficher la liste des plats (dishes) :
// - créer un composant liste de plats (DishesList)
// - créer un composant d'élément de liste de plat (DishListItem)
// - créer l'appel d'api pour récupérer les plats d'un restaurant

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DishesList from '../components/DishesList'
import { getDishesByRestaurantId } from '../services/api'

function Restaurant () {
  const [dishes, setDishes] = useState([])
  const { id } = useParams()

  const getData = async () => {
    const dishes = await getDishesByRestaurantId(id)
    setDishes(dishes)
    // Appel de la functon de api.js
    // setDishes(data de l'api)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <h1>Restaurant : {id}</h1>
      <DishesList dishes={dishes} />
    </div>
  )
}

export default Restaurant
