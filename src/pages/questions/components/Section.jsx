import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"

const Section = ({ setType, sectionId, onDelete }) => {
    const [title, setTitle] = useState("")

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDelete = () => {
        onDelete(sectionId);
    };
  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10  animate__animated animate__fadeInUp flex flex-col bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
        <div className='flex justify-between items-center'>
            <p className='font-Kumbh'>Section 1</p>
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' className='cursor-pointer' onClick={() => { handleDelete()}} />
            </div>
        </div>
        <div className='flex flex-col gap-4'>

            <div 
                className='w-full bg-[#fff] pl-5 pr-[36px] py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' 
            >
                <p className='font-medium text-[22px] font-Kumbh'>Select Sector</p>
                <IoIosArrowDown className='text-[22px]' />
            </div>

            <div className='w-full flex items-center gap-[19px] mt-[20px]'>
                <div 
                    className='w-full bg-[#fff] pl-5 pr-[36px] py-6 outline-none text-[#000] flex items-center justify-between h-[80px] font-semibold  ' 
                >
                    <p className='font-medium text-[22px] font-Kumbh'>Select Sector</p>
                    <IoIosArrowDown className='text-[22px]'/>
                </div>
                <div 
                    className='w-full bg-[#fff] pl-5 pr-[36px] py-6 outline-none text-[#000] flex items-center justify-between h-[80px] font-semibold  ' 
                >
                    <p className='font-medium text-[22px] font-Kumbh'>Type</p>
                    <IoIosArrowDown className='text-[22px]' />
                </div>
            </div>

            <div 
                className='w-full bg-[#fff] pl-5 pr-[36px] py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' 
            >
                <p className='font-medium text-[22px] font-Kumbh'>Industry function</p>
                <IoIosArrowDown className='text-[22px]' />
            </div>

            <div 
                className='w-full bg-[#fff] pl-5 pr-[36px] py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' 
            >
                <p className='font-medium text-[22px] font-Kumbh'>User function</p>
                <IoIosArrowDown className='text-[22px]' />
            </div>

            <div 
                className='w-full bg-[#fff] pl-5 pr-[36px] py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' 
            >
                <p className='font-medium text-[22px] font-Kumbh'>Select assessment category</p>
                <IoIosArrowDown className='text-[22px]' />
            </div>

            <div 
                className='w-full bg-[#fff] pl-5 pr-[36px] py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' 
            >
                <p className='font-medium text-[22px] font-Kumbh'>Select compliance category</p>
                <IoIosArrowDown className='text-[22px]' />
            </div>
           
        </div>
    </div>
  )
}

export default Section
