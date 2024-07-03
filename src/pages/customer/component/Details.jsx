import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Search from "../../../assets/svg/search.svg"
import User from "../../../assets/svg/addUser.svg"
import Key from "../../../assets/svg/key.svg"
import axios from 'axios'
import { Skeleton } from '@mui/material'
import { toast } from 'react-toastify'
import Drawers from './add/Drawers'
import AddUser from './add/user/AddUser'


const Details = () => {
    const [checkedRows, setCheckedRows] = useState({});
    const [loading, setLoading] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleCheckboxChange = (index) => {
        setCheckedRows(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const { state } = useLocation()
    console.log(userData, "fsdoaoe")


    let results = [];

    const fetchData = async () => {
        setLoading(true)
        for (const id of state?.companyUsers || []) {
            try {
                const response = await axios.get(`https://saudit-jheg.onrender.com/auth/${id}`);
                console.log(response.data, "response.data");
                results.push(response.data);
            } catch (error) {
                console.error(`Error fetching data for id ${id}:`, error);
            }
        }
        setLoading(false)
        console.log(results, "results");
        setData(results)
    };

    useEffect(() => {
        fetchData();
    }, [state?.companyUsers, text]);

    console.log(data, "loaded");

    
    const deleteUser = async () => {
        setDeleteLoading(true);
        try {
            const res = await axios.delete(`https://saudit-jheg.onrender.com/auth/user/${userData?._id}`);
            toast(`${res?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            });
        } catch (err) {
            console.log(err, 'Casper');
            toast(`${err?.data?.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            });
        } finally {
            setDeleteLoading(false);
        }
    };

    const handleSearch = (e) => {
        setText(e.target.value);
    };
    
    const filteredData = data.filter(item =>
        item.firstname.toLowerCase().includes(text.toLowerCase()) ||
        item.email.toLowerCase().includes(text.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Get current items for the page
    const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



  return (
    <div className='flex flex-col gap-5 mt-[36px]'>

        <div className='flex flex-col gap-10'>
            <p className='font-bold text-[#014E64] text-[26px]'>{state?.companyName}</p>
            <div className='flex gap-10'>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#014E64] h-[45px] w-1'></div>
                    <div className='flex flex-col'>
                        <p className='font-hanken text-[#939393] text-[15px]'>Number of active users</p>
                        <p className='font-hanken font-medium text-[20px] text-[#1A76E7]'>{state?.companyUsers?.length} members</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#014E64] h-[45px] w-1'></div>
                    <div className='flex flex-col'>
                        <p className='font-hanken text-[#939393] text-[15px]'>Number of active users</p>
                        <p className='font-hanken font-medium text-[20px] text-[#1A76E7]'>{state?.companyUsers?.length} members</p>
                    </div>
                </div>
            </div>
        </div>
        <hr />

        <div className='flex justify-between items-center '>
            <div className='flex items-center gap-[25px]'>
                <div className='flex items-center gap-2' onClick={() => setOpen(true)}>
                    <img src={User} alt='User' />
                    <p className='text-[#000] font-hanken font-medium text-sm'>Add User</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={Key} alt='Key' />
                    <p className='text-[#000] font-hanken font-medium text-sm'>Reset Password</p>
                </div>
                <div className='flex items-center gap-2' onClick={() => deleteUser()}>
                    <img src={User} alt='User' />
                    <p className='text-[#000] font-hanken font-medium text-sm'>Delete User</p>
                </div>
            </div>
            <div className='flex items-center gap-[9px]'>
                <div className='rounded-[23px] border border-[#CCCCCC] w-[372px] h-[46px] flex items-center gap-2 p-3'>
                    <img src={Search} alt='Search' className='w-4 h-4' />
                    <input 
                        placeholder='Search by name or email'
                        type='text'
                        name='search'
                        className='outline-none bg-transparent'
                        onChange={handleSearch}
                        value={text}
                    />
                </div>
                <div className='w-[101px] h-[46px] rounded-[23px] border border-[#CCCCCC] flex items-center justify-center'>
                    <p className='font-kumbh text-sm text-[#A3A3A3]'>Filter</p>
                </div>
            </div>
        </div>

        {
            loading || deleteLoading ?
            <Skeleton variant="rectangular" width={1185} height={1000} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
            :
            <>
                <table className='w-full'>
                    <tr className='h-[32px]  border-0' >
                        <th className="font-medium pr-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Name
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Email
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Job Title
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Role
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Access Module
                        </th>
                    
                    </tr>
                    {currentData?.length > 0 ? currentData?.map((item, index) => (
                        <tr key={index} onClick={() => setUserData(item)} className={`${checkedRows[index]  ? "bg-[#EEEEEE]" : "bg-transparent"} h-[55px] border-b border-grey-100`}>
                            <td className='h-[55px] flex items-center gap-3 '>
                                <input 
                                    type='checkbox' 
                                    className='w-[14px] h-[14px] rounded-lg' 
                                    checked={checkedRows[index] || false}
                                    onChange={() => handleCheckboxChange(index)} 
                                />
                                <p className='text-sm font-kumbh'>{`${item?.firstname} ${item?.lastname}`}</p> 
                            </td>
                            <td className='h-[55px] px-4'>
                                <p className='text-sm font-kumbh'>{item?.email || "N/A"}</p>
                            </td>
                            <td className='h-[55px] px-4'>
                                <p className='text-sm font-kumbh capitalize'>{item?.jobTitle || "N/A"}</p>
                            </td>
                            <td className='h-[55px] px-4 '>
                                <p className='text-sm font-kumbh capitalize'>{item?.userRole || "N/A"}</p>
                            </td>
                            <td className='h-[55px] px-4 '>
                                <p className='text-sm font-kumbh capitalize'>{item?.accessModule || "N/A"}</p>
                            </td>
                        </tr>
                    )) : (
                        <tr className='h-[654px] bg-white border-t border-grey-100'>
                            <td colSpan="8" className="relative">
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='flex flex-col gap-2 items-center'>
                                        {/* <img src={Empty} alt='empty' className='w-[159px] h-[103px]'/> */}
                                        <p className='text-[#0C1322] font-medium text-[20px] font-inter'>No Users here.</p>
                                        <p>Oops! Nothing to see here.</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        )
                    }
                </table>
                <div className="flex justify-center mt-1 mb-10">
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
        <Drawers open={open} setOpen={setOpen}>
            <AddUser setOpen={setOpen} state={state}/>
        </Drawers>
    </div>
  )
}

export default Details