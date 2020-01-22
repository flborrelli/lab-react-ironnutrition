import React, { Component } from 'react';

class FoodBox extends Component {
  constructor(props){
    super(props)



  }

  render(){
    console.log(this.props.foodsProps[1])
    return(
      <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.foodsProps.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.foodsProps.name}</strong> <br />
          <small>{this.props.foodsProps.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value="1"
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
  }

}

export default FoodBox;