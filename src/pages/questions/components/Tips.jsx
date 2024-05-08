import React, { useState } from 'react'

import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"

const Tips = ({ tipsId, setShowTips, onDelete}) => {
    const [addTips, setAddTips] = useState([])
    const [tipChange, setTipChange] = useState("")

    const handleDelete = () => {
        onDelete(tipsId);
    };

    const handleTipChange = (e) => {
        setTipChange(e.target.value)
    }

    const addMoreTips = () => {
        setAddTips([...addTips, { id: addTips.length + 1 }]);
    }

  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10  animate__animated animate__fadeInUp flex flex-col bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
        <div className='flex justify-end items-center'>
            {/* <p className='font-Kumbh'>Section 1</p> */}
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' className='cursor-pointer' onClick={() => {setShowTips(false), handleDelete()}} />
            </div>
        </div>
        <div className='flex flex-col gap-[15px]'>
            {
                addTips.map((item, index) => (
                    <div className='mt-[24px] flex gap-2' key={index}>
                        <p className='text-[#000] font-medium font-Kumbh'>{index + 1}</p>
                        <textarea
                          className='w-full h-[128px] bg-[#fff] p-4 outline-none'
                          placeholder='Type tip...'
                          rows="5"
                          value={tipChange}
                          onChange={(e) => handleTipChange(e)}
                        >
                        </textarea>
                      </div>
                ))
            }
            <div className='flex items-center' onClick={addMoreTips}>
                <p className="text-[#0F5B40] font-medium text-[17px]">+ Add tips</p>
            </div>
        </div>

    </div>
  )
}

export default Tips