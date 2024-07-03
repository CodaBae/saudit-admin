import React, { useEffect, useState } from 'react'
import Input from './Input'
import UserRole from './UserRole';
import AccessModules from './AccessModules';
import Dialogs from '../Dialogs';
import UserDialog from './UserDialog';
import Drawers from '../Drawers';
import Review from './Review';


import { CgSpinner } from 'react-icons/cg';


export default function AddUser({ setOpen, state }) {
    const [isSubmit, setIsSubmit] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [loading, setLoading] = useState(false)
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [checked, setChecked] = useState('')
    const [accessModulesChecked, setAccessModulesChecked] = useState('')
    const [createPassword, setCreatePassword] = useState(false)
    const [review, setReview] = useState(false);
    const [showData, setShowData] = useState({})


    const handleCreatePassword = () => {
        setCreatePassword(prev => !prev)
    }


    const data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        jobTitle: jobTitle,
        userRole: checked,
        accessModule: accessModulesChecked,
        createPassword: createPassword
      }

      useEffect(() => {
          setShowData(data)
      }, [firstName, lastName,email, jobTitle, checked, accessModulesChecked, createPassword])

    // const submit = async () => {
    //     // setOpen(false)
    //     dispatch(addCompanyUser(data))
    //     .then((res) => {
    //         console.log(res, "fo")
    //         if(res?.meta?.requestStatus === "fulfilled") {
    //             // setReview(false)
    //             setOpen(false)
    //             // setReview(!review)
    //         }
         
    //     })

    //     // console.log(firstName, lastName, email, jobTitle, checked, accessModulesChecked, createPassword)
    // }


    return (
        <>
            <div className='flex flex-col gap-8 w-[500px]'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[37px] font-medium text-black'>Add a user</h1>
                    <div className='flex w-full gap-[9px] mb-[5px] items-center'>
                        <Input 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            type={'name'} 
                            placeholder={'First name'}
                        />
                        <Input 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            type={'name'} 
                            placeholder={'Last name'}
                        />
                    </div>
                    <Input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type={'email'} 
                        placeholder={'Email'}
                    />
                    <Input 
                        value={jobTitle} 
                        onChange={(e) => setJobTitle(e.target.value)} 
                        type={'name'} 
                        placeholder={'Job Title'}
                    />
                </div>
                <UserRole checked={checked} setChecked={setChecked}/>
                <AccessModules accessModulesChecked={accessModulesChecked} setAccessModulesChecked={setAccessModulesChecked}/>
                <div className='mt-1 flex items-center gap-[14px]'>
                    <input 
                        type='checkbox' 
                        className='w-[19px] h-[19px] cursor-pointer border-[2px] border-black font-normal'
                        onChange={() => handleCreatePassword()}
                    />
                    <p className='text-[18px] font-Kumbh text-black'>Automatically create password for this user</p>
                </div>
                <div className='mt-2 mb-[70px] flex items-center justify-between w-full'>
                    {/* <button onClick={() => setIsSubmit(!isSubmit)} className='px-10 flex justify-center items-center h-[46px] rounded-[23px] bg-[#00BF63] text-white text-[15px] font-hanken'>
                        Next
                    </button>
                    <button onClick={() => setOpen(false)} className='px-10 -mr-20 flex justify-center items-center h-[46px] rounded-[23px] bg-[#C0C0C0] text-white text-[15px] font-hanken'>
                        Cancel
                    </button> */}
                    <button 
                        onClick={() => setReview(!review)} 
                        className='px-10 flex justify-center items-center h-[46px] rounded-[23px] bg-[#00BF63] text-white text-[15px] font-hanken'
                    >
                        <p className='text-WHITE-_100 text-sm font-bold'>{loading ? <CgSpinner className=" animate-spin text-lg " /> : 'Next'}</p>
                    </button>
                    <button onClick={() => setIsSubmit(!isSubmit)} className='px-10 -mr-20 flex justify-center items-center h-[46px] rounded-[23px] bg-[#C0C0C0] text-white text-[15px] font-hanken'>
                        Cancel
                    </button>
                </div>
            </div>
            <Dialogs open={isSubmit} setOpen={setIsSubmit}>
                <UserDialog setIsSubmit={setIsSubmit} isSubmit={isSubmit} handleClose={() => setOpen(false)} />
            </Dialogs>
            <Drawers open={review} setOpen={setReview}>
                <Review setReview={setReview} showData={showData} handleClose={() => setOpen(false)} state={state} />
            </Drawers>
        </>
    )
}