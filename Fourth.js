import React from 'react'

const Fourth = (props) => {
    
      var array=props.nameofobject;

  return (
    <div>
      {
        array.map((value,index)=>{
            return <div key={index}>
            <h3>{value.name}</h3>
                <h2>{value.id}</h2>
                <button onClick={()=>props.nameofvalue(value)}>click</button>
</div>
        })
      }
    </div>
  )
}

export default Fourth
