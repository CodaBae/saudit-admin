import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaMinus, FaPlus, FaRegEdit } from "react-icons/fa";
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
import { CgSpinner } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';



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
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(false)

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

  
  const handleSubmitEditForm = async () => {
    setLoading(true)
    const data = {
      sector: state?.sector, 
      subSector: state?.subSector,  
      type: state?.type,
      industryFuntion: state?.industryFuntion,  
      userFuntion: state?.userFuntion,  
      selectAssessmentCat: state?.selectAssessmentCat,  
      selectComplianceCat: state?.selectComplianceCat,  
      standards: state?.standards || "",
      international: state?.international || "",  
      general: state?.general || "",  
      complianceTitle: state?.complianceTitle || "",  
      text: optionTitle,
      tips: state?.tips,
      point: state?.point,
      options: state?.options?.map(option => ({
        text: option.text,
        point: Number(option.point),
        evd: option?.evd,
        evdText: option.evdText,
        keyWord: option.keyWord,
        tips: option.tips,
      }))
    }
    await axios.patch(`https://saudit-jheg.onrender.com/surveys/questions/${state?._id}`, data, {
      headers: {
        "Content-Type": 'application/json',
      }
    })
    .then((res) => {
      console.log(res, "resgo")
      setLoading(false)
      toast(`Questions Updated Successfully`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
      navigate("/viewQuestions")
    })
    .catch((err) => {
      console.log(err, 'errgo')
      setLoading(false)
      toast(`${err?.response?.data}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    })

  }

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleRemove = (optionId, e) => {
    const newOptions = addNewOption.filter(option => option.id !== optionId);
    setAddNewOption(newOptions);
  }

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

  // const handleSubmit = () => {
  //   submitForm()
  // }

  const handleAddSubQuestions = (optionId) => {
    navigate("/addSubQuestions", { state: { optionId, ...state } });
  };

  const handleDelete = async () => {
    await axios.delete(`https://saudit-jheg.onrender.com/surveys/questions/${state?._id}`)
    .then((res) => {
      console.log(res, "apako")
      toast(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
      navigate("/viewQuestions")
    })
    .catch((err) => {
      console.log(err, "err")
      toast(`${err?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    })
  }

  const handleEdit = () => {
    setEdit(prev => !prev)
  }

 
  

  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10 flex flex-col animate__animated animate__fadeInUp bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
       <div className='flex justify-between items-center'>
            <p className='font-Kumbh'></p>
            <div className='flex items-center gap-[37px]'>
              <FaRegEdit className='text-[#818181] w-[21.5px] h-[21.5px] cursor-pointer' onClick={() => handleEdit()}/>
              {/* <img src={Copy} alt='Copy' /> */}
              <img src={Bin} alt='Bin' className='cursor-pointer' onClick={() => handleDelete()}  />
            </div>
        </div>

      <div className='flex flex-col gap-[11px] mt-[20px]'>
          <div className='flex items-center gap-2 '>
            <p className='font-medium font-Kumbh'>1.</p>
            <input
                type='text'
                name='optionTitle'
                value={optionTitle || state?.text}
                onChange={(e) => setOptionTitle(e.target.value)}
                className={`${edit ? "bg-[#fff]" : "bg-transparent"} w-[931px]  p-4 outline-none text-[#000] h-[50px] font-Kumbh font-normal text-base`}
                placeholder='Question'
            />
          </div>
            { state?.options?.map((option, index) => {
                console.log(option, 'option')
                const url = option?.evd 
                let parts = url.split('/');
                let fileName = parts[parts.length - 1];

            
                return (
                    <div key={option._id} className='flex flex-col'>
                        <p className='font-hanken text-sm'>Option {index + 1}</p>
                        <div className='flex items-center gap-2 mt-4 pl-10'>
                            <img src={Check} alt='check' />
                            <input
                                type='text'
                                className={`${edit ? "bg-[#fff]" : " bg-transparent"} w-[745px] p-4 outline-none text-[#363636] h-[50px] font-hanken font-normal text-[17px]`}
                                placeholder={`Option ${index + 1}`}
                                value={option?.text}
                                contentEditable
                                onChange={(e) => handleOptionChange(option.id, e)}
                            />
                            <button className={`${edit ? "flex" : "hidden"} border border-[#000] rounded-sm items-center gap-1 w-[62px] h-[50px] p-2`}  onClick={() => setShowModal(true)}>
                                <img src={Plus} className="text-[#000] w-[11px] h-[11px]"/>
                                <p className='text-[#000] font-medium text-sm font-Kumbh'>Evd</p>
                            </button>
                            <button className={`${edit ? "flex" : "hidden"} bg-[#00BA78] items-center gap-1 w-[62px] h-[50px] rounded-sm p-2`} onClick={() => setShowTip(true)}>
                                <FaPlus className="text-[#fff] w-[11px] h-[11px] font-Kumbh"/>
                                <p className='text-[#fff]'>Tip</p>
                            </button>
                            <button className={`${edit ? "flex" : "hidden"} bg-[#f00] flex items-center gap-1 w-[62px] h-[50px] rounded-sm p-2 `} onClick={(e) => handleRemove(item.id, e)}>
                              <FaMinus className="text-[#fff] w-[20px] h-[11px] font-Kumbh"/>
                              <p className='text-[#fff]'>Delete</p>
                            </button>
                            {/* Additional buttons and inputs for tips and sub-questions */}
                        </div>
                        {
                            option?.tips && 
                            <div className='flex justify-end mt-[20px] mr-8'>
                                <div className='flex gap-[24px] items-center'>
                                <div className='w-[315px] h-auto gap-1 overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                  {/* <p className='font-Kumbh text-xs font-semibold'>Upload: <span className='font-normal'>{`${fileName}`}</span></p> */}
                                  <p className='font-hanken text-[#7B7B7B] text-xs font-normal cursor-pointer' onClick={() => window.open(option?.evd, "blank")}>{`${fileName}`}</p>
                                  <div className='flex items-center justify-between'>
                                    <div className='w-[260px] rounded-[5px] bg-[#014E64] h-1'></div>
                                    <IoClose className={`${edit ? "flex" : "hidden"} text-[14px] text-[#817B7B]`} />
                                  </div>
                                </div>
                                <div className='w-[210px] h-auto overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                    <p className='font-Kumbh text-xs font-semibold'>Keyword: <span className='font-normal'>{`${option?.keyWord}`}</span></p>
                                </div>
                                <div className='w-[315px] h-auto overflow-auto  rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                    <p className='font-Kumbh font-semibold text-xs'>Suggested Evidence: <span className='font-normal'>{option?.evdText}</span></p>
                                </div>

                                </div>
                            </div>
                        }
                        {
                          option?.tips &&
                            <div className='mt-[24px] pl-[160px]'>
                                <textarea
                                  className={`${edit ? "flex" : "hidden"} w-[792px] h-[83px] bg-[#fff]  p-4 outline-none`}
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
                                <div className={`${edit ? "bg-[#fff]" : "bg-transparent"} w-[80px] h-[26px] flex items- justify-center`}>
                                  <input 
                                      className='font-Kumbh w-full outline-none p-2 text-[#000] bg-transparent'
                                      placeholder={option?.point || 0}
                                      onChange={(e) => handlePointsChange(e)}
                                      name='point'
                                      type='number'
                                      contentEditable
                                      value={option?.points}
                                  />
                                </div>
                            </div>
                        </div>

                       
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

          <div className='flex items-center mt-3 justify-between'>
            {/* <div onClick={() => handleSubmitForm()} className='flex items-center mt-1.5  pl-12'>
                <GoPlus className="text-[#474747] text-[13px]  font-medium font-Kumbh"/>
                <p className='text-[#474747] text-[13px] font-Kumbh cursor-pointer'>Add Sub Question</p>
            </div> */}
              
            <button className='w-[100px] p-2 bg-[#04BC7B] flex items-center justify-center mr-8' onClick={() => handleSubmitEditForm()}>
              {
                loading ?
                <CgSpinner className='animate-spin text-lg text-[#fff]' />
                :
                <p className='text-[#fff]'>Submit</p>
              }
            </button>
        
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