import React, { useState } from 'react'

import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"

const Section = () => {
    const [title, setTitle] = useState("")

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

  return (
    <div className='w-full mt-[33px] h-auto p-10 flex flex-col bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
        <div className='flex justify-between items-center'>
            <p className='font-Kumbh'>Section 1</p>
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' />
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <input 
                type='text'
                className='w-full bg-[#fff] p-4 text-[#000] h-[80px] font-Kumbh font-semibold text-[22px] mt-[20px]' 
                placeholder='Module Title'
                onChange={(e) => handleTitleChange(e)}
            />
            <input 
                type='text'
                className='w-full bg-[#fff] p-4 text-[#000] h-[80px] font-Kumbh font-semibold text-[22px] mt-[20px]' 
                placeholder='Module Title'
                onChange={(e) => handleTitleChange(e)}
            />
        </div>
    </div>
  )
}

export default Section