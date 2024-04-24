import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { Switch } from 'antd';


import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"
import Check from "../../../assets/svg/check.svg"


const Choice = ({ setShowChoice }) => {
  const [title, setTitle] = useState("")
  const [option, setOption] = useState("")
  const [tipChange, setTipChange] = useState("")
  const [subQuestionChange, setSubQuestionChange] = useState("")

  const handleTitleChange = (e) => {
      setTitle(e.target.value)
  }

  const handleOptionChange = (e) => {
    setOption(e.target.value)
  }

  const handleTipChange = (e) => {
    setTipChange(e.target.value)
  }

  const handleSubQuestionChange = (e) => {
    setSubQuestionChange(e.target.value)
  }

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10 flex flex-col animate__animated animate__fadeInUp bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
       <div className='flex justify-between items-center'>
            <p className='font-Kumbh'></p>
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' className='cursor-pointer' onClick={() => setShowChoice(false)} />
            </div>
        </div>
        <div className='flex flex-col gap-[11px] mt-[20px]'>
          <div className='flex items-center gap-2 '>
            <p className='font-medium font-Kumbh'>1.</p>
            <input 
                type='text'
                className='w-[931px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[22px]' 
                placeholder='Question'
                onChange={(e) => handleTitleChange(e)}
              />
          </div>
          <div className='flex items-center gap-2 pl-10'>
            <img src={Check} alt='check' />
            <input 
              type='text'
              className='w-[827px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[22px]' 
              placeholder='Option 1'
              onChange={(e) => handleOptionChange(e)}
            />
            <button className='bg-[#00BA78] flex items-center gap-1 w-[50px] h-[55px] p-2'>
              <FaPlus className="text-[#fff] w-[11px] h-[11px] font-Kumbh"/>
              <p className='text-[#fff]'>Tip</p>
            </button>
          </div>
          <div className='mt-[24px] pl-[160px]'>
            <textarea
              className='w-[792px] h-[83px] bg-[#fff] p-4 outline-none'
              placeholder='Type tip...'
              rows="5"
              onChange={(e) => handleTipChange(e)}
            >
            </textarea>
          </div>
          <div className='flex  gap-[8px] mt-[22px] pl-12'>
            <div className='bg-[#fff] w-[46px] h-[50px] flex items-center justify-center'>
              <p className='text-[#000] font-medium font-Kumbh'>1.1</p>
            </div>
            <div className='flex flex-col'>
              <input 
                type='text'
                className='w-[850px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[14px]' 
                placeholder='Sub question 1.1'
                onChange={(e) => handleSubQuestionChange(e)}
              />
              <div className='flex items-center mt-1.5'>
                <GoPlus className="text-[#474747] text-[13px] font-Kumbh"/>
                <p className='text-[#474747] text-[13px] font-Kumbh cursor-pointer'>Add Sub Qsn</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end mt-1 mr-8 mb-[100px]'>
            <GoPlus className="text-[#04BC7B] text-[13px]  font-medium font-Kumbh"/>
            <p className='text-[#04BC7B] text-[17px] font-medium font-Kumbh cursor-pointer'>Add Option</p>
          </div>
        </div>
        <hr />
        <div className='flex items-center mt-3 justify-between'>
          <div className='flex items-center gap-2'>
            <p className='font-medium text-[#000000] font-Kumbh text-[14px]'>Points:</p>
            <div className='bg-[#fff] w-[34px] h-[26px] flex items- justify-center'>
              <p className='font-Kumbh text-[#000]'>0</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <p className='text-[#000] font-Kumbh font-medium text-[14px]'>Evidence</p>
            <Switch size="small"  onChange={onChange}/>
          </div>

        </div>
    </div>
  )
}

export default Choice