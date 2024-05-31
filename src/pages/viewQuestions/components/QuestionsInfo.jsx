import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { Switch } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import ModalPop from '../../../components/modalPop';

import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"
import Check from "../../../assets/svg/check.svg"
import Plus from "../../../assets/png/plus_icon.png"
import UploadEvidence from './UploadEvidence';
import axios from 'axios';
import { toast } from 'react-toastify';



const QuestionsInfo = ({ }) => {
  const [option, setOption] = useState("")
  const [subQuestionChange, setSubQuestionChange] = useState("")
  const [showTip, setShowTip] = useState(false)
  const [addSubQsn, setAddSubQsn] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [addNewOption, setAddNewOption] = useState([{ id: 1, optionText: "", optionPoints: 0, optionTips: "", evidenceTitle: "", optionEviQuestion: "", optionKeyword: "", optionImageName: "" }]);
  const [optionTitle, setOptionTitle] = useState("")
  const [optionTipChange, setOptionTipChange] = useState("")
  const [points, setPoints] = useState(0)
  const [showAddQuestion, setShowAddQuestion] = useState(false)
  const [getOptionId, setGetOptionId] = useState()
  const [getQuestionId, setGetQuestionId] = useState()

  const handleTitleChange = (e) => {
      setOptionTitle(e.target.value)
  }

  const handlePointsChange = (e) => {
    setPoints(e.target.value)
  }

  const navigate = useNavigate()

  const { state } = useLocation()

  const stateData = state

  console.log(state, "state")

  const handleTipChange = (e) => {
    setOptionTipChange(e.target.value)
  }

  const eviTitle = localStorage.getItem("title")
  console.log(eviTitle, "eviTitle")

  const eviWord = localStorage.getItem("word")
  console.log(eviWord, "eviTitle")

  const eviQuestion = localStorage.getItem("question")
  console.log(eviQuestion, "eviTitle")



  const submitNextQuestion = (option) =>  async () => { 
    console.log(option, "same")
    const data= {
        nextQuestionId: getQuestionId,
    }
    await axios.put(`https://saudit-jheg.onrender.com/surveys/questions/${state?._id}/${option}/nextQuestion`, data)
    .then((res) => {
        console.log(res, "dodo")
        toast(`${res?.data?.message}`, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
        })
    })
    .catch((err) => {
        console.log(err, "err")
        toast("Error", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
        })
    }) 
  }
  
  const submitForm = async () => {
    const data = {
      sector: state?.sector, 
      subSector: state?.subSector,  
      type: state?.type,
      industryFuntion: state?.industryFuntion,  
      userFuntion: state?.userFuntion,  
      selectAssessmentCat: state?.selectAssessmentCat,  
      selectComplianceCat: state?.selectComplianceCat,  
      text: optionTitle,
      tips: optionTipChange,
      point: points,
      options: addNewOption.map(option => ({
        text: option.optionText,
        point: Number(option.optionPoints),
        evd: "https://res.cloudinary.com/code-idea/image/upload/v1715177702/GTR_Sustainability_Report_2022_m53ppm.pdf",
        evdText: option.optionEviQuestion,
        keyWord: option.optionKeyword,
        tips: option.optionTips,
      }))
    }
    await axios.post("https://saudit-jheg.onrender.com/surveys/questions", data, {
      headers: {
        "Content-Type": 'application/json',
      }
    })
    .then((res) => {
      console.log(res, "resgo")
      setGetQuestionId(res?.data?.question?._id)
      toast(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    })
    .catch((err) => {
      console.log(err, 'errgo')
      toast(`${err?.response?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    })

  }

  // const handleSubQuestionChange = (e) => {
  //   setSubQuestionChange(e.target.value)
  // }

  // const addOption = () => {
  //   // setAddNewOption([...addNewOption, { id: sections.length + 1 }]);
  //   // Calculate the ID for the new option
  //     const newOptionId = addNewOption.length + 1;
  //     // Create a new option object
  //     const newOption = { id: newOptionId, subQuestions: [] };
  //     // Update the options state to include the new option
  //     setAddNewOption([...addNewOption, newOption]);
  // };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

//   const handleDelete = () => {
//     onDelete(choiceId);
// };



const handleOptionChange = (optionId, e) => {
  const newOptions = addNewOption.map(option =>
    option.id === optionId ? { ...option, optionText: e.target.value } : option
  );
  setAddNewOption(newOptions);
};

const addOption = () => {
    const newOptionId = addNewOption.length + 1;
    const newOption = { id: newOptionId, optionText: '', optionPoints: "", optionTip: "" };
    setAddNewOption([...addNewOption, newOption]);
};

// const addSubQsnFunc = (optionId) => {
//   const updatedOptions = addNewOption.map(option => {
//     if (option.id === optionId) {
//       const newSubQuestionId = option.subQuestions.length + 1;
//       const newSubQuestion = { id: newSubQuestionId, subQuestionText: '' };
//       return { ...option, subQuestions: [...option.subQuestions, newSubQuestion] };
//     }
//     return option;
//   });
//   setAddNewOption(updatedOptions);
// };

// const handleSubQuestionChange = (optionId, subQuestionId, e) => {
//   const updatedOptions = addNewOption.map(option => {
//     if (option.id === optionId) {
//       const updatedSubQuestions = option.subQuestions.map(subQuestion =>
//         subQuestion.id === subQuestionId ? { ...subQuestion, subQuestionText: e.target.value } : subQuestion
//       );
//       return { ...option, subQuestions: updatedSubQuestions };
//     }
//     return option;
//   });
//   setAddNewOption(updatedOptions);
// };

// Find the option in the options array based on the optionIndex
  // setAddSubQsn([...addSubQsn, { id: addSubQsn.length + 1 }]);

  const handleSubmit = () => {
    submitForm()
  }

  const handleAddSubQuestions = (optionId) => {
    navigate("/addSubQuestions", { state: { optionId, ...state } });
};

  

  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10 flex flex-col animate__animated animate__fadeInUp bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
       <div className='flex justify-between items-center'>
            <p className='font-Kumbh'></p>
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' className='cursor-pointer'  />
            </div>
        </div>

      <div className='flex flex-col gap-[11px] mt-[20px]'>
          <div className='flex items-center gap-2 '>
            <p className='font-medium font-Kumbh'>1.</p>
            <input
                type='text'
                name='optionTitle'
                value={state?.text}
                className='w-[931px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-normal text-base'
                placeholder='Question'
            />
          </div>
            { state?.options?.map((option, index) => {
                console.log(option, 'option')
            
                return (
                    <div key={option._id} className='flex flex-col'>
                        <p className='font-hanken text-sm'>Option {index + 1}</p>
                        <div className='flex items-center gap-2 mt-4 pl-10'>
                            <img src={Check} alt='check' />
                            <input
                                type='text'
                                className='w-[745px] bg-[#fff] p-4 outline-none text-[#363636] h-[50px] font-hanken font-normal text-[17px]'
                                placeholder={`Option ${index + 1}`}
                                value={option?.text}
                                onChange={(e) => handleOptionChange(option.id, e)}
                            />
                            <button className='border border-[#000] rounded-sm flex items-center gap-1 w-[62px] h-[50px] p-2' onClick={() => setShowModal(true)}>
                                <img src={Plus} className="text-[#000] w-[11px] h-[11px]"/>
                                <p className='text-[#000] font-medium text-sm font-Kumbh'>Evd</p>
                            </button>
                            <button className='bg-[#00BA78] flex items-center gap-1 w-[62px] h-[50px] rounded-sm p-2' onClick={() => setShowTip(true)}>
                                <FaPlus className="text-[#fff] w-[11px] h-[11px] font-Kumbh"/>
                                <p className='text-[#fff]'>Tip</p>
                            </button>
                            {/* Additional buttons and inputs for tips and sub-questions */}
                        </div>
                        {
                            option?.tips && 
                            <div className='flex justify-end mt-[20px] mr-8'>
                                <div className='flex gap-[24px] items-center'>
                                <div className='w-[315px] h-auto overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                <p className='font-Kumbh text-xs font-semibold'>Upload: <span className='font-normal'>{`${option?.evd}`}</span></p>
                                </div>
                                <div className='w-[210px] h-auto overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                    <p className='font-Kumbh text-xs font-semibold'>Keyword: <span className='font-normal'>{`${option?.keyWord}`}</span></p>
                                </div>
                                <div className='w-[315px] h-auto overflow-auto  rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                    <p className='font-Kumbh font-semibold text-xs'>Suggested Evidence: <span className='font-normal'>{option?.text}</span></p>
                                </div>

                                </div>
                            </div>
                        }
                        {
                          option?.tips &&
                            <div className='mt-[24px] pl-[160px]'>
                                <textarea
                                  className='w-[792px] h-[83px] bg-[#fff] p-4 outline-none'
                                  placeholder='Type tip...'
                                  rows="5"
                                  value={option?.tips}
                                  onChange={(e) => handleTipChange(e)}
                                >
                                </textarea>
                            </div>
                        }
                        <div className='flex justify-end mr-8 mt-3'>
                            <div className='flex items-center gap-2'>
                                <p className='font-medium text-[#000000] font-Kumbh text-[14px]'>Points:</p>
                                <div className='bg-[#fff] w-[80px] h-[26px] flex items- justify-center'>
                                <input 
                                    className='font-Kumbh w-full outline-none p-2 text-[#000] bg-transparent'
                                    placeholder={option?.point || 0}
                                    onChange={(e) => handlePointsChange(e)}
                                    name='point'
                                    type='number'
                                    value={option?.points}
                                />
                                </div>
                            </div>
                        </div>

                        {/* {showAddQuestion && addNewOption.map((item, index) => (
                            <div key={item.id} className='flex mt-4  pl-[160px] flex-col gap-4'>
                              <p className='font-hanken text-lg font-medium text-[#000]'>Sub Questions</p>
                                <div className='flex items-center gap-2 '>
                                    <p className='font-medium font-Kumbh'>1.</p>
                                    <input
                                        type='text'
                                        name='optionTitle'
                                        value={optionTitle}
                                        className='w-[781px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-normal text-base'
                                        placeholder='Question'
                                        onChange={(e) => handleTitleChange(e)}
                                    />
                                </div>
                                <p className='font-hanken text-sm'>Option {index + 1}</p>
                                <div className='flex items-center gap-2 mt-4 pl-10'>
                                    <img src={Check} alt='check' />
                                    <input
                                        type='text'
                                        className='w-[590px] bg-[#fff] p-4 outline-none text-[#363636] h-[50px] font-hanken  font-normal text-[17px]'
                                        placeholder={`Option ${index + 1}`}
                                        value={item.optionText}
                                        onChange={(e) => handleOptionChange(item.id, e)}
                                    />
                                    <button className='border border-[#000] rounded-sm flex items-center gap-1 w-[62px] h-[50px] p-2' onClick={() => setShowModal(true)}>
                                        <img src={Plus} className="text-[#000] w-[11px] h-[11px]"/>
                                        <p className='text-[#000] font-medium text-sm font-Kumbh'>Evd</p>
                                    </button>
                                    <button className='bg-[#00BA78] flex items-center gap-1 w-[62px] h-[50px] rounded-sm p-2' onClick={() => setShowTip(true)}>
                                        <FaPlus className="text-[#fff] w-[11px] h-[11px] font-Kumbh"/>
                                        <p className='text-[#fff]'>Tip</p>
                                    </button>
                                    {/* Additional buttons and inputs for tips and sub-questions 
                                </div>
                                <div className='flex justify-end mr-8 mt-3'>
                                    <div className='flex items-center gap-2'>
                                        <p className='font-medium text-[#000000] font-Kumbh text-[14px]'>Points:</p>
                                        <div className='bg-[#fff] w-[80px] h-[26px] flex items- justify-center'>
                                        <input 
                                            className='font-Kumbh w-full outline-none p-2 text-[#000] bg-transparent'
                                            placeholder={option?.point || 0}
                                            onChange={(e) => handlePointsChange(e)}
                                            name='point'
                                            type='number'
                                            value={option?.point}
                                        />
                                        </div>
                                    </div>
                                </div>
                                {
                                    item && item?.optionKeyword &&
                                    <div className='flex justify-end mt-[20px] mr-8'>
                                        <div className='flex gap-[24px] items-center'>
                                        <div className='w-[215px] h-auto overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                        <p className='font-Kumbh text-xs font-semibold'>Upload: <span className='font-normal'>{`${item?.optionImageName?.name}`}</span></p>
                                        </div>
                                        <div className='w-[210px] h-auto overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                            <p className='font-Kumbh text-xs font-semibold'>Keyword: <span className='font-normal'>{`${item?.optionKeyword}`}</span></p>
                                        

                                        </div>
                                        <div className='w-[215px] h-auto overflow-auto  rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                            <p className='font-Kumbh font-semibold text-xs'>Suggested Evidence: <span className='font-normal'>{item?.optionEviQuestion}</span></p>
                                        </div>

                                        </div>
                                    </div>
                                }
                                {
                                    showTip &&
                                    <div className='mt-[24px] pl-[110px]'>
                                        <textarea
                                        className='w-[692px] h-[83px] bg-[#fff] p-4 outline-none'
                                        placeholder='Type tip...'
                                        rows="5"
                                        value={optionTipChange}
                                        onChange={(e) => handleTipChange(e)}
                                        >
                                        </textarea>
                                    </div>
                                }
                            </div>
                        ))} */}
                        {/* <div onClick={addOption} className='flex items-center justify-end mt-1 mr-8 mb-4'>
                            <GoPlus className="text-[#04BC7B] text-[13px] font-medium font-Kumbh" />
                            <p className='text-[#04BC7B] text-[17px] font-medium font-Kumbh cursor-pointer'>Add Option</p>
                        </div> onClick={() => {optionTitle ? handleSubmit() : setShowAddQuestion(true)}} */}
                        <div className='flex justify-between items-center mt-4'>
                          <div onClick={() => handleAddSubQuestions(option?._id)} className='flex items-center mt-1.5  pl-12'> {/* addSubQsnFunc(item.id) */}
                              <GoPlus className="text-[#474747] text-[13px]  font-medium font-Kumbh"/>
                              <p className='text-[#474747] text-[13px] font-Kumbh cursor-pointer'>Add Sub Question</p>
                          </div>
                          {/* <button className='w-[100px] p-2 bg-[#04BC7B] mr-8' onClick={submitNextQuestion(option?._id)}>
                              <p className='text-[#fff]'>Submit</p>
                          </button> */}
                        </div>
                                    
                    </div>
                )
            }) 
        }
    </div>
        <hr />
        <div className='flex items-center mt-3 justify-between'>
          {/* <div className='flex items-center gap-2'>
            <p className='font-medium text-[#000000] font-Kumbh text-[14px]'>Points:</p>
            <div className='bg-[#fff] w-[34px] h-[26px] flex items- justify-center'>
              <input 
                className='font-Kumbh w-full outline-none p-2 text-[#000] bg-transparent'
                placeholder='0'
                onChange={(e) => handlePointsChange(e)}
                name='point'
                type='number'
                value={points}
              />
            </div>
          </div> */}

          <div className='flex items-center gap-2'>
            {/* <p className='text-[#000] font-Kumbh font-medium text-[14px]'>Evidence</p>
            <Switch size="small"  onChange={onChange}/> */}
          </div>
        </div>

        <ModalPop isOpen={showModal}>
          <UploadEvidence 
            handleClose={() => setShowModal(false)} 
            setAddNewOption={setAddNewOption} 
            addNewOption={addNewOption} 
          />
        </ModalPop>
      </div>
  )
}

export default QuestionsInfo