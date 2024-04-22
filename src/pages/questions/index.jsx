import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import Book from "../../assets/png/book.png"
import Hamburger from "../../assets/svg/section.svg"
import Idea from "../../assets/svg/idea.svg"
import Section from './components/Section';

const Questions = () => {
    const [type, setType] = useState("Create Question")

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
                <p className='font-Kumbh font-medium text-[25px]'>{type}</p>
                <img src={Book} alt='Book' className='w-[49px] h-[31px]' />
            </div>
            <p className={`${type === "Let's Begin" ? "text-[#A1A1A1] font-Kumbh text-[17px]" : "hidden "}`}>Start with a section</p>
        </div>

        {type === "Fill the form" && <Section />}

        <div className={`${type === "Let's Begin" ? "flex items-center gap-2 mt-[89px]" :  "hidden" }`}>
            <button onClick={() => setType("Create Question")} className='w-[66px] h-[62px] bg-[#00BA78] flex justify-center rounded-lg items-center'>
                <MdClose className='text-[#fff]' />
            </button>
            <button onClick={() => setType("Fill the form")} className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
                <img src={Hamburger} alt='Hamburger' />
                <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Section</p>
            </button>
            <button className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
                <div className='w-[20px] h-[20px] rounded-full flex justify-center items-center border border-[#288766]'>
                    <div className='bg-[#00BA78] rounded-full w-[14px] h-[14px]'></div>
                </div>
                <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Choice</p>
            </button>
            <button className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
                <div className='w-[19px] h-[19px] rounded flex justify-center items-center border border-[#288766]'>
                    <p className='text-[#00BA78] font-Kumbh text-[10px]'>T</p>
                </div>
                <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Text</p>
            </button>
            <button className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
                <img src={Idea} alt='Idea' />
                <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Section</p>
            </button>
        </div>


        <button onClick={() => setType("Let's Begin")} className={`${type === "Let's Begin" ? "hidden" : "w-[168px] h-[62px] mt-[159px] bg-[#00BA78] flex rounded-lg items-center gap-2 justify-center p-2 "}`}>
            <FaPlus className='text-[#fff]' />
            <p className='text-[#fff]'>Add New</p>
        </button>
    </div>
  )
}

export default Questions