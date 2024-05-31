import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { Switch } from 'antd';

import ModalPop from '../../../components/modalPop';

import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"
import Check from "../../../assets/svg/check.svg"
import Plus from "../../../assets/png/plus_icon.png"
import UploadEvidence from './UploadEvidence';


const Choice = ({ 
  setShowChoice, 
  choiceId, 
  onDelete, 
  addNewOption, 
  setAddNewOption, 
  optionTitle, 
  setOptionTitle, 
  points, 
  setPoints, 
  tipsError, 
  setTipsError 
}) => {
  const [option, setOption] = useState("")
  // const [subQuestionChange, setSubQuestionChange] = useState("")
  const [showTip, setShowTip] = useState(false)
  // const [addSubQsn, setAddSubQsn] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleTitleChange = (e) => {
      setOptionTitle(e.target.value)
  }

  // const handlePointsChange = (e) => {
  //   setPoints(e.target.value)
  // }

  // const handleTipChange = (e) => {
  //   setOptionTipChange(e.target.value)
  // }

  const eviTitle = localStorage.getItem("title")
  console.log(eviTitle, "eviTitle")

  const eviWord = localStorage.getItem("word")
  console.log(eviWord, "eviTitle")

  const eviQuestion = localStorage.getItem("question")
  console.log(eviQuestion, "eviTitle")


  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleDelete = () => {
    onDelete(choiceId);
};


const handleOptionChange = (optionId, e) => {
  const newOptions = addNewOption.map(option =>
    option.id === optionId ? { ...option, optionText: e.target.value } : option
  );
  setAddNewOption(newOptions);
};

const handlePointChange = (optionId, e) => {
  const newOptions = addNewOption.map(option =>
    option.id === optionId ? { ...option, optionPoints: e.target.value } : option
  );
  setAddNewOption(newOptions);
};

const handleTipChange = (optionId, e) => {
  const newOptions = addNewOption.map(option =>
    option.id === optionId ? { ...option, optionTips: e.target.value } : option
  );
  setAddNewOption(newOptions);
};

const addOption = () => {
    const newOptionId = addNewOption.length + 1;
    const newOption = { id: newOptionId, optionText: '', optionPoints: "", optionTips: "" };
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



const handlePointsChange = (e) => {
  setPoints(e.target.value);
};

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
  

  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10 flex flex-col animate__animated animate__fadeInUp bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
       <div className='flex justify-between items-center'>
            <p className='font-Kumbh'></p>
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' className='cursor-pointer' onClick={() => {setShowChoice(false); handleDelete()}} />
            </div>
        </div>
        
        <div className='flex flex-col gap-[11px] mt-[20px]'>
          <div className='flex items-center gap-2 '>
            <p className='font-medium font-Kumbh'>1.</p>
            <input
                type='text'
                name='optionTitle'
                value={optionTitle}
                className='w-[931px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[22px]'
                placeholder='Question'
                onChange={(e) => handleTitleChange(e)}
              />
          </div>
          {addNewOption.map((item, index) => (
            <div key={item.id}>
              <div className='flex items-center gap-2 mt-4 pl-10'>
                <img src={Check} alt='check' />
                <input
                  type='text'
                  className='w-[745px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[22px]'
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
              <div className='flex items-center justify-end mr-8 mt-5 gap-2'>
                <p className='font-medium text-[#000000] font-Kumbh text-[14px]'>Points:</p>
                <div className='bg-[#fff] w-[80px] h-[30px] p-2 flex items- justify-center'>
                  <input 
                    className='font-Kumbh w-full outline-none p-1 text-[#000] bg-transparent'
                    placeholder='0'
                    // onChange={(e) => handlePointsChange(e)}
                    onChange={(e) => handlePointChange(item.id, e)}
                    name='point'
                    type='number'
                    value={item?.optionPoints}
                  />
                </div>
              </div>
              {
                item?.optionKeyword &&
                  <div className='flex justify-end mt-[20px] mr-8'>
                    <div className='flex gap-[24px] items-center'>
                      <div className='w-[315px] h-auto overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                      <p className='font-Kumbh text-xs font-semibold'>Upload: <span className='font-normal'>{`${item?.optionImageName?.name}`}</span></p>
                      </div>
                      <div className='w-[210px] h-auto overflow-auto rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                        <p className='font-Kumbh text-xs font-semibold'>Keyword: <span className='font-normal'>{`${item?.optionKeyword}`}</span></p>
                      </div>
                      <div className='w-[315px] h-auto overflow-auto  rounded-lg border border-[#A5A5A5] p-3 flex flex-col'>
                          <p className='font-Kumbh font-semibold text-xs'>Suggested Evidence: <span className='font-normal'>{item?.optionEviQuestion}</span></p>
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
                      value={item?.optionTips}
                      onChange={(e) =>  handleTipChange(item.id, e)}
                      // onChange={(e) => handleTipChange(e)}
                    >
                    </textarea>
                  </div>
              }
              {!item?.optionTips && <p className='text-red-600 flex justify-end font-mont mr-8'>{tipsError}</p>}
              {/* {item.subQuestions.map((sub, subIndex) => (
                <div key={sub.id} className='pl-16 mt-4'>
                  <input
                    type="text"
                    placeholder={`Sub-question ${index + 1}.${subIndex + 1}`}
                    value={sub.subQuestionText}
                    className='w-[890px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[14px]' 
                    onChange={(e) => handleSubQuestionChange(item.id, sub.id, e)}
                  />
                </div>
              ))} */}
            </div>
          ))}
          <div onClick={addOption} className='flex items-center justify-end mt-1 mr-8 mb-[100px]'>
            <GoPlus className="text-[#04BC7B] text-[13px]  font-medium font-Kumbh" />
            <p className='text-[#04BC7B] text-[17px] font-medium font-Kumbh cursor-pointer'>Add Option</p>
          </div>
        </div>
        <hr />
        <div className='flex items-center mt-3 justify-between'>
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

          <div className='flex items-center gap-2'>
            {/* <p className='text-[#000] font-Kumbh font-medium text-[14px]'>Evidence</p>
            <Switch size="small"  onChange={onChange}/> */}
          </div>
        </div>

        <ModalPop isOpen={showModal}>
          <UploadEvidence handleClose={() => setShowModal(false)} addNewOption={addNewOption} setAddNewOption={setAddNewOption} />
        </ModalPop>
      </div>
  )
}

export default Choice