import React from 'react'
import Sixth from './Sixth';

function Fiveth() {
    let studentDetails = [
        {
         studentName: "jack",
         studentClass: 6,
         studentSection: "a"
        },
        {
         studentName: "tom",
         studentClass: 6,
         studentSection: "a"
        },
        {
          studentName: "ram",
          studentClass: 6,
          studentSection: "b"
         },{
          studentName: "sam",
          studentClass: 6,
          studentSection: "b"
         },
         {
          studentName: "mani",
          studentClass: 6,
          studentSection: "a"
         }
    ];
  
    const dataes  = (value3) =>{
      console.log(value3);
    }
    
  return (
    <div>
      <Sixth nameofstudent={studentDetails} dataofstudents={dataes} />
    </div>
  )
}

export default Fiveth
