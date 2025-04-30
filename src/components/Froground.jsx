import React, { useRef } from 'react'

import Card from './Card';

const Froground = () => {

  let ref=useRef();
 
  const data=[{
     
    text:"this is the colour that we need to display and render dynamically",
    files:"0.9MB",
    isclose:true,
     tag:{isOpen:true , tagTitle:"knock " ,tagColor:"[#00c1f6]"}
  },
  {
     
    text:"this is the colour that we need to display and render dynamically",
    files:"0.9MB",
    isclose:true,
     tag:{isOpen:false , tagTitle:"knock " ,tagColor:"[#ff0057]"}
  },{
     
    text:"this is the colour that we need to display and render dynamically",
    files:"0.9MB",
    isclose:true,
     tag:{isOpen:true , tagTitle:"knock " ,tagColor:"[#ff0057]"}
  },{
     
    text:"this is the colour that we need to display and render dynamically",
    files:"0.9MB",
    isclose:true,
     tag:{isOpen:true , tagTitle:"knock " ,tagColor:"[#00c1f6]"}
  },

] 

  return (
     
    <div ref={ref} className='w-full fixed z-[3] flex  h-screen bg-gray-900/50 '>
    
    {data.map((item,index)=>{
     return <Card data={item} ref={ref} key={index} />
    })}
   
    </div>
  )
}

export default Froground