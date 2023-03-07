import React, { Component } from 'react'

export default class Eleventh extends Component {
  render() {
    console.log(this.props.nameofname)
    return (
      <div>
         {this.props.nameofname.map((value,index)=>{
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
