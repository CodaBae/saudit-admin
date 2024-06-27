import React, { useEffect, useState } from 'react'
import { Divider, Skeleton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ReactTyped } from "react-typed";

import Company from '../../assets/svg/company.svg'
import Arrow from '../../assets/svg/arrow-right.svg'
import ArrowUp from '../../assets/svg/arrow-up.svg'
import ArrowDown from '../../assets/svg/arrow-down.svg'
import File from '../../assets/svg/file.svg'
import axios from 'axios';

const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const [companyData, setCompanyData] = useState([])
    const [checkedRows, setCheckedRows] = useState({});

    const navigate = useNavigate()

    const handleCheckboxChange = (index) => {
        setCheckedRows(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const allDocs = [
        {
            name: "Absolute Risk Tec",
            date: "Feb 13, 2024",
            access: "3 Members",
            status: "3 Members",
            sub: "17 mb"
        },
        {
            name: "Holdings Ltd",
            date: "Feb 13, 2024",
            access: "3 Members",
            status: "3 Members",
            sub: "17 mb"
        },
        {
            name: "Hethrow",
            date: "Feb 13, 2024",
            access: "3 Members",
            status: "3 Members",
            sub: "17 mb"
        },
        {
            name: "Oxygen Co",
            date: "Feb 13, 2024",
            access: "3 Members",
            status: "3 Members",
            sub: "17 mb"
        },
        {
            name: "Bellur Co",
            date: "Feb 13, 2024",
            access: "3 Members",
            status: "3 Members",
            sub: "17 mb"
        },
    ]

    const getAllUsers = async () => {
        setLoading(true);
        try {
            const res = await axios.get("https://saudit-jheg.onrender.com/auth/getusers");
            setCompanyData(res?.data);
        } catch (err) {
            console.log(err, "lappy");
        } finally {
            setLoading(false);
        }
    };


    console.log(companyData, "companyData")

    useEffect(() => {
        getAllUsers();
    }, []);

  return (
    <div className='pt-[25px] flex flex-col gap-[28px]'>
        <p className='font-medium text-[#000] font-Kumbh text-[37px]'>
            <ReactTyped 
                strings={[`Good Morning, Hanotu`]} 
                typeSpeed={40} 
            />
        </p>
        <div className='flex items-center gap-[25px]'>

            <div className='w-[300px] cursor-pointer hover:border-[#E6F8FF] hover:border-4 hover:shadow-lg hover:scale-100 rounded-lg border border-[#D3D3D3] gap-[19px] p-4 h-[204px] flex flex-col'>
                <div className='flex items-center gap-1.5'>
                    <div className='bg-[#00CF6C14] w-[41px] h-[39px] flex items-center justify-center rounded-[10px]'>
                        <img src={Company} alt='company'/>
                    </div>
                    <p className='font-Kumbh text-[#000] font-medium text-[19px]'>Total Companies</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-[#014E64] font-Kumbh text-[40px] font-medium'>{companyData?.length}</p>
                        <p className='text-[13px] font-Kumbh font-medium'>Companies</p>
                    </div>
                    <img src={Arrow} alt='Arrow' />
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-[21px] h-[21px] flex items-center justify-center bg-[#00BF63] rounded-full'>
                        <img src={ArrowUp} alt='arrow-up' />
                    </div>
                    <p className='text-[#00AB59] font-Kumbh font-medium text-[13px]' >21% from last month</p>
                </div>
            </div>

            <div className='w-[300px] cursor-pointer hover:border-[#E6F8FF] hover:border-4 hover:shadow-lg hover:scale-100 rounded-lg border border-[#D3D3D3] gap-[19px] p-4 h-[204px] flex flex-col'>
                <div className='flex items-center gap-1.5'>
                    <div className='bg-[#00CF6C14] w-[41px] h-[39px] flex items-center justify-center rounded-[10px]'>
                        <img src={File} alt='file'/>
                    </div>
                    <p className='font-Kumbh text-[#000] font-medium text-[19px]'>Document Manager</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-[#014E64] font-Kumbh text-[40px] font-medium'>35GB</p>
                        <p className='text-[13px] font-Kumbh font-medium'>Total storage used</p>
                    </div>
                    <img src={Arrow} alt='Arrow' />
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-[21px] h-[21px] flex items-center justify-center bg-[#FF3C30] rounded-full'>
                        <img src={ArrowDown} alt='arrow-down' />
                    </div>
                    <p className='text-[#FF3C30] font-Kumbh font-medium text-[13px]' >4% from last month</p>
                </div>
            </div>

            <div className='w-[189px] cursor-pointer hover:border-[#E6F8FF] hover:border-4 hover:shadow-lg hover:scale-100 rounded-lg border border-[#D3D3D3] gap-[19px] p-4 h-[204px] flex flex-col'>
                <div className='flex items-center gap-1.5'>
                    <div className='bg-[#CF880017] w-[41px] h-[39px] flex items-center justify-center rounded-[10px]'>
                        <img src={File} alt='file'/>
                    </div>
                </div>
                <div className='flex mt-[23px] items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-[#014E64] font-Kumbh text-[15px] font-semibold'>Manage Media</p>
                    </div>
                    <img src={Arrow} alt='Arrow' />
                </div>
            </div>

            <div className='w-[189px] cursor-pointer hover:border-[#E6F8FF] hover:border-4 hover:shadow-lg hover:scale-100 rounded-lg border border-[#D3D3D3] gap-[19px] p-4 h-[204px] flex flex-col' onClick={() => navigate("/questions")}>
                <div className='flex items-center gap-1.5'>
                    <div className='bg-[#00CF6C14] w-[41px] h-[39px] flex items-center justify-center rounded-[10px]'>
                        <img src={File} alt='file'/>
                    </div>
                </div>
                <div className='flex mt-[23px] items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-[#014E64] font-Kumbh text-[15px] font-semibold'>Add Questions</p>
                    </div>
                    <img src={Arrow} alt='Arrow' />
                </div>
            </div>

        </div>
        <Divider flexItem className='bg-[#EAEAEA] '/>

        <div className='flex flex-col gap-[25px]'>
            <p className='text-[#000] font-hanken font-medium text-[20px]'>Customer List</p>
        </div>

        {/* <>
            <table className='w-full'>
                <tr className='h-[32px]  border-0' >
                    <th className="font-medium pr-2 text-[18px] text-[#000] font-Kumbh text-left">
                        Company Name
                    </th>
                    <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                        Registration Date
                    </th>
                    <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                        Billing Status
                    </th>
                    <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                        Access
                    </th>
                    <th className="font-medium px-2 text-[18px] text-[#818181] font-Kumbh text-left">
                        Subscription Ends
                    </th>
                </tr>
                {allDocs?.map((item, index) => (
                    <tr key={index} className='bg-transparent h-[55px] border-b border-grey-100'>
                        <td className='h-[55px] flex items-center gap-3 '>
                            <p className='text-sm font-kumbh'>{item?.name}</p> 
                        </td>
                        <td className='h-[55px] px-4'>
                            <p className='text-sm font-kumbh'>{item?.date}</p>
                        </td>
                        <td className='h-[55px] px-4'>
                            <p className='text-sm font-kumbh'>{item?.access}</p>
                        </td>
                        <td className='h-[55px] px-4 '>
                            <p className='text-sm font-kumbh'>{item?.status}</p>
                        </td>
                        <td className='h-[55px] px-4 '>
                            <p className='text-sm font-kumbh'>{item?.sub}</p>
                        </td>
                    </tr>
                ))}
            </table>
        </> */}

        {
            loading ?
            <Skeleton variant="rectangular" width={1185} height={1000} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
            :
            <>
                <table className='w-full mb-10'>
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
                        {/* <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                            Actions
                        </th> */}
                    </tr>
                    {companyData?.length > 0 ? companyData?.slice(0, 5)?.map((item, index) => (
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
                                <p className='text-sm font-kumbh'>{item?.industry || "No Data"}</p>
                            </td>
                            <td className='h-[55px] px-4'>
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
                            {/* <td className='h-[55px] px-4 '>
                                <div className='flex items-center gap-2'>
                                    <FaRegEdit className='text-[#818181] w-5 h-5 cursor-pointer' onClick={() => {setOpenModal(true); setData(item)}} />
                                    <MdDeleteForever className='text-[#f00] w-5 h-5 cursor-pointer' onClick={() => {deleteUser(); setData(item)}}/>
                                </div>
                            </td> */}
                        </tr>
                    )) : (
                        <tr className='h-[654px] bg-white border-t border-grey-100'>
                            <td colSpan="8" className="relative">
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='flex flex-col gap-2 items-center'>
                                        {/* <img src={Empty} alt='empty' className='w-[159px] h-[103px]'/> */}
                                        <p className='text-[#0C1322] font-medium text-[20px] font-inter'>No Customers here.</p>
                                        <p>Oops! Nothing to see here.</p>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    )
                }
                </table>
                {/* <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'bg-gray-300' : 'bg-gray-200'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div> */}
            </>
        }


    </div>
  )
}

export default Dashboard