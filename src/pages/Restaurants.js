import React from 'react';
import { getRestaurants } from '../services/api';

class Restaurants extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          restaurants:[],
        }
    }

componentDidMount(){
    this.getData()
}

getData = async () =>{
await getRestaurants()
}

  render() {
    return <p>RESTAURANTS</p>;
  } 
}

export default Restaurants;
