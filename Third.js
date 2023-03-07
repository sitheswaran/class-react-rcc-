import React from 'react'
import Fourth from "./Fourth"
const Third = () => {
    let employees = [ { "id": 11, "name":"Abhinav", "salary":75000 },
     { "id": 2131, "name":"Gaurav", "salary":62000 },
     { "id": 3012, "name":"Raj", "salary":32000 }]
 


     const   date =(value2)=> {

        console.log(value2)
     }
    
  return (
    <div>
      <Fourth nameofobject={employees} nameofvalue={date} />
    </div>
  )
}

export default Third
