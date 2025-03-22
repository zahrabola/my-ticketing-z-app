import React from 'react'
import { FaFire } from "react-icons/fa6";

const PriorityDisplay = ({priority}) => {
  return (
    <div className='flex judtigy=dtsrt align-baseline'>
         <div className={`icon pr-1  ${priority > 0 ? "text-red-400" : " text-slate-400"} `}>
        <FaFire />
      </div>
      <div className={`icon pr-1  ${priority > 0 ? "text-red-400" : " text-slate-400"} `}>
        <FaFire />
      </div>
      <div className={`icon pr-1  ${priority > 0 ? "text-red-400" : " text-slate-400"} `}>
        <FaFire />
      </div>
      <div className={`icon pr-1  ${priority > 0 ? "text-red-400" : " text-slate-400"} `}>
        <FaFire />
      </div>
      <div className={`icon pr-1  ${priority > 0 ? "text-red-400" : " text-slate-400"} `}>
        <FaFire />
      </div>
    </div>
  )
}

export default PriorityDisplay