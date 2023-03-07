import React, { Component } from 'react'

export default class nineth extends Component {
  render() {
      console.log(this.props.nameofemploye)
    return (
      <div>
        {this.props.nameofemploye.map((value,index)=>{
            return <div key={index}>
                <h2>{value.name}</h2>
                <button onClick={()=>this.props.nameofobj(value)}>click</button>
          </div>
        }
        )}
        

      </div>
    )
  }
}
