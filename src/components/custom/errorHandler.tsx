import React from 'react'
import { AiOutlineReload } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";

const ErrorHandler = ({label, status}:{label : string, status: "loading" | "error"}) => {
  return (
    <div className='flex items-center gap-2'>
      {
        status == "loading"  && <AiOutlineReload className="text-2xl mr-2 h-8 w-8 animate-spin" />
      }
      {
        status == "error"  && <MdErrorOutline className="text-red-600 mr-2 h-8 w-8" />
      }       
      <span className="text-2xl">{label}</span>
    </div>
  )
}

export default ErrorHandler