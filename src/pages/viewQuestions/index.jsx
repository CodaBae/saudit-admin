import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Divider, Skeleton } from '@mui/material';

import Book from "../../assets/png/book.png";

import ArrowDown from "../../assets/svg/arrowDown.svg";
import ArrowUp from "../../assets/svg/arrowUp.svg";

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
        <div className='flex items-center gap-[25px]'>
            <p className='text-[#000] font-hanken font-medium text-[20px]'>Review Question</p>
            <img src={Book} alt="Book" className="w-[49px] h-[31px]" />
        </div>

        {
            loading ?
            <Skeleton variant="rectangular" width={1185} height={1000} style={{ backgroundColor: 'rgba(0,0,0, 0.06)' }} />
            :
            <>
                <table className='w-full mt-[22px]'>
                    <tr className='h-[32px] border border-x-0 border-[#000] border-t-0' >
                        <th className="font-medium pr-2 text-[18px] text-[#000] font-Kumbh text-left">
                            Question No
                        </th>
                        <th className="font-medium pr-2 text-[18px] text-[#000] font-Kumbh text-left">
                            Sector
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                            Question
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                            Option count
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                            Sub Qsn
                        </th>
                        <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                            Last edited
                        </th>
                    </tr>
                    {allQuestions?.map((item, index) => (
                        <tr key={index} className='bg-transparent h-[55px] border-b border-grey-100 cursor-pointer' onClick={() => navigate(`/viewQuestions/${item?._id}`, { state: item})}>
                            <td className='h-[55px] flex items-center gap-3 '>
                                <p className='text-sm font-kumbh'>Question {index + 1}</p> 
                            </td>
                            <td className='h-[55px] px-4 '>
                                <p className='text-sm font-kumbh'>{item?.sector}</p> 
                            </td>
                            <td className='h-[55px] px-4 '>
                                <p className='text-sm font-kumbh bg-clip-text text-transparent bg-gradient-to-r from-[#000] to-[#fff] '>{item?.text.slice(0, 20)}</p>
                            </td>
                            <td className='h-[55px] px-4'>
                                <div className='bg-[#EBFCED] w-[36px] h-[31px] rounded-lg flex items-center justify-center'>
                                    <p className='text-sm font-kumbh'>{item?.options?.length}</p>
                                </div>
                            </td>
                            <td className='h-[55px] px-4 '>
                                <div className='flex items-center gap-1.5'>
                                    <p className='text-base font-kumbh font-medium '>View</p> 
                                    <img src={ArrowDown} alt='ArrowDown' className='w-[14px] h-[7px]' />
                                </div>
                                  {/* {item?.options[index]?.nextQuestion} */}
                            </td>
                            <td className='h-[55px] px-4 '>
                                <p className='text-base text-[#9F9F9F] font-medium font-kumbh'>2 days ago</p>
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