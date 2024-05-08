import React, { useState } from 'react'

import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"

const Text = ({ textId, setShowTexts, onDelete }) => {
  const [addNewAnswer, setAddNewAnswer] = useState([])
  const [title, setTitle] = useState("")
  const [answer, setAnswer] = useState("")

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleDelete = () => {
    onDelete(textId);
};

  const addMoreAnswer = () => {
    setAddNewAnswer([...addNewAnswer, { id: addNewAnswer.length + 1 }]);
}

  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10  animate__animated animate__fadeInUp flex flex-col bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
      <div className='flex justify-end items-center'>
            {/* <p className='font-Kumbh'>Section 1</p> */}
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' className='cursor-pointer' onClick={() => {setShowTexts(false), handleDelete()}} />
            </div>
        </div>
        <div className='flex flex-col gap-[11px] mt-4'>
          <div className='flex items-center gap-2 '>
            <p className='font-medium font-Kumbh'>1.</p>
            <input 
                type='text'
                value={title}
                className='w-full bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[14px]' 
                placeholder='Question'
                onChange={(e) => handleTitleChange(e)}
              />
          </div>
          {
            addNewAnswer?.map((item, index) => (
              <div className='ml-5' key={index}>
                <input 
                  type='text'
                  className='w-full bg-transparent border border-[#ADADAD] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[14px]' 
                  placeholder='Enter your answer'
                  value={answer}
                  onChange={(e) => handleAnswerChange(e)}
                />
              </div>
            ))
          }
          <p className='text-[#000000] font-Kumbh mt-[17px]'>Correct answers</p>
          <div className='flex items-center mt-2 mb-5' onClick={addMoreAnswer}>
              <p className="text-[#0F5B40] font-medium text-[17px]">+ Add answer</p>
          </div>
        </div>

        <hr />
        <div className='flex items-center mt-3 gap-2'>
          <p className='font-medium text-[#000000] font-Kumbh text-[14px]'>Points:</p>
          <div className='bg-[#fff] w-[34px] h-[26px] flex items- justify-center'>
            <p className='font-Kumbh text-[#000]'>0</p>
          </div>
        </div>

    </div>
  )
}

export default Text