import React from 'react';

class Restaurant extends React.Component {
  

    render(){
        if(!this.props.restaurant){
        return(
            <p>Pas de donnée</p>
        )
            }
            return(
            <div>
                <h2> {this.props.restaurant.title} </h2>
                <p> {this.props.restaurant.content}</p>
                <button onClick={this.handleEdit}> ✏️ </button>
                <button onClick={this.toggleFavorite}> {this.props.note.isFavorite ? '❤️' : '🤍'}</button>
                <button onClick={this.handleDelete}>🗑</button>
            </div>
            
        )
    }
 
}

export default Restaurant;

