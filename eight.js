import React, { Component } from 'react'
import  Nineth from "./nineth"

export default class eight extends Component {
  render() {
    let employees = [ { "id": 11, "name":"Abhinav", "salary":75000 }, { "id": 2131, "name":"Gaurav", "salary":62000 }, { "id": 3012, "name":"Raj", "salary":32000 }]
   
   
   var data=(value2)=>{
    console.log(value2)
    let result=employees.filter((number)=>
    {
     return number.salary<value2.salary;   
    })
    console.log(result)
   }
   

   
   
    return (
      <div>

        <Nineth  nameofemploye={employees} nameofobj={data}/>
      </div>
    )
  }
}
