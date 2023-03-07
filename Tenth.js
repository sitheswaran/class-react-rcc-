import React, { Component } from 'react'
import Eleventh from "./Eleventh"

export default class Tenth extends Component {
  render() {
    var name = [
        {
          name: "Write for Envato Tuts+",  duration: 120
        },
        {
          name: "Work out",duration: 60
        },
        {
          name: "Procrastinate on Duolingo", duration: 240
        },
      ];

var data=(value2)=>{
    console.log(value2)
    let result=name.filter((number)=>{
        return number.duration<value2.duration;
    })
  console.log(result)
}
    return (
      <div>
        <Eleventh  nameofname={name} nameofobj={data}/>
      </div>
    )
  

}
}
