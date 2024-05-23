import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { Switch } from 'antd';
import { useLocation } from 'react-router-dom';

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
  const [addNewOption, setAddNewOption] = useState([{ id: 1, subQuestions: [] }]);
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

  const { state } = useLocation()

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
    console.log(option)
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
      options: [
        {
          text: `${addNewOption[0]?.optionText}`,
          evd: "No evidence",
          evdText:`${eviQuestion}`,
          tips: `${eviWord}`
        },
      ]
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



// const addSubQsnFunc = (optionIndex) => {
//   console.log(optionIndex, "fasel")
//    const optionToUpdate = addNewOption.find((_, index) => index === optionIndex);
//   if (optionToUpdate) {
//     // Calculate the ID for the new sub-question
//     const newSubQuestionId = optionToUpdate.subQuestions.length + 1;
//     // Create a new sub-question object
//     const newSubQuestion = { id: newSubQuestionId };
//     // Update the subQuestions array of the selected option to include the new sub-question
//     const updatedOption = {
//       ...optionToUpdate,
//       subQuestions: [...optionToUpdate.subQuestions, newSubQuestion],
//     };
//     // Update the options state with the updated option
//     const updatedOptions = addNewOption.map((opt, index) =>
//       index === optionIndex ? updatedOption : opt
//     );
//     console.log(updatedOptions, "updatedOptions")
//     setAddNewOption(updatedOptions);
//   }
// };



const handleOptionChange = (optionId, e) => {
  const newOptions = addNewOption.map(option =>
    option.id === optionId ? { ...option, optionText: e.target.value } : option
  );
  setAddNewOption(newOptions);
};

const addOption = () => {
    const newOptionId = addNewOption.length + 1;
    const newOption = { id: newOptionId, optionText: '', subQuestions: [] };
    setAddNewOption([...addNewOption, newOption]);
};

const addSubQsnFunc = (optionId) => {
  const updatedOptions = addNewOption.map(option => {
    if (option.id === optionId) {
      const newSubQuestionId = option.subQuestions.length + 1;
      const newSubQuestion = { id: newSubQuestionId, subQuestionText: '' };
      return { ...option, subQuestions: [...option.subQuestions, newSubQuestion] };
    }
    return option;
  });
  setAddNewOption(updatedOptions);
};

const handleSubQuestionChange = (optionId, subQuestionId, e) => {
  const updatedOptions = addNewOption.map(option => {
    if (option.id === optionId) {
      const updatedSubQuestions = option.subQuestions.map(subQuestion =>
        subQuestion.id === subQuestionId ? { ...subQuestion, subQuestionText: e.target.value } : subQuestion
      );
      return { ...option, subQuestions: updatedSubQuestions };
    }
    return option;
  });
  setAddNewOption(updatedOptions);
};

// Find the option in the options array based on the optionIndex
  // setAddSubQsn([...addSubQsn, { id: addSubQsn.length + 1 }]);

  const handleSubmit = () => {
    submitForm()
  }
  

  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10 flex flex-col animate__animated animate__fadeInUp bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
       <div className='flex justify-between items-center'>
            <p className='font-Kumbh'></p>
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' className='cursor-pointer'  />
            </div>
        </div>
        {/* <div className='flex flex-col gap-[11px] mt-[20px]'>
          <div className='flex items-center gap-2 '>
            <p className='font-medium font-Kumbh'>1.</p>
            <input 
                type='text'
                className='w-[931px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[22px]' 
                placeholder='Question'
                onChange={(e) => handleTitleChange(e)}
              />
          </div>
          <div>
            {
              addNewOption.map((item, index) => (
                <div key={index}>
                  <div className='flex items-center gap-2 pl-10'>
                    <img src={Check} alt='check' />
                    <input 
                      type='text'
                      className='w-[827px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[22px]' 
                      placeholder={`Option ${index + 1}`}
                      onChange={(e) => handleOptionChange(e)}
                    />
                    <button className='bg-[#00BA78] flex items-center gap-1 w-[50px] h-[55px] p-2' onClick={() => setShowTip(true)}>
                      <FaPlus className="text-[#fff] w-[11px] h-[11px] font-Kumbh"/>
                      <p className='text-[#fff]'>Tip</p>
                    </button>
                  </div>
                  {
                    showTip &&
                      <div className='mt-[24px] pl-[160px]'>
                        <textarea
                          className='w-[792px] h-[83px] bg-[#fff] p-4 outline-none'
                          placeholder='Type tip...'
                          rows="5"
                          onChange={(e) => handleTipChange(e)}
                        >
                        </textarea>
                      </div>
                  }
                  {  
                    addNewOption?.map(( item, index) => (
                      // console.log(item, "item")
                      <div key={index}> 
                        {
                          item?.subQuestions?.map((subItem, index) => {
                            console.log(subItem, "subItem")
                            return (
                            <div className='flex  gap-[8px] mt-[22px] pl-12' key={index}>
                              <div className='bg-[#fff] w-[46px] h-[50px] flex items-center justify-center'>
                                <p className='text-[#000] font-medium font-Kumbh'>{`1.${subItem?.id}`}</p>
                              </div>
                              <div className='flex flex-col'>
                                <input 
                                  type='text'
                                  className='w-[850px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[14px]' 
                                  placeholder='Sub question 1.1'
                                  onChange={(e) => handleSubQuestionChange(e)}
                                />
                              </div>
                            </div>
                            )
  
                          })
                        }
                      </div>
                    ))
                  }
                  <div className='flex items-center mt-1.5  pl-12' onClick={() => addSubQsnFunc(index)}> {/*    addSubQsnFunc()
                    <GoPlus className="text-[#474747] text-[13px] font-Kumbh"/>
                    <p className='text-[#474747] text-[13px] font-Kumbh cursor-pointer'>Add Sub Qsn</p>
                  </div>
                </div>
              ))
            }
          </div>
         
        
          <div className='flex items-center justify-end mt-1 mr-8 mb-[100px]' onClick={addOption}>
            <GoPlus className="text-[#04BC7B] text-[13px]  font-medium font-Kumbh"/>
            <p className='text-[#04BC7B] text-[17px] font-medium font-Kumbh cursor-pointer'>Add Option</p>
          </div>

        </div> */}

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
                // const { _id } = item
                // setGetOptionId(_id)
                console.log(option, 'option')
            
                return (
                    <div key={option._id}>
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
                            option?.evdText && 
                            <div className='flex justify-end mt-[20px] mr-8'>
                                <div className='flex gap-[24px] items-center'>
                                <div className='w-[315px] h-[154px] overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>

                                </div>
                                <div className='w-[210px] h-[154px] overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                    <p className='font-Kumbh text-xs font-semibold'>Keyword: <span className='font-normal'>{`${eviWord}`}</span></p>
                                </div>
                                <div className='w-[315px] h-[154px] overflow-auto  rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                    <p className='font-Kumbh font-semibold text-xs'>{`Strategic:`} <span className='font-normal'>{option?.evdText}</span></p>
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
                            </div>
                        </div>
                        {showAddQuestion && addNewOption.map((item, index) => (
                            <div key={item.id} className='flex mt-4 flex-col gap-4'>
                                <div className='flex items-center gap-2 '>
                                    <p className='font-medium font-Kumbh'>1.</p>
                                    <input
                                        type='text'
                                        name='optionTitle'
                                        value={optionTitle}
                                        className='w-[931px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-normal text-base'
                                        placeholder='Question'
                                        onChange={(e) => handleTitleChange(e)}
                                    />
                                </div>
                                <div className='flex items-center gap-2 mt-4 pl-10'>
                                    <img src={Check} alt='check' />
                                    <input
                                        type='text'
                                        className='w-[745px] bg-[#fff] p-4 outline-none text-[#363636] h-[50px] font-hanken  font-normal text-[17px]'
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
                                    {/* Additional buttons and inputs for tips and sub-questions */}
                                </div>
                                {
                                    eviTitle && eviWord &&
                                    <div className='flex justify-end mt-[20px] mr-8'>
                                        <div className='flex gap-[24px] items-center'>
                                        <div className='w-[315px] h-[154px] overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>

                                        </div>
                                        <div className='w-[210px] h-[154px] overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                            <p className='font-Kumbh text-xs font-semibold'>Keyword: <span className='font-normal'>{`${eviWord}`}</span></p>
                                        

                                        </div>
                                        <div className='w-[315px] h-[154px] overflow-auto  rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                                            <p className='font-Kumbh font-semibold text-xs'>{`${eviTitle}:`} <span className='font-normal'>{eviQuestion}</span></p>
                                        </div>

                                        </div>
                                    </div>
                                }
                                {
                                    showTip &&
                                    <div className='mt-[24px] pl-[160px]'>
                                        <textarea
                                        className='w-[792px] h-[83px] bg-[#fff] p-4 outline-none'
                                        placeholder='Type tip...'
                                        rows="5"
                                        value={optionTipChange}
                                        onChange={(e) => handleTipChange(e)}
                                        >
                                        </textarea>
                                    </div>
                                }
                            
                            </div>
                        ))}
                        <div className='flex justify-between items-center mt-4'>
                            <div onClick={() => {optionTitle ? handleSubmit() : setShowAddQuestion(true)}} className='flex items-center mt-1.5  pl-12'> {/* addSubQsnFunc(item.id) */}
                                <GoPlus className="text-[#474747] text-[13px]  font-medium font-Kumbh"/>
                                <p className='text-[#474747] text-[13px] font-Kumbh cursor-pointer'>Add Sub Question</p>
                            </div>
                            <button className='w-[100px] p-2 bg-[#04BC7B] mr-8' onClick={submitNextQuestion(option?._id)}>
                                <p className='text-[#fff]'>Submit</p>
                            </button>
                        </div>
                                    
                    </div>
                )
            }) 
        }
        
        <div onClick={addOption} className='flex items-center justify-end mt-1 mr-8 mb-[100px]'>
            <GoPlus className="text-[#04BC7B] text-[13px]  font-medium font-Kumbh" />
            <p className='text-[#04BC7B] text-[17px] font-medium font-Kumbh cursor-pointer'>Add Option</p>
        </div>
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
          <UploadEvidence handleClose={() => setShowModal(false)} />
        </ModalPop>
      </div>
  )
}

export default QuestionsInfo