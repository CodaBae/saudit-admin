import React from 'react'
import { Exit } from '../../../../../assets/svg'

export default function UserDialog({ setIsSubmit, isSubmit, handleClose }) {
    return (
        <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-[35px] items-center'>
                    <h3 className='text-[23px] font-semibold text-black font-hanken'>Are you sure you want to close?</h3>
                    <div className='cursor-pointer' onClick={() => setIsSubmit(!isSubmit)}>
                        <Exit />
                    </div>
                </div>
                <h4 className='text-[17px] font-hanken text-black'>All the information you’ve entered will be lost.</h4>
            </div>
            <div className='mt-2 flex items-center gap-[21px] w-full'>
                <button onClick={() => {setIsSubmit(!isSubmit); handleClose()}} className='w-[81px] h-[45px] flex justify-center items-center rounded-[5px] bg-[#00BF63] text-white text-[16px] font-hanken'>
                    Yes
                </button>
                <button onClick={() => setIsSubmit(!isSubmit)} className='w-[81px] h-[45px] flex justify-center items-center rounded-[5px] bg-transparent text-black text-[16px] font-hanken border border-black'>
                    No
                </button>
            </div>
        </div>
    )
}
