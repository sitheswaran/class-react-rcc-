import React from 'react'

function Sixth(props) {

    var array=props.nameofstudent;

  return (
    <div>
      {
        array.map((value,index)=>{

          return <div key={index}>
           <h6>{value.studentName}</h6>
           <button onClick={()=>(props.dataofstudents(value))}>click</button>
         
           </div>
        })
      }


    </div>
  )
}

export default Sixth

