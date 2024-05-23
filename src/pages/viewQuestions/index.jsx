import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const ViewQuestions = () => {
    const [allQuestions, setAllQuestions] = useState([])
    const [loading, setLoading] = useState(false)


    const navigate = useNavigate()

    const getAllQuestions = async () => {
        setLoading(true)
        await axios.get("https://saudit-jheg.onrender.com/surveys/questions", null, {
            headers: {
                "Content-Type": 'application/json',
            }
        })
        .then((res) => {
            console.log(res, "res")
            setLoading(false)
            setAllQuestions(res?.data)
        })
        .catch((err) => {
            console.log(err, "err")
            setLoading(false)
        })
    }

    useEffect(() => {
        getAllQuestions()
    }, [])

  return (
    <div className='pt-[25px] flex flex-col'>
        <div className='flex flex-col gap-[25px]'>
            <p className='text-[#000] font-hanken font-medium text-[20px]'>Questions List</p>
        </div>

        {
            loading ?
            <Skeleton variant="rectangular" width={1185} height={1000} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
            :
            <>
                <table className='w-full'>
                    <tr className='h-[32px]  border-0' >
                        <th className="font-medium pr-2 text-[18px] text-[#000] font-Kumbh text-left">
                            Sector
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                            SubSector
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                            User Function
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                            Accessment
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#818181] font-Kumbh text-left">
                            Compliance
                        </th>
                    </tr>
                    {allQuestions?.map((item, index) => (
                        <tr key={index} className='bg-transparent h-[55px] border-b border-grey-100 cursor-pointer' onClick={() => navigate(`/viewQuestions/${item?._id}`, { state: item})}>
                            <td className='h-[55px] flex items-center gap-3 '>
                                <p className='text-sm font-kumbh'>{item?.sector}</p> 
                            </td>
                            <td className='h-[55px] px-4'>
                                <p className='text-sm font-kumbh'>{item?.subSector}</p>
                            </td>
                            <td className='h-[55px] px-4'>
                                <p className='text-sm font-kumbh'>{item?.userFuntion}</p>
                            </td>
                            <td className='h-[55px] px-4 '>
                                <p className='text-sm font-kumbh'>{item?.selectAssessmentCat}</p>
                            </td>
                            <td className='h-[55px] px-4 '>
                                <p className='text-sm font-kumbh'>{item?.selectComplianceCat}</p>
                            </td>
                        </tr>
                    ))}
                </table>
            </>
        }
    </div>
  )
}

export default ViewQuestions