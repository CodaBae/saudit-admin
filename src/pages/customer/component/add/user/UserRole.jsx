import React, { useState } from 'react'
import { Radio } from '@mui/material';

export default function UserRole({ checked, setChecked }) {
    

    const CheckedIcon = () => {
        return (
          <div className="rounded-lg flex justify-center items-center">
            <div className="bg-[#1A76E7] rounded-lg size-[15px]"></div>
          </div>
        );
    };

    return (
        <div className='flex flex-col gap-[18px]'>
            <h1 className='text-[37px] font-medium text-black'>User Roles</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-3'>
                    <Radio
                        sx={{
                            height: 23,
                            width: 23,
                            background: "white",
                            border: (checked === 'company') ? '1px solid black' : ''
                        }}
                        checkedIcon={<CheckedIcon />}
                        checked={checked === "company"}
                        onClick={() => {setChecked('company');}}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                    />
                    <p className='text-[18px] text-black font-Kumbh'>Company Admin</p>
                </div>

                <div className='flex items-center gap-3'>
                    <Radio
                        sx={{
                            height: 23,
                            width: 23,
                            background: "white",
                            border: (checked === 'executive') ? '1px solid black' : ''
                        }}
                        checkedIcon={<CheckedIcon />}
                        checked={checked === "executive"}
                        onClick={() => {setChecked('executive');}}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                    />
                    <p className='text-[18px] text-black font-Kumbh'>Executive</p>
                </div>

                <div className='flex items-center gap-3'>
                    <Radio
                        sx={{
                            height: 23,
                            width: 23,
                            background: "white",
                            border: (checked === 'management') ? '1px solid black' : ''
                        }}
                        checkedIcon={<CheckedIcon />}
                        checked={checked === "management"}
                        onClick={() => {setChecked('management');}}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                    />
                    <p className='text-[18px] text-black font-Kumbh'>Senior management</p>
                </div>

                <div className='flex items-center gap-3'>
                    <Radio
                        sx={{
                            height: 23,
                            width: 23,
                            background: "white",
                            border: (checked === 'staff') ? '1px solid black' : ''
                        }}
                        checkedIcon={<CheckedIcon />}
                        checked={checked === "staff"}
                        onClick={() => {setChecked('staff');}}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                    />
                    <p className='text-[18px] text-black font-Kumbh'>Staff</p>
                </div>
            </div>
        </div>
    )
}
