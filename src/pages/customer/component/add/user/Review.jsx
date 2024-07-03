import React, { useState } from 'react'
import { CgSpinner } from 'react-icons/cg';
import axios from 'axios';
import { toast } from 'react-toastify';

import { Copy } from '../../../../../assets/svg'  
import { copyTextToClipboard } from  '../../../../../helper';


export default function Review({ setReview, showData, handleClose, state}) {
    const [copyUser, setCopyUser] = useState(false);
    const [loading, setLoading] = useState(false)

    console.log(showData, "maybe")
    // console.log(state, "state-vam")

    const submit = async () => {
        setLoading(true)
        const data = {
            "userId": state?._id,
            "firstname": showData?.firstname,
            "lastname": showData?.lastname,
            "email": showData?.email,
            "jobTitle": showData?.jobTitle,
            "userRole": showData?.userRole,
            "accessModule": showData?.accessModule,
            "createPassword": showData?.createPassword
        }
        await axios.post("https://saudit-jheg.onrender.com/company/user/add", data)
        .then((res) => {
            setLoading(false)
            console.log(res, "flow")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
            handleClose()
        })
        .catch((err) => {
            setLoading(false)
            console.log(err, "slow")
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            })
        })
    }

 

    const closeModal = () => {
        // handleClose()
        setReview(false)
    }

    return (
        <div className='flex flex-col gap-8 w-[600px]'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-[37px] font-medium text-black'>Review and finish</h1>
                <h3 className='text-[16px] font-Kumbh'>Review all the information for this user before you finish adding them</h3>
            </div>
            <div className='flex gap-[23px] items-center'>
                <div className='flex gap-2 items-center'>
                    <div>
                        <h3 className='mb-[7px] text-[16px] font-medium'>Name and Username</h3>
                        <p className='text-[13px] font-Kumbh text-[#383838] mb-[7px]'>{` Display name: ${showData?.firstname} ${showData?.lastname}`}</p>
                        <p className='text-[13px] font-Kumbh text-[#383838] mb-[7px]'>{`Username: ${showData?.email}`}</p>
                        <p className='text-[13px] font-Kumbh text-[#383838]'>{`Password: ${showData?.createPassword}`} </p>
                    </div>
                    <p className='text-[61px] text-[#C5C5C5] font-Kumbh'>{'}'}</p>
                </div>
                <div 
                    className='cursor-pointer'
                    onClick={() => {copyTextToClipboard(`${showData?.firstname} ${showData?.lastname} ${showData?.email} ${showData?.createPassword}`); setCopyUser(true)}} 
                >
                    {copyUser ? <p className='font-hanken'>Copied</p> :  <Copy />}
                    {/* <Copy /> */}
                </div>
            </div>
            <div className='mt-[11px] flex flex-col gap-[7px]'>
                <h3 className='text-[16px] font-medium'>Role</h3>
                <p className='text-[13px] font-Kumbh text-[#2E2E2E]'>{showData?.userRole}</p>
            </div>
            <div className='mt-[11px] flex flex-col gap-[7px]'>
                <h3 className='text-[16px] font-medium'>Access to modules</h3>
                <p className='text-[13px] font-Kumbh text-[#3A3A3A]'>{showData?.accessModule}</p>
            </div>

            <div className='mt-2 mb-[70px] flex items-center justify-between w-full'>
                <button onClick={() => submit()} className='w-[128px] mt-[200px] h-[46px] flex justify-center items-center rounded-[23px] bg-[#00BF63] text-white text-[16px] font-hanken'>
                    <p className='text-WHITE-_100 text-sm font-bold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Submit'}</p>
                </button>
                <button onClick={() => closeModal()} className='w-[128px] mt-[200px] h-[46px] flex justify-center items-center rounded-[23px] bg-[#C0C0C0] text-white text-[16px] font-hanken'>
                    Close
                </button>

            </div>
        </div>
    )
}

//() => setReview(false)