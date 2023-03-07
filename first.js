import React from 'react'
import Second from "./second";

const first = () => {
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
      var tranfer;

  return (
    <div >
      {/* <h6 className='para' > {tranfer=name.map((value)=><h6>{value.name}</h6>) }</h6> */}
      <Second nameofobject={name}/>
    </div>
  )
}

export default first


