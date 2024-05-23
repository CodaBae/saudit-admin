// import React, { useState } from 'react'
// import { FaPlus } from "react-icons/fa";
// import { MdClose } from "react-icons/md";

// import Book from "../../assets/png/book.png"
// import Hamburger from "../../assets/svg/section.svg"
// import Idea from "../../assets/svg/idea.svg"
// import Section from './components/Section';
// import Choice from './components/Choice';

// const Questions = () => {
//     const [type, setType] = useState("Create Question");
//     const [showChoice, setShowChoice] = useState(false);
//     const [show, setShow] = useState(false);

//     const handleShow = () => {
//         setShow(prev => !prev)
//     }

   

//   return (
//     <div className='flex flex-col'>
//         <div className='flex flex-col'>
//             <div className='flex items-center gap-2'>
//                 <p className='font-Kumbh font-medium text-[25px]'>{type}</p>
//                 <img src={Book} alt='Book' className='w-[49px] h-[31px]' />
//             </div>
//             <p className={`${type === "Let's Begin" ? "text-[#A1A1A1] font-Kumbh text-[17px]" : "hidden "}`}>Start with a section</p>
//         </div>

//          {type === "Fill the form" && <Section setType={setType}/>}
      
//         {showChoice && <Choice setShowChoice={setShowChoice}/>}

//         <div className={`${type === "Let's Begin" || show ? "flex items-center gap-2 mt-[89px]  animate__animated animate__fadeInUp" :  "hidden" }`}>
//             <button onClick={() => {type === "Let's Begin" ? setType("Create Question") : setShow(false)}} className='w-[66px] h-[62px] bg-[#00BA78] flex justify-center rounded-lg items-center'>
//                 <MdClose className='text-[#fff]' />
//             </button>
//             <button onClick={() =>  setType("Fill the form")} className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
//                 <img src={Hamburger} alt='Hamburger' />
//                 <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Section</p>
//             </button>
//             <button  onClick={() => setShowChoice(true)} className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
//                 <div className='w-[20px] h-[20px] rounded-full flex justify-center items-center border border-[#288766]'>
//                     <div className='bg-[#00BA78] rounded-full w-[14px] h-[14px]'></div>
//                 </div>
//                 <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Choice</p>
//             </button>
//             <button className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
//                 <div className='w-[19px] h-[19px] rounded flex justify-center items-center border border-[#288766]'>
//                     <p className='text-[#00BA78] font-Kumbh text-[10px]'>T</p>
//                 </div>
//                 <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Text</p>
//             </button>
//             <button className='flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]'>
//                 <img src={Idea} alt='Idea' />
//                 <p className='font-Kumbh font-medium text-[#000] text-[17px]'>Tips</p>
//             </button>
//         </div>


//         <button onClick={() => {type === "Create Question" ? setType("Let's Begin") :   handleShow()}} className={`${type === "Let's Begin" ? "hidden" : "w-[168px] h-[62px] mt-[89px] bg-[#00BA78] flex rounded-lg items-center gap-2 justify-center p-2 mb-5"}`}>
//             <FaPlus className='text-[#fff]' />
//             <p className='text-[#fff]'>Add New</p>
//         </button>
//     </div>
//   )
// }

// export default Questions

import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Book from "../../assets/png/book.png";
import Hamburger from "../../assets/svg/section.svg";
import Idea from "../../assets/svg/idea.svg";
import Section from './components/Section';
import Choice from './components/Choice';
import SubSection from './components/SubSection';
import SectionB from './components/SectionB';
import Tips from './components/Tips';
import Text from './components/Text';
import { toast } from 'react-toastify';
import axios from 'axios';

const QuestionType = {
  BEGIN: "Let's Begin",
  CREATE: "Create Question",
  FILL_FORM: "Fill the form"
};

const sector = [
  { name: 'Sector' },
  { name: 'Transport' },
]

const subSector = [
  { name: "Sub Sector"},
  { name: 'Railway' },
  { name: 'Marine' },
  { name: 'Air' },
]

const sectorType = [
  { name: "Type"},
  { name: 'Light Rail' },
  { name: 'Heavy Rail' },
  { name: 'Metro' },
]

const industryFunction = [
  { name: "Industry function"},
  { name: 'Railway Operator' },
]

const userFunction = [
  { name: "User Function"},
  { name: "Executive"},
  { name: 'Senior Management' },
  { name: 'Company admin' },
  { name: 'Staff Contractor' },
]

const assessment = [
  { name: "Select assessment category"},
  { name: "Air Emmissions"},
  { name: "Waste"},
  { name: "Climate Change"},
  { name: "Social Sustainability"},
  { name: "Environmental Sustainability"},
  { name: "Culture"},
  { name: "Sustainable Communities"},
  { name: "Health & Well-Being"},
  { name: "Investment for Sustainability"},
  { name: "Education & Stakeholders"},
  { name: "Biodiversity"},
  { name: "Governace"},

]

const compliance = [
  { name: "Select compliance category"},
  { name: "SDG"},
]

const Questions = () => {
  const [type, setType] = useState(QuestionType.CREATE);
  const [showChoice, setShowChoice] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showTexts, setShowTexts] = useState(false);
  const [sections, setSections] = useState([]);
  const [sectionsB, setSectionsB] = useState([]);
  const [subSections, setSubSections] = useState([]);
  const [choices, setChoices] = useState([]);
  const [texts, setTexts] = useState([]);
  const [tips, setTips] = useState([]);
  const [show, setShow] = useState(false);

  //Sections Forms
  const [sectorSelected, setSectorSelected] = useState(sector[0])
  const [subSectorSelected, setSubSectorSelected] = useState(subSector[0])
  const [typeSelected, setTypeSelected] = useState(sectorType[0])
  const [industryFunctionSelected, setIndustryFunctionSelected] = useState(industryFunction[0])
  const [userFunctionSelected, setUserFunctionSelected] = useState(userFunction[0])
  const [assessmentSelected, setAssessmentSelected] = useState(assessment[0])
  const [complianceSelected, setComplianceSelected] = useState(compliance[0])

  // Choice Forms
  const [addNewOption, setAddNewOption] = useState([{ id: 1, subQuestions: [] }]);
  const [optionTitle, setOptionTitle] = useState("")
  const [optionTipChange, setOptionTipChange] = useState("")
  const [points, setPoints] = useState(0)




  const toggleShow = () => {
    setShow(prev => !prev);
  };

  console.log(sections, "sections")
  console.log(subSections, "subSections")
  console.log(sectionsB, "sectionsB")
  console.log(choices, "choices")

  const addSection = () => {
    setSections([...sections, { id: sections.length + 1 }]);
  };

  const addSectionB = () => {
    setSectionsB([...sectionsB, { id: sectionsB.length + 1 }]);
  };

  const addSubSection = () => {
    setSubSections([...subSections, { id: subSections.length + 1 }]);
  };

  const addChoice = () => {
    setChoices([...choices, { id: choices.length + 1 }]);
  };

  const addTips = () => {
    setTips([...tips, { id: tips.length + 1 }]);
  };

  const addTexts = () => {
    setTexts([...texts, { id: texts.length + 1 }]);
  };

  const handleDeleteSection = (sectionId) => {
    setSections(sections.filter(section => section.id !== sectionId));
  };

  const handleDeleteSectionB = (sectionBId) => {
    setSectionsB(sectionsB.filter(sectionB => sectionB.id !== sectionBId));
  };

  const handleDeleteSubSection = (subSectionId) => {
    setSubSections(subSections.filter(subSection => subSection.id !== subSectionId));
  };

  const handleDeleteChoice = (choiceId) => {
    setChoices(choices.filter(choice => choice.id !== choiceId));
  };

  const handleDeleteTips = (tipsId) => {
    setTips(tips.filter(tip => tip.id !== tipsId));
  };

  const handleDeleteTexts = (textsId) => {
    setTexts(texts.filter(text => text.id !== textsId));
  };

  const choiceButton = () => {
    setShowChoice(true); 
    addChoice();
  }

  const tipsButton = () => {
    setShowTips(true); 
    addTips();
  }

  const textsButton = () => {
    setShowTexts(true); 
    addTexts();
  }


  const evidenceTitle = localStorage.getItem("title")
  const evidenceQuestion = localStorage.getItem("question")
  const keyWord =  localStorage.getItem("word")


  const submitForm = async () => {
      const data = {
        sector: sectorSelected?.name, 
        subSector: subSectorSelected?.name,  
        type: typeSelected?.name,
        industryFuntion: industryFunctionSelected?.name,  
        userFuntion: userFunctionSelected?.name,  
        selectAssessmentCat: assessmentSelected?.name,  
        selectComplianceCat: complianceSelected?.name,  
        text: optionTitle,
        tips: optionTipChange,
        point: points,
        options: [
          {
            text: `${addNewOption[0]?.optionText}`,
            evd: "No evidence",
            evdText:`${evidenceQuestion}`,
            tips: `${keyWord}`
          },
        ]
      }
      await axios.post("https://saudit-jheg.onrender.com/surveys/questions", data, {
        headers: {
          "Content-Type": 'application/json',
        }
      })
      .then((res) => {
        console.log(res, "res")
        toast(`${res?.data?.message}`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        })
        handleDeleteSection()
      })
      .catch((err) => {
        console.log(err, 'err')
        toast(`${err?.response?.data?.message}`, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        })
        handleDeleteSection()
      })

  }


  const handleShowSection = () => {
    setType(QuestionType.FILL_FORM); 
    if(sections.length === 1) {
      addSubSection()
    } else {
      addSection();
      // addSectionB();
    }
  }

  const handleSubmitForm = () => {
   if (sections.length === 1 && optionTitle) {
      submitForm()
      addSection();
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="font-Kumbh font-medium text-[25px]">{type}</p>
          <img src={Book} alt="Book" className="w-[49px] h-[31px]" />
        </div>
        <p className={type === QuestionType.BEGIN ? "text-[#A1A1A1] font-Kumbh text-[17px]" : "hidden"}>Start with a section</p>
      </div>

      {type === QuestionType.FILL_FORM &&  
        sections.map(section => <Section 
          key={section.id} 
          sectionId={section.id} 
          onDelete={handleDeleteSection} 
          setType={setType} 

          //States
          sectorSelected={sectorSelected}
          setSectorSelected={setSectorSelected}
          subSectorSelected={subSectorSelected}
          setSubSectorSelected={setSubSectorSelected}
          typeSelected={typeSelected}
          setTypeSelected={setTypeSelected}
          industryFunctionSelected={industryFunctionSelected}
          setIndustryFunctionSelected={setIndustryFunctionSelected}
          userFunctionSelected={userFunctionSelected}
          setUserFunctionSelected={setUserFunctionSelected}
          assessmentSelected={assessmentSelected}
          setAssessmentSelected={setAssessmentSelected}
          complianceSelected={complianceSelected}
          setComplianceSelected={setComplianceSelected}
          sector={sector}
          subSector={subSector}
          sectorType={sectorType}
          industryFunction={industryFunction}
          userFunction={userFunction}
          assessment={assessment}
          compliance={compliance}
        />) 
      }
      {/* {sectionsB.map(sectionB => <SectionB  key={sectionB.id} sectionBId={sectionB.id} onDelete={handleDeleteSectionB}   />)} */}
      {/* {subSections.map(subSection => <SubSection  key={subSection.id} subSectionId={subSection.id} onDelete={handleDeleteSubSection}   />)} */}
      {showChoice && choices.map(choice => <Choice 
        key={choice.id} 
        choiceId={choice.id} 
        onDelete={handleDeleteChoice} 
        setShowChoice={setShowChoice} 
        addNewOption={addNewOption}
        setAddNewOption={setAddNewOption}
        optionTitle={optionTitle} 
        setOptionTitle={setOptionTitle} 
        optionTipChange={optionTipChange} 
        setOptionTipChange={setOptionTipChange}
        points={points}
        setPoints={setPoints}
      />)
      }
      {showTexts && texts.map(text => <Text key={text.id} textId={text.id} onDelete={handleDeleteTexts} setShowTexts={setShowTexts} />)}
      {/* {showTips && tips.map(tip => <Tips key={tip.id} tipsId={tip.id} onDelete={handleDeleteTips} setShowTips={setShowTips} />)} */}

      <div className={`${type === QuestionType.BEGIN || show ? "flex items-center gap-2 mt-[89px]  animate__animated animate__fadeInUp" :  "hidden" }`}>
        <button onClick={() => {type === QuestionType.BEGIN ? setType(QuestionType.CREATE) : setShow(false)}} className="w-[66px] h-[62px] bg-[#00BA78] flex justify-center rounded-lg items-center">
          <MdClose className="text-[#fff]" />
        </button>

        <ButtonWithIcon 
            onClick={() => {handleShowSection(); handleSubmitForm()}}
            icon={Hamburger} 
            label="Section" 
        />
        
        <ButtonWithIcon 
            onClick={() => {sections?.length > 0 ? choiceButton() : null}} 
            icon={<div className="w-[20px] h-[20px] rounded-full flex justify-center items-center border border-[#288766]"><div className="bg-[#00BA78] rounded-full w-[14px] h-[14px]"></div></div>} 
            label="Choice" 
        />
       
        <ButtonWithIcon 
            onClick={() => {sections?.length > 0 ? textsButton() : null}} 
            icon={<div className="w-[19px] h-[19px] rounded flex justify-center items-center border border-[#288766]"><p className="text-[#00BA78] font-Kumbh text-[10px]">T</p></div>}
            label="Text" 
        />

        {/* <ButtonWithIcon 
            onClick={() => {sections?.length > 0 ? tipsButton() : null}} 
            icon={Idea} 
            label="Tips" 
        /> */}
      </div>

      <button onClick={() => {type === QuestionType.CREATE ? setType(QuestionType.BEGIN) : toggleShow()}} className={`${type === QuestionType.BEGIN ? "hidden" : "w-[168px] h-[62px] mt-[89px] bg-[#00BA78] flex rounded-lg items-center gap-2 justify-center p-2 mb-5"}`}>
        <FaPlus className="text-[#fff]" />
        <p className="text-[#fff]">Add New</p>
      </button>
    </div>
  );
};

const ButtonWithIcon = ({ onClick, icon, label }) => (
  <button onClick={onClick} className="flex items-center justify-center h-[62px] rounded-lg gap-2 w-[151px] border border-[#0C704C]">
    {typeof icon === 'string' ? <img src={icon} alt="Icon" /> : icon}
    <p className="font-Kumbh font-medium text-[#000] text-[17px]">{label}</p>
  </button>
);

export default Questions;
