import React from 'react'
import { useNavigate } from 'react-router-dom'

import Home from "../../assets/svg/home.svg"
import User from "../../assets/svg/user.svg"
import Report from "../../assets/svg/report.svg"
import Document from "../../assets/svg/document.svg"
import Setting from "../../assets/svg/settings.svg"


const Sidebar = () => {

    const navigate = useNavigate()

  return (
    <div className='w-full flex flex-col gap-[55px] items-center px-[45px] pt-[37px] border border-y-0 border-l-[#E0E0E0]'>
        <div className='flex flex-col cursor-pointer items-center' onClick={() => navigate("/")}>
            <img src={Home} alt='Home' className='w-[21px] h-[20px]' />
            <p className='text-[11px] font-hanken'>Home</p>
        </div>

        <div className='flex flex-col cursor-pointer items-center'>
            <img src={User} alt='User' className='w-[18px] h-[20px]' />
            <p className='text-[11px] font-hanken'>User</p>
        </div>

        <div className='flex flex-col cursor-pointer items-center'>
            <img src={Report} alt='Report' className='w-[18px] h-[20px]' />
            <p className='text-[11px] font-hanken'>Media</p>
        </div>

        <div className='flex flex-col cursor-pointer items-center'>
            <img src={Report} alt='Report' className='w-[18px] h-[20px]' />
            <p className='text-[11px] font-hanken'>Analytics</p>
        </div>

        <div className='flex flex-col cursor-pointer items-center'>
            <img src={Report} alt='Report' className='w-[18px] h-[20px]' />
            <p className='text-[11px] font-hanken'>Report</p>
        </div>

        <div className='flex flex-col cursor-pointer items-center'>
            <img src={Document} alt='Document' className='w-[18px] h-[20px]' />
            <p className='text-[11px] font-hanken'>Document</p>
        </div>

        <div className='flex flex-col cursor-pointer items-center'>
            <img src={Setting} alt='Setting' className='w-[18px] h-[20px]' />
            <p className='text-[11px] font-hanken'>Setting</p>
        </div>

    </div>
  )
}

export default Sidebar