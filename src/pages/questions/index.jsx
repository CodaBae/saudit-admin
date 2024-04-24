import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import Book from "../../assets/png/book.png"
import Hamburger from "../../assets/svg/section.svg"
import Idea from "../../assets/svg/idea.svg"
import Section from './components/Section';
import Choice from './components/Choice';

const Questions = () => {
    const [type, setType] = useState("Create Question");
    const [showChoice, setShowChoice] = useState(false);
    const [show, setShow] = useState(false);
    const [sections, setSections] = useState([]);

    const handleShow = () => {
        setShow(prev => !prev)
    }

    //    const handleAddSection = () => {
    //         setSections(prevSections => [...prevSections, <Section key={prevSections.length} setType={setType} />]);
    //     }

    

   

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
                <p className='font-Kumbh font-medium text-[25px]'>{type}</p>
                <img src={Book} alt='Book' className='w-[49px] h-[31px]' />
            </div>
            <p className={`${type === "Let's Begin" ? "text-[#A1A1A1] font-Kumbh text-[17px]" : "hidden "}`}>Start with a section</p>
        </div>

         {type === "Fill the form" && <Section setType={setType}/>}
            {/* {sections.map((section, index) => (
                <div key={index}>{section}</div>
            ))} */}
            {showChoice && <Choice setShowChoice={setShowChoice}/>}

        <div className={`${type === "Let's Begin" || show ? "flex items-center gap-2 mt-[89px]  animate__animated animate__fadeInUp" :  "hidden" }`}>
            <button onClick={() => {type === "Let's Begin" ? setType("Create Question") : setShow(false)}} className='w-[66px] h-[62px] bg-[#00BA78] flex justify-center rounded-lg items-center'>
                <MdClose className='text-[#fff]' />
            </button>
            <button onClick={() =>  setType("Fill the form")} className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
                <img src={Hamburger} alt='Hamburger' />
                <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Section</p>
            </button>
            <button  onClick={() => setShowChoice(true)} className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
                <div className='w-[20px] h-[20px] rounded-full flex justify-center items-center border border-[#288766]'>
                    <div className='bg-[#00BA78] rounded-full w-[14px] h-[14px]'></div>
                </div>
                <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Choice</p>
            </button>
            <button className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
                <div className='w-[19px] h-[19px] rounded flex justify-center items-center border border-[#288766]'>
                    <p className='text-[#00BA78] font-Kumbh text-[10px]'>T</p>
                </div>
                <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Text</p>
            </button>
            <button className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
                <img src={Idea} alt='Idea' />
                <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Tips</p>
            </button>
        </div>


        <button onClick={() => {type === "Create Question" ? setType("Let's Begin") :   handleShow()}} className={`${type === "Let's Begin" ? "hidden" : "w-[168px] h-[62px] mt-[89px] bg-[#00BA78] flex rounded-lg items-center gap-2 justify-center p-2 mb-5"}`}>
            <FaPlus className='text-[#fff]' />
            <p className='text-[#fff]'>Add New</p>
        </button>
    </div>
  )
}

export default Questions



// const Questions = () => {   setSections([]) 
//     const [type, setType] = useState("Create Question");
//     const [showChoice, setShowChoice] = useState(false);
//     const [sections, setSections] = useState([]);

//     const handleAddSection = () => {
//         setSections(prevSections => [...prevSections, <Section key={prevSections.length} setType={setType} />]);
//     }

//     return (
//         <div className='flex flex-col'>
//             <div className='flex flex-col'>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-Kumbh font-medium text-[25px]'>{type}</p>
//                     <img src={Book} alt='Book' className='w-[49px] h-[31px]' />
//                 </div>
//                 <p className={`${type === "Let's Begin" ? "text-[#A1A1A1] font-Kumbh text-[17px]" : "hidden "}`}>Start with a section</p>
//             </div>

//             {sections.map((section, index) => (
//                 <div key={index}>{section}</div>
//             ))}
//             {showChoice && <Choice setShowChoice={setShowChoice} />}

//             <div className={`${type === "Let's Begin" ? "hidden" : "flex items-center gap-2 mt-[89px]  animate__animated animate__fadeInUp"}`}>
//                 <button onClick={() => { type === "Let's Begin" ? setType("Create Question") : setSections([]) }} className='w-[66px] h-[62px] bg-[#00BA78] flex justify-center rounded-lg items-center'>
//                     <MdClose className='text-[#fff]' />
//                 </button>
//                 <button onClick={handleAddSection} className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
//                     <img src={Hamburger} alt='Hamburger' />
//                     <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Section</p>
//                 </button>
//                 <button onClick={() => setShowChoice(true)} className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
//                     <div className='w-[20px] h-[20px] rounded-full flex justify-center items-center border border-[#288766]'>
//                         <div className='bg-[#00BA78] rounded-full w-[14px] h-[14px]'></div>
//                     </div>
//                     <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Choice</p>
//                 </button>
//                 <button className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
//                     <div className='w-[19px] h-[19px] rounded flex justify-center items-center border border-[#288766]'>
//                         <p className='text-[#00BA78] font-Kumbh text-[10px]'>T</p>
//                     </div>
//                     <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Text</p>
//                 </button>
//                 <button className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
//                     <img src={Idea} alt='Idea' />
//                     <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Tips</p>
//                 </button>
//             </div>


//             <button onClick={() => { type === "Create Question" ? setType("Let's Begin") : setSections([]) }} className={`${type === "Let's Begin" ? "hidden" : "w-[168px] h-[62px] mt-[89px] bg-[#00BA78] flex rounded-lg items-center gap-2 justify-center p-2 mb-5"}`}>
//                 <FaPlus className='text-[#fff]' />
//                 <p className='text-[#fff]'>Add New</p>
//             </button>
//         </div>
//     )
// }

// export default Questions;
