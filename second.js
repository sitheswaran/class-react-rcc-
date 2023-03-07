import React from 'react'

const second = (props) => {
  var names= props.nameofobject;
  
    // const output = () => {
    //     const obj = props. nameofobject.filter(function (time) {
    //       return time.duration <120;
    //     });
    //     console.log(obj);
    //   };
    //   const output1 = () => {
    //     const obj = props. nameofobject.filter(function (time) {
    //       return time.duration <60;
    //     });
    //     console.log(obj);
    //   };
    //   const output2 = () => {
    //     const obj = props. nameofobject.filter(function (time) {
    //       return time.duration <240;
    //     });
    //     console.log(obj);
      // };
  return (
    <div className='button-header' style={{marginTop: "-131px;"}}>

    {
        names.map((value,index)=>{
          return <div key={index}> 
            <h2>{value.name}</h2>
          
          <button>click</button>
          </div>
         }
        )
      }
      {/* <button onClick={output} style={{marginTop:"10px" ,backgroundColor:"red",padding:"5px 20px 5px 20px",borderRadius:"20px"}}>Click </button><br/> */}
      {/* <button onClick={output1}style={{marginTop:"10px",backgroundColor:"skyblue",padding:"5px 20px 5px 20px",borderRadius:"20px"}}>Click</button><br/> */}
      {/* <button onClick={output2}style={{marginTop:"10px",backgroundColor:"pink",padding:"5px 20px 5px 20px",borderRadius:"20px"}}>Click</button> */}
    </div>
  )   
}

export default second;
