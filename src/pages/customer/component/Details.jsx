import React, { useState } from 'react'

const Details = () => {
    const [checkedRows, setCheckedRows] = useState({});

    const handleCheckboxChange = (index) => {
        setCheckedRows(prev => ({ ...prev, [index]: !prev[index] }));
    };


    const allCompanies = [
        {
            name: "Absolute Risk Tec",
            date: "Feb 13, 2024",
            billStatus: "Paid",
            access: "3 Members",
            sub: "March 13, 2025",
            status: "Active",
            login: "7 days ago"
        },
        {
            name: "Holdings Ltd",
            date: "Feb 13, 2024",
            billStatus: "Paid",
            access: "3 Members",
            sub: "March 13, 2025",
            status: "Active",
            login: "7 days ago"
        },
        {
            name: "Heathrow",
            date: "Feb 13, 2024",
            billStatus: "Unpaid",
            access: "3 Members",
            sub: "March 13, 2025",
            status: "inactive",
            login: "7 days ago"
        },
        {
            name: "Oxygen Co",
            date: "Feb 13, 2024",
            billStatus: "Unpaid",
            access: "2 Members",
            sub: "March 13, 2025",
            status: "inactive",
            login: "7 days ago"
        },
        {
            name: "Bellur Co",
            date: "Feb 13, 2024",
            billStatus: "Paid",
            access: "1 Members",
            sub: "March 13, 2025",
            status: "Active",
            login: "7 days ago"
        },
        {
            name: "Holdings Ltd",
            date: "Feb 13, 2024",
            billStatus: "Paid",
            access: "3 Members",
            sub: "March 13, 2025",
            status: "Active",
            login: "7 days ago"
        },
        {
            name: "Oxygen Co",
            date: "Feb 13, 2024",
            billStatus: "Unpaid",
            access: "2 Members",
            sub: "March 13, 2025",
            status: "inactive",
            login: "7 days ago"
        },
    ]

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

        <>
            <table className='w-full'>
                <tr className='h-[32px]  border-0' >
                    <th className="font-medium pr-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                        Company Name
                    </th>
                    <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                        Registration Date
                    </th>
                    <th className="font-medium px-2 text-[18px] text-[#0D0D0D] font-Kumbh text-left">
                        Billing Status
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
                </tr>
                {allCompanies?.map((item, index) => (
                    <tr key={index} className={`${checkedRows[index]  ? "bg-[#EEEEEE]" : "bg-transparent"} h-[55px] border-b border-grey-100`}>
                        <td className='h-[55px] flex items-center gap-3 '>
                            <input 
                                type='checkbox' 
                                className='w-[14px] h-[14px] rounded-lg' 
                                checked={checkedRows[index] || false}
                                onChange={() => handleCheckboxChange(index)} 
                            />
                            <p className='text-sm font-kumbh'>{item?.name}</p> 
                        </td>
                        <td className='h-[55px] px-4'>
                            <p className='text-sm font-kumbh'>{item?.date}</p>
                        </td>
                        <td className='h-[55px] px-4'>
                            <div className={`${item?.billStatus === "Paid" ? "bg-[#EAFFEB] w-[42px]" : "bg-[#FAEDED] w-[57px]"} rounded-xl flex items-center justify-center p-1 `}>
                                <p className='text-sm font-kumbh'>{item?.billStatus}</p>
                            </div>
                        </td>
                        <td className='h-[55px] px-4 '>
                            <p className='text-sm font-kumbh'>{item?.access}</p>
                        </td>
                        <td className='h-[55px] px-4 '>
                            <div className='flex items-center gap-2'>
                                <p className='text-sm font-kumbh'>{item?.sub}</p>
                                <div className={`${item?.status === "Active" ? "bg-[#EAFFEB]" : "bg-[#FAEDED]"} w-[57px] flex items-center justify-center p-1 rounded-xl`}>
                                    <p className='text-sm font-kumbh'>{item?.status}</p>
                                </div>
                            </div>
                        </td>
                        <td className='h-[55px] px-4 '>
                            <p className='text-xs text-[#9E9E9E] font-kumbh'>{item?.login}</p>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    </div>
  )
}

export default Details