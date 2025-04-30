import React from 'react'
import { LuFileSliders } from "react-icons/lu";
import { MdDownloadForOffline } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { motion } from "motion/react"

const Card = ( {data,ref}) => {
  return (
    < motion.div whileDrag={{scale:1.2}} dragConstraints={ref} drag className='w-[17vw] overflow-hidden   rounded-[50px] flex relative  items-start justify-between flex-col m-[20px] bg-black text-white h-[40vh]'>

    <LuFileSliders className=' text-[4vh] mt-[20px] mx-[25px]' />
   <div className=' absolute mx-[25px]  text-[2.5vh] top-[70px]'> {data.text}</div>
   <div className='w-full p-[20px] absolute flex justify-between items-center bottom-[40px]' > 
   <div>{data.files} </div>
   
   {data.isclose ?   <MdDownloadForOffline  className=' text-[4vh]' /> :<CiCircleRemove className=' text-[4vh]' /> }
   </div>

   {data.tag.isOpen && <div className={` absolute bottom-0 flex items-center justify-center text-black    font-[700] p-[20px]  w-[100%]  h-[50px] ${data.tag.tagColor==="[#ff0057]" ? " bg-[#ff0057]" :"bg-[#00c1f6]"}`}>    
        {data.tag.tagTitle}
       </div>}


    </motion.div>
  )
}

export default Card