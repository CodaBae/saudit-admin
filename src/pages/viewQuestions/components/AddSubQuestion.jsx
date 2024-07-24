import React, { useEffect, useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Switch } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import ModalPop from '../../../components/modalPop';

import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"
import Check from "../../../assets/svg/check.svg"
import Plus from "../../../assets/png/plus_icon.png"
import UploadEvidence from './UploadEvidence';
import { CgSpinner } from 'react-icons/cg';




const AddSubQuestion = () => {
  const [option, setOption] = useState("")
  const [showTip, setShowTip] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const [addNewOption, setAddNewOption] = useState([{ id: 1, optionText: "", optionPoints: 0, optionTips: "", evidenceTitle: "", optionEviQuestion: "", optionKeyword: "", optionImageName: "" }]);
  const [optionTitle, setOptionTitle] = useState("")
  const [optionTipChange, setOptionTipChange] = useState("")
  const [points, setPoints] = useState(0)
  const [tipsError, setTipsError] = useState("")
  const [getQuestionId, setGetQuestionId] = useState()

  const handleTitleChange = (e) => {
      setOptionTitle(e.target.value)
  }

  console.log(addNewOption, "addNewOption")

  const navigate = useNavigate()


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

  const { state } = useLocation()

  console.log(state, 'stateData')

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

const handlePointsChange = (e) => {
  setPoints(e.target.value);
};

const submitNextQuestion = async () => {  //option
  // console.log(option, "same")
  const data= {
      nextQuestionId: getQuestionId,
  }
  await axios.put(`https://saudit-jheg.onrender.com/surveys/questions/${state?._id}/${state?.optionId}/nextQuestion`, data)
  .then((res) => {
      console.log(res, "dodo")
      toast(`${res?.data?.message}`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
      })
      navigate("/viewQuestions")
  })
  .catch((err) => {
      console.log(err, "err")
      // toast("Error", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     closeOnClick: true,
      // })
  }) 
}

const submitForm = async () => {
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

    jurisdiction: state?.jurisdiction || "",  
    scheme: state?.scheme || "", 
    body: state?.body || "", 
    tsi: state?.tsi || "", 
    ntsn: state?.ntsn || "",
    complianceTitle: state?.complianceTitle || "", 

    text: optionTitle,
    tips: addNewOption?.[0]?.optionTips,        //optionTipChange,
    point: points,
    options: addNewOption.map(option => ({
      text: option.optionText,
      point: Number(option.optionPoints),
      evd: "https://res.cloudinary.com/code-idea/image/upload/v1715177702/GTR_Sustainability_Report_2022_m53ppm.pdf",
      evdText: option.optionEviQuestion,
      tips: option.optionTips,
      keyWord: option.optionKeyword,
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
    setLoading(false)
    toast(`${res?.data?.message}`, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    })
  })
  .catch((err) => {
    console.log(err, 'errgo')
    setLoading(false)
    toast(`${err?.response?.data?.message}`, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    })
  })
}

const handleSubmitForm = () => {
  if (optionTitle && tipsError) {
     submitForm()
   } else {
     setTipsError("Tips is required")
   }
 }

 useEffect(() => {
    submitNextQuestion()
 }, [getQuestionId])

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
             <button className='bg-[#f00] flex items-center gap-1 w-[62px] h-[50px] rounded-sm p-2' onClick={(e) => handleRemove(item.id, e)}>
                <FaMinus className="text-[#fff] w-[20px] h-[11px] font-Kumbh"/>
                <p className='text-[#fff]'>Delete</p>
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
                   <p className='font-Kumbh text-xs font-semibold'>Upload: <span className='font-normal'>{`${item?.optionImageName?.original_filename}`}</span></p>
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
                   onChange={(e) => handleTipChange(item.id, e)}
                  //  onChange={(e) => handleTipChange(e)}
                 >
                 </textarea>
               </div>
           }
           {!item?.optionTips && <p className='text-red-600 flex justify-end font-mont mr-8'>{tipsError}</p>}
         
         </div>
       ))}
       <div onClick={addOption} className='flex items-center justify-end mt-1 mr-8 mb-[100px]'>
         <GoPlus className="text-[#04BC7B] text-[13px]  font-medium font-Kumbh" />
         <p className='text-[#04BC7B] text-[17px] font-medium font-Kumbh cursor-pointer'>Add Option</p>
       </div>
     </div>
     <hr />
     <div className='flex items-center mt-3 justify-between'>
        {/* <div onClick={() => handleSubmitForm()} className='flex items-center mt-1.5  pl-12'>
            <GoPlus className="text-[#474747] text-[13px]  font-medium font-Kumbh"/>
            <p className='text-[#474747] text-[13px] font-Kumbh cursor-pointer'>Add Sub Question</p>
        </div> */}
          
        <button className='w-[100px] p-2 bg-[#04BC7B] flex items-center justify-center mr-8' onClick={() => handleSubmitForm()}>
          {
            loading ?
            <CgSpinner className='animate-spin text-lg text-[#fff]' />
            :
            <p className='text-[#fff]'>Submit</p>
          }
        </button>
     
      </div>

     <ModalPop isOpen={showModal}>
       <UploadEvidence handleClose={() => setShowModal(false)} addNewOption={addNewOption} setAddNewOption={setAddNewOption} />
     </ModalPop>
   </div>
  )
}

export default AddSubQuestion