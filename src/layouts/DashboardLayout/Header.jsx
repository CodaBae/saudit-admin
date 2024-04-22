import React from 'react'

import Logo from "../../assets/svg/logo.svg"
import Bell from "../../assets/svg/bell.svg"
import Message from "../../assets/svg/message.svg"

const Header = () => {
  return (
    <div className='flex justify-between pl-[24px] py-[40px] pr-[120px] items-center h-[109px] bg-gradient-to-b from-[#E2F5FD] to-[#F5F4F4C4]'>
        <img src={Logo} alt='Logo' className='' />
        <div className='flex items-center gap-[29px]'>
            <img src={Bell} alt='Bell' className='' />
            <img src={Message} alt='Message' className='' />
            <div className='w-[37px] h-[37px] rounded-full bg-blue-400 text-[#fff] text-center p-2 font-hanken text-[17px] '>F</div>
        </div>
    </div>
  )
}

export default Header