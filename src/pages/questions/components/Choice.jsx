import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { Switch } from 'antd';


import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"
import Check from "../../../assets/svg/check.svg"


const Choice = ({ setShowChoice, choiceId, onDelete }) => {
  const [title, setTitle] = useState("")
  const [option, setOption] = useState("")
  const [tipChange, setTipChange] = useState("")
  const [subQuestionChange, setSubQuestionChange] = useState("")
  const [showTip, setShowTip] = useState(false)
  const [addSubQsn, setAddSubQsn] = useState([])
  const [addNewOption, setAddNewOption] = useState([{ id: 1, subQuestions: [] }]);

  const handleTitleChange = (e) => {
      setTitle(e.target.value)
  }

  // const handleOptionChange = (e) => {
  //   setOption(e.target.value)
  // }

  const handleTipChange = (e) => {
    setTipChange(e.target.value)
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

  const handleDelete = () => {
    onDelete(choiceId);
};



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
  

  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10 flex flex-col animate__animated animate__fadeInUp bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
       <div className='flex justify-between items-center'>
            <p className='font-Kumbh'></p>
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' className='cursor-pointer' onClick={() => {setShowChoice(false); handleDelete()}} />
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
                className='w-[931px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[22px]'
                placeholder='Question'
                onChange={handleTitleChange}
              />
          </div>
          {addNewOption.map((item, index) => (
            <div key={item.id}>
              <div className='flex items-center gap-2 mt-4 pl-10'>
                <img src={Check} alt='check' />
                <input
                  type='text'
                  className='w-[827px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[22px]'
                  placeholder={`Option ${index + 1}`}
                  value={item.optionText}
                  onChange={(e) => handleOptionChange(item.id, e)}
                />
                <button className='bg-[#00BA78] flex items-center gap-1 w-[50px] h-[55px] p-2' onClick={() => setShowTip(true)}>
                  <FaPlus className="text-[#fff] w-[11px] h-[11px] font-Kumbh"/>
                  <p className='text-[#fff]'>Tip</p>
                </button>
                {/* Additional buttons and inputs for tips and sub-questions */}
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
              {item.subQuestions.map((sub, subIndex) => (
                <div key={sub.id} className='pl-16 mt-4'>
                  <input
                    type="text"
                    placeholder={`Sub-question ${index + 1}.${subIndex + 1}`}
                    value={sub.subQuestionText}
                    className='w-[890px] bg-[#fff] p-4 outline-none text-[#000] h-[50px] font-Kumbh font-semibold text-[14px]' 
                    onChange={(e) => handleSubQuestionChange(item.id, sub.id, e)}
                  />
                </div>
              ))}
              <div onClick={() => addSubQsnFunc(item.id)} className='flex items-center mt-1.5  pl-12'>
                <GoPlus className="text-[#474747] text-[13px]  font-medium font-Kumbh"/>
                <p className='text-[#474747] text-[13px] font-Kumbh cursor-pointer'>Add Sub Question</p>
              </div>
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
              <p className='font-Kumbh text-[#000]'>0</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <p className='text-[#000] font-Kumbh font-medium text-[14px]'>Evidence</p>
            <Switch size="small"  onChange={onChange}/>
          </div>

        </div>
      </div>
  )
}

export default Choice