import React, { useState } from 'react'
import { Radio } from '@mui/material';

export default function AccessModules({ accessModulesChecked, setAccessModulesChecked }) {
  
    const CheckedIcon = () => {
        return (
          <div className="rounded-lg flex justify-center items-center">
            <div className="bg-[#1A76E7] rounded-lg size-[15px]"></div>
          </div>
        );
    };

    return (
        <div className='flex flex-col gap-[18px]'>
            <h1 className='text-[37px] font-medium text-black'>Access to modules</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-3'>
                    <Radio
                        sx={{
                            height: 23,
                            width: 23,
                            background: "white",
                            border: (accessModulesChecked === 'culture') ? '1px solid black' : ''
                        }}
                        checkedIcon={<CheckedIcon />}
                        checked={accessModulesChecked === "culture"}
                        onClick={() => {setAccessModulesChecked('culture');}}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                    />
                    <p className='text-[18px] text-black font-Kumbh'>Culture</p>
                </div>

                <div className='flex items-center gap-3'>
                    <Radio
                        sx={{
                            height: 23,
                            width: 23,
                            background: "white",
                            border: (accessModulesChecked === 'biodiversity') ? '1px solid black' : ''
                        }}
                        checkedIcon={<CheckedIcon />}
                        checked={accessModulesChecked === "biodiversity"}
                        onClick={() => {setAccessModulesChecked('biodiversity');}}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                    />
                    <p className='text-[18px] text-black font-Kumbh'>Biodiversity</p>
                </div>

                <div className='flex items-center gap-3'>
                    <Radio
                        sx={{
                            height: 23,
                            width: 23,
                            background: "white",
                            border: (accessModulesChecked === 'emmissons') ? '1px solid black' : ''
                        }}
                        checkedIcon={<CheckedIcon />}
                        checked={accessModulesChecked === "emmissons"}
                        onClick={() => {setAccessModulesChecked('emmissons');}}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                    />
                    <p className='text-[18px] text-black font-Kumbh'>Air Emmisons</p>
                </div>

                <div className='flex items-center gap-3'>
                    <Radio
                        sx={{
                            height: 23,
                            width: 23,
                            background: "white",
                            border: (accessModulesChecked === 'governance') ? '1px solid black' : ''
                        }}
                        checkedIcon={<CheckedIcon />}
                        checked={accessModulesChecked === "governance"}
                        onClick={() => {setAccessModulesChecked('governance');}}
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                    />
                    <p className='text-[18px] text-black font-Kumbh'>Governance</p>
                </div>
            </div>
        </div>
    )
}
