import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';
import axios from 'axios';

import Search from "../../assets/svg/search.svg"
import ModalPop from '../../components/modalPop';
import EditUser from './component/EditUser';
import { Skeleton } from '@mui/material';


const Customer = () => {
    const [checkedRows, setCheckedRows] = useState({});
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState([])
    const [companyData, setCompanyData] = useState([])
    const [loading, setLoading] = useState(false)
    const [dataLoading, setDataLoading] = useState(false)
    const [editLoading, setEditLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // You can change this to any number you prefer

    const handleCheckboxChange = (index) => {
        setCheckedRows(prev => ({ ...prev, [index]: !prev[index] }));
    };

     // Calculate total pages
     const totalPages = Math.ceil(companyData?.length / itemsPerPage);

     // Get current items for the page
     const currentData = companyData?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
 
     const handlePageChange = (pageNumber) => {
         setCurrentPage(pageNumber);
     };



    const getAllUsers = async () => {
        setDataLoading(true)
        await axios.get("https://saudit-jheg.onrender.com/auth/getusers")
        .then((res) => {
            console.log(res, "fish")
            setCompanyData(res?.data)
            setDataLoading(false)
        })
        .catch((err) => {
            console.log(err, "lappy")
            setLoading(false)
        })
    }

    useEffect(() => {
        getAllUsers()
    }, [loading, editLoading])

    const deleteUser = async () => {
        setLoading(true)
        await axios.delete(`https://saudit-jheg.onrender.com/auth/user/${data?._id}`)
        .then((res) => {
            console.log(res, "slime")
            setLoading(false)
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
              })
        })
        .catch((err) => {
            console.log(err, 'Casper')
            setLoading(false)
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
              })
        })
    }

  return (
    <div className='flex flex-col gap-[53px] mt-[36px]'>
        <div className='flex justify-between items-center '>
            <div className='flex flex-col gap-[25px]'>
                <p className='text-[#000] font-hanken font-medium text-[20px]'>Customer List</p>
            </div>
            <div className='flex items-center gap-[9px]'>
                <div className='rounded-[23px] border border-[#CCCCCC] w-[372px] h-[46px] flex items-center gap-2 p-3'>
                    <img src={Search} alt='Search' className='w-4 h-4' />
                    <input 
                        placeholder='Search by company name or email'
                        type='text'
                        name='search'
                        className='outline-none bg-transparent  '
                    />
                </div>
                <div className='w-[101px] h-[46px] rounded-[23px] border border-[#CCCCCC] flex items-center justify-center'>
                    <p className='font-kumbh text-sm text-[#A3A3A3]'>Filter</p>
                </div>
            </div>
        </div>
        {
            loading || dataLoading ?
            <Skeleton variant="rectangular" width={1185} height={1000} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
            :
            <>
                <table className='w-full'>
                    <tr className='h-[32px]  border-0' >
                        <th className="font-medium pr-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Company Name
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Industry {/* Registration Date */}
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Company Size {/* Billing Status */}
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Access
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Subscription Ends
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Last Login
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Actions
                        </th>
                    </tr>
                    {currentData?.map((item, index) => (
                        <tr key={index} className={`${checkedRows[index] ? "bg-[#EEEEEE]" : "bg-transparent"} h-[55px] border-b border-grey-100`}>
                            <td className='h-[55px] w-[180px] flex items-center gap-3 '>
                                <input 
                                    type='checkbox' 
                                    className='w-[14px] h-[14px] rounded-lg' 
                                    checked={checkedRows[index] || false}
                                    onChange={() => handleCheckboxChange(index)} 
                                />
                                <p className='text-sm font-kumbh'>{item?.companyName}</p> 
                            </td>
                            <td className='h-[55px] px-4'>
                                {/* <p className='text-sm font-kumbh'>{item?.date || "No Data"}</p> */}
                                <p className='text-sm font-kumbh'>{item?.industry || "No Data"}</p>
                            </td>
                            <td className='h-[55px] px-4'>
                                {/* <div className={`${item?.billStatus === "Paid" ? "bg-[#EAFFEB] w-[42px]" : item?.billStatus === "Unpaid" ? "bg-[#FAEDED] w-[57px]" : "bg-[#fff]"} rounded-xl flex items-center justify-center p-1 `}>
                                    <p className='text-sm font-kumbh'>{item?.billStatus || "No Data"}</p>
                                </div> */}
                                <p className='text-sm font-kumbh'>{item?.companySize || "No Data"}</p>
                                
                            </td>
                            <td className='h-[55px] px-4 '>
                                <p className='text-sm font-kumbh'>{`${item?.companyUsers?.length} Members`}</p>
                            </td>
                            <td className='h-[55px] px-4 '>
                                <div className='flex items-center gap-2'>
                                    <p className='text-sm font-kumbh'>{item?.sub || "No Data"}</p>
                                    <div className={`${item?.status === "Active" ? "bg-[#EAFFEB]" : item?.status === "Inactive" ? "bg-[#FAEDED]" : "hidden"} w-[57px] flex items-center justify-center p-1 rounded-xl`}>
                                        <p className='text-sm font-kumbh'>{item?.status || "No Data"}</p>
                                    </div>
                                </div>
                            </td>
                            <td className='h-[55px] px-4 '>
                                <p className='text-xs text-[#9E9E9E] font-kumbh'>{item?.login || "No Data"}</p>
                            </td>
                            <td className='h-[55px] px-4 '>
                                <div className='flex items-center gap-2'>
                                    <FaRegEdit className='text-[#818181] w-5 h-5 cursor-pointer' onClick={() => {setOpenModal(true); setData(item)}} />
                                    <MdDeleteForever className='text-[#f00] w-5 h-5 cursor-pointer' onClick={() => {deleteUser(); setData(item)}}/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'bg-gray-300' : 'bg-gray-200'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </>
        }
        <ModalPop isOpen={openModal}>
            <EditUser 
                handleClose={() => setOpenModal(false)} 
                data={data} e
                ditLoading={editLoading} 
                setEditLoading={setEditLoading} 
            />
        </ModalPop>
    </div>
  )
}

export default Customer