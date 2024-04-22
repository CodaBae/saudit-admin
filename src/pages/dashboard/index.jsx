import React from 'react'
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Company from '../../assets/svg/company.svg'
import Arrow from '../../assets/svg/arrow-right.svg'
import ArrowUp from '../../assets/svg/arrow-up.svg'
import ArrowDown from '../../assets/svg/arrow-down.svg'
import File from '../../assets/svg/file.svg'

const Dashboard = () => {

    const navigate = useNavigate()

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

  return (
    <div className='pt-[25px] flex flex-col gap-[28px]'>
        <p className='font-medium text-[#000] font-Kumbh text-[37px]'>Good Morning, Hanotu</p>
        <div className='flex items-center gap-[25px]'>

            <div className='w-[300px] rounded-lg border border-[#D3D3D3] gap-[19px] p-4 h-[204px] flex flex-col'>
                <div className='flex items-center gap-1.5'>
                    <div className='bg-[#00CF6C14] w-[41px] h-[39px] flex items-center justify-center rounded-[10px]'>
                        <img src={Company} alt='company'/>
                    </div>
                    <p className='font-Kumbh text-[#000] font-medium text-[19px]'>Total Companies</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-[#014E64] font-Kumbh text-[40px] font-medium'>20</p>
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

            <div className='w-[300px] rounded-lg border border-[#D3D3D3] gap-[19px] p-4 h-[204px] flex flex-col'>
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

            <div className='w-[189px] rounded-lg border border-[#D3D3D3] gap-[19px] p-4 h-[204px] flex flex-col'>
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

            <div className='w-[189px] rounded-lg border border-[#D3D3D3] gap-[19px] p-4 h-[204px] flex flex-col' onClick={() => navigate("/questions")}>
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

        <>
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
        </>
    </div>
  )
}

export default Dashboard