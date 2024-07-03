import React from 'react'

export default function Input({ placeholder, type, value, onChange }) {
    return (
        <input 
            type={type}
            className='placeholder:text-[#484848] w-full h-[46px] border border-[#4D4D4D] text-[13px] font-hanken text-[#484848] pl-[17px] flex items-center focus:outline-none' 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        /> 
    )
}
