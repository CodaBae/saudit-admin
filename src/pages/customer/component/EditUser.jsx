import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { CgSpinner } from 'react-icons/cg'
import axios from 'axios'
import { toast } from 'react-toastify'

import CloseIcon from "../../../assets/svg/closeIcon.svg"

const EditUser = ({ handleClose, data, editLoading,  setEditLoading}) => {


    const submitForm = async (values) => {
        setEditLoading(true)
        const companyData = {
            companyName: values?.title
        }
        await axios.put(`https://saudit-jheg.onrender.com/auth/user/${data?._id}`, companyData)
        .then((res) => {
            console.log(res, "slime")
            setEditLoading(false)
            toast(`Updated Successfully`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
              })
              handleClose()
        })
        .catch((err) => {
            console.log(err, 'Casper')
            setEditLoading(false)
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
              })
              handleClose()
        })
    }

  return (
    <div className='bg-[#fff] w-[511px] h-[300px]  mt-[100px] rounded-lg flex flex-col'>
        <div className='flex items-center justify-between p-6'>
            <p className='font-medium text-base text-[#000]'>Edit User</p>
            <button className="flex justify-center items-center" onClick={handleClose}>
                <img src={CloseIcon} alt='close' />
            </button>
        </div>
        <hr />
        <div>
            <Formik
                initialValues={{
                    title: "",
                }}
                    // validationSchema={formValidationSchema}
                    onSubmit={(values, action) => {
                    window.scrollTo(0, 0);
                    console.log(values, "market")

                    submitForm(values, action)

                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    dirty,
                    isValid,
                    setFieldValue,
                    errors,
                    touched,
                    // setFieldTouched,
                    values,
                }) => (
                    <Form onSubmit={handleSubmit} className="flex mt-6">
                        <div className="w-full flex flex-col gap-6">

                            <div className='flex flex-col gap-2 mx-6'>
                                <label htmlFor='name' className='font-mont font-medium text-[#334D57] text-sm' >Name<span className='text-[#FF0000]'>*</span></label>
                                <input
                                    name="title"
                                    placeholder="Name"
                                    type="text" 
                                    value={values?.title}
                                    onChange={handleChange}
                                    className="outline-none w-full text-[#000] font-mont font-medium text-base rounded-lg border  border-[#EDEDED] p-3 h-[48px] border-solid "
                                /> 
                                {errors.title && touched.title ? (
                                <div className="text-RED-_100 text-xs">
                                    {errors.title}
                                </div>
                                ) : null}
                            </div>


                            <div className='flex items-center justify-end mx-6 mb-4  gap-2 '>
                                <button 
                                    type='button'
                                    onClick={handleClose}
                                    className='w-[85px] border rounded-lg border-[#40BC9D] text-center p-2 h-[48px] text-[#40BC9D] bg-[#fff]'
                                >
                                    Cancel
                                </button>
                                <button type='submit' className='bg-[#40BC9D] text-[#fff] flex items-center justify-center rounded-lg w-[72px] h-[48px] text-center'>
                                    <p className='text-[#fff] '>{editLoading ? <CgSpinner className=" animate-spin text-lg " /> : 'Submit'}</p>
                                </button>
                            </div>
                            
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default EditUser