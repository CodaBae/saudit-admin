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
    const [filteredQuestions, setFilteredQuestions] = useState([])

    const [visibleSubitems, setVisibleSubitems] = useState({});

    const toggleSubitems = (index) => {
        setVisibleSubitems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };


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




    // const checkQuestion = allQuestions?.filter((item) => {
    //     console.log(item?.options, "lamb")
    //     item?.options?.map((i, index) => {
    //         console.log(i, "basket")
    //         // if(i._id === i?.nextQuestion?.nextQuestion._id) {
    //         //     return null
    //         // }
    //         // else {
    //         //     return i
    //         // }
    //     })
    // //    if(item._id === item?.options?.nextQuestion?.nextQuestion._id) {
    // //         return null
    // //    } else {
    // //     return item
    // //    }
    // })

    // Function to recursively collect all subquestion IDs
const collectSubQuestionIds = (questions) => {
    const subQuestionIds = new Set();
   
    const collect = (question) => {
        if (question.options) {
            question.options.forEach(option => {
                if (option.nextQuestion) {
                    subQuestionIds.add(option.nextQuestion._id);
                    // Recursively collect subquestions of the nextQuestion
                    collect(option.nextQuestion);
                }
            });
        }
    };
   
    questions.forEach(question => collect(question));
    return subQuestionIds;
};

// Collect all subquestion IDs
const subQuestionIds = collectSubQuestionIds(allQuestions);

// Filter out duplicates and subquestions
const uniqueQuestions = [];
const seenTexts = new Set();

allQuestions.forEach(question => {
    if (!subQuestionIds.has(question._id) && !seenTexts.has(question.text)) {
        uniqueQuestions.push(question);
        seenTexts.add(question.text);
    }
});

console.log(JSON.stringify(uniqueQuestions, null, 2));



    // console.log(checkQuestion, "checkQuestion")

    const renderSubQuestions = (nextQuestion, baseIndex) => {
        if (!nextQuestion) return null;

        return (
            <React.Fragment key={nextQuestion?._id}>
                <tr className='bg-transparent h-[55px] border-b border-grey-100 cursor-pointer' >
                    <td className='h-[55px] flex items-center gap-3 '>
                        <p className='text-sm font-kumbh'>Question {`1.${baseIndex + 1}`}</p>
                    </td>
                    <td className='h-[55px] px-4 '>
                        <p className='text-sm font-kumbh'>{nextQuestion.sector}</p>
                    </td>
                    <td className='h-[55px] px-4 '>
                        <p className='text-sm font-kumbh bg-clip-text text-transparent bg-gradient-to-r from-[#000] to-[#fff]'>{nextQuestion.text.slice(0, 20)}</p>
                    </td>
                    <td className='h-[55px] px-4'>
                        <div className='bg-[#EBFCED] w-[36px] h-[31px] rounded-lg flex items-center justify-center'>
                            <p className='text-sm font-kumbh'>{nextQuestion?.options?.length}</p>
                        </div>
                    </td>
                    <td className='h-[55px] px-4 '>
                        <p className='text-base font-kumbh font-medium '>No sub Qsn</p>
                        {/* <div className='flex items-center gap-1.5'>
                            <p className='text-base font-kumbh font-medium '>View</p>
                            <img src={ArrowDown} alt='ArrowDown' className='w-[14px] h-[7px]' />
                        </div> */}
                    </td>
                    <td className='h-[55px] px-4 '>
                        <p className='text-base text-[#9F9F9F] font-medium font-kumbh'>2 days ago</p>
                    </td>
                    <td className='h-[55px] px-4 ' onClick={() => navigate(`/viewQuestions/${nextQuestion._id}`, { state: nextQuestion })}>
                        <div className='flex items-center gap-1.5'>
                            <p className='text-base font-kumbh font-medium '>View</p>
                        </div>
                    </td>
                </tr>
                {nextQuestion?.options?.map((option, subIndex) =>
                    renderSubQuestions(option?.nextQuestion?.nextQuestion, baseIndex + subIndex + 1)
                )}
            </React.Fragment>
        );
    };

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
                            <thead>
                                <tr className='h-[32px] border border-x-0 border-[#000] border-t-0'>
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
                                    <th className="font-medium px-2 text-[18px] text-[#000] font-Kumbh text-left">
                                        View Qsn
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {uniqueQuestions?.map((item, index) => {

                                    return (
                                        <React.Fragment key={index}>
                                            <tr className='bg-transparent h-[55px] border-b border-grey-100 cursor-pointer'>
                                                <td className='h-[55px] flex items-center gap-3 '  >
                                                    <p className='text-sm font-kumbh'>Question {index + 1}</p>
                                                </td>
                                                <td className='h-[55px] px-4 '>
                                                    <p className='text-sm font-kumbh'>{item?.sector}</p>
                                                </td>
                                                <td className='h-[55px] px-4 '>
                                                    <p className='text-sm font-kumbh bg-clip-text text-transparent bg-gradient-to-r from-[#000] to-[#fff]'>{item?.text?.slice(0, 20)}</p>
                                                </td>
                                                <td className='h-[55px] px-4'>
                                                    <div className='bg-[#EBFCED] w-[36px] h-[31px] rounded-lg flex items-center justify-center'>
                                                        <p className='text-sm font-kumbh'>{item?.options?.length}</p>
                                                    </div>
                                                </td>
                                                <td className='h-[55px] px-4 ' onClick={() => item.options.some(option => option.nextQuestion) && toggleSubitems(index)}>
                                                    <div className='flex items-center gap-1.5'>
                                                        {item.options.some(option => option?.nextQuestion?.nextQuestion) ? (
                                                            <>
                                                                <p className='text-base font-kumbh font-medium '>View</p>
                                                                <img src={ArrowDown} alt='ArrowDown' className={`w-[14px] h-[7px] transform ${visibleSubitems[index] ? 'rotate-180' : ''}`} />
                                                            </>
                                                        ) : (
                                                            <p className='text-base font-kumbh font-medium '>No sub Qsn</p>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className='h-[55px] px-4 '>
                                                    <p className='text-base text-[#9F9F9F] font-medium font-kumbh'>2 days ago</p>
                                                </td>
                                                <td className='h-[55px] px-4 ' onClick={() => navigate(`/viewQuestions/${item?._id}`, { state: item })}>
                                                    <div className='flex items-center gap-1.5'>
                                                        <p className='text-base font-kumbh font-medium '>View</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            {visibleSubitems[index] && item?.options.map((option, subIndex) =>
                                                renderSubQuestions(option?.nextQuestion?.nextQuestion, subIndex)
                                            )}
                                        </React.Fragment>
                                    )
                                })}
                            </tbody>
                        </table>
                    </>
            }
        </div>
    )
}

export default ViewQuestions