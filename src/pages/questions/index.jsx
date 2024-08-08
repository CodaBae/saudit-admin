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
  { name: '' },
  { name: 'Transport' },
]

const subSector = [
  { name: ""},
  { name: 'Railway' },
  { name: 'Marine' },
  { name: 'Road' },
  { name: 'Air' },
]

const sectorType = [
  { name: ""},
  { name: 'Light Rail' },
  { name: 'Heavy Rail' },
  { name: 'Metro' },
]

const industryFunction = [
  { name: ""},
  { name: "Railway Owner"},
  { name: 'Railway Operator' },
  { name: 'Railway Maintainer' },
  { name: 'Engineering and Construction' },
  { name: 'Manufacturing (Trains, Signalling, Track, Communications Systems' },
]

const userFunction = [
  { name: ""},
  { name: "Executive"},
  { name: 'Senior Management' },
  { name: 'Company admin' },
  { name: 'Staff Contractor' },
]

const assessment = [
  { name: ""},
  // { name: "Air Emmissions"},
  // { name: "Waste"},
  { name: "Climate Change"},
  // { name: "Social Sustainability"},
  // { name: "Environmental Sustainability"},
  // { name: "Culture"},
  // { name: "Sustainable Communities"},
  // { name: "Health & Well-Being"},
  // { name: "Investment for Sustainability"},
  // { name: "Education & Stakeholders"},
  // { name: "Biodiversity"},
  // { name: "Governace"},

]

const compliance = [
  { name: ""},
  { name: "Regulations & Frameworks"},
  { name: "Standards"},
  { name: "Guidance & Code of practice"},
]

const standardsJurisdiction = [
  { name: ""},
  { name: "International"},
  { name: "Regional"},
  { name: "Country Specific"},
]

// Standards

const standardsScheme = [
  { name: ""},
  { name: "General"},
  { name: "IEC"},
  { name: "ISO"},
  { name: "Industry Specific"},
]

const standardBody = [
  { name: ""},
  { name: "GRI"},
  { name: "SASB"},
  { name: "ISSB"},
]

const standardComplianceTitle = [
  {name: ""},
  {name: "ISSB S1"},
  {name: "ISSB S2 Climate"}
]

const standardComplianceTitleB = [
  {name: ""},
  {name: "GRI 302 Energy"},
  {name: "GRI 303 Water & Effluents"},
  {name: "GRI 305 Emissions"},
]

const standardComplianceTitleC = [
  {name: ""},
  {name: "SASB: Rail Transportation"},
  {name: "SASB:Engrg, Construction, Infrastructure"},
  {name: "SASB:Waste Management"},
]

// Regulations & Frameworks
const regulationsAndFrameworkJurisdiction = [
  { name: ""},
  { name: "International"},
  { name: "Regional - Europe"},
  { name: "Country Specific"},
]

const regulationsAndFrameworkScheme = [
  { name: ""},
  { name: "SDGs"},
  { name: "ISO"},
  { name: "Country Specific"},
]

const regulationsAndFrameworkSchemeB = [
  { name: ""},
  { name: "General"},
  { name: "Industry Specific"},
]

const regulationsAndFrameworkBody = [
  { name: ""},
  { name: "European Railway Agency"},
  { name: "European Standard"},
]

const regulationsAndFrameworkTitle = [
  { name: ""},
  { name: "Technical Specification for Interopability (TSI)"},
]

const regulationsAndFrameworkTitleB = [
  { name: ""},
  { name: "DIN EN 13848"},
]

const regulationsAndFrameworkTSI = [
  { name: ""},
  { name: "International"},
  { name: "Energy"},
  { name: "Rolling Stock"},
]

// Guidance & Code of practice
const guidanceJurisdiction = [
  { name: ""},
  { name: "International"},
  { name: "Regional - Europe"},
  { name: "Country Specific"},
]

const guidanceScheme = [
  { name: ""},
  { name: "General"},
  { name: "Industry Specific"},
]

const guidanceBody = [
  { name: ""},
  { name: "RSSB"},
  { name: "ORR/DFT"},
  { name: "National Technical Specification Notices(NTSNs)"},
]

const guidanceNTSNs = [
  { name: ""},
  { name: "International"},
  { name: "Energy"},
  { name: "Rolling Stock"},
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
  // const [industryFunctionError, setIndustryFunctionError] = useState("")
  const [userFunctionSelected, setUserFunctionSelected] = useState(userFunction[0])
  // const [userFunctionError, setUserFunctionError] = useState("")
  const [assessmentSelected, setAssessmentSelected] = useState(assessment[0])
  const [complianceSelected, setComplianceSelected] = useState(compliance[0])

  //Standards
  const [standardsJurisdictionSelected, setStandardsJurisdictionSelected] = useState(standardsJurisdiction[0])
  const [standardsSchemeSelected, setStandardsSchemeSelected] = useState(standardsScheme[0])
  const [standardBodySelected, setStandardBodySelected] = useState(standardBody[0])
  const [standardComplianceTitleSelected, setStandardComplianceTitleSelected] = useState(standardComplianceTitle[0])
  const [standardComplianceTitleSelectedB, setStandardComplianceTitleSelectedB] = useState(standardComplianceTitleB[0])
  const [standardComplianceTitleSelectedC, setStandardComplianceTitleSelectedC] = useState(standardComplianceTitleC[0])

  //Regulations And FrameWorks
  const [regulationsAndFrameworkJurisdictionSelected, setRegulationsAndFrameworkJurisdictionSelected] = useState(regulationsAndFrameworkJurisdiction[0])
  const [regulationsAndFrameworkSchemeSelected, setRegulationsAndFrameworkSchemeSelected] = useState(regulationsAndFrameworkScheme[0])
  const [regulationsAndFrameworkSchemeSelectedB, setRegulationsAndFrameworkSchemeSelectedB] = useState(regulationsAndFrameworkSchemeB[0])
  const [regulationsAndFrameworkBodySelected, setRegulationsAndFrameworkBodySelected] = useState(regulationsAndFrameworkBody[0])
  const [regulationsAndFrameworkTitleSelected, setRegulationsAndFrameworkTitleSelected] = useState(regulationsAndFrameworkTitle[0])
  const [regulationsAndFrameworkTitleSelectedB, setRegulationsAndFrameworkTitleSelectedB] = useState(regulationsAndFrameworkTitleB[0])
  const [regulationsAndFrameworkTSISelected, setRegulationsAndFrameworkTSISelected] = useState(regulationsAndFrameworkTSI[0])
  
  //Guidance & Code of practice
  const [guidanceJurisdictionSelected, setGuidanceJurisdictionSelected] = useState(guidanceJurisdiction[0])
  const [guidanceSchemeSelected, setGuidanceSchemeSelected] = useState(guidanceScheme[0])
  const [guidanceBodySelected, setGuidanceBodySelected] = useState(guidanceBody[0])
  const [guidanceNTSNsSelected, setGuidanceNTSNsSelected] = useState(guidanceNTSNs[0])
  

  // Choice Forms
  const [addNewOption, setAddNewOption] = useState([{ id: 1, optionText: "", optionPoints: 0, optionTips: "", evidenceTitle: "", optionEviQuestion: "", optionKeyword: "", optionImageName: "" }]);
  const [optionTitle, setOptionTitle] = useState("")
  const [optionTipChange, setOptionTipChange] = useState("")
  const [points, setPoints] = useState(0)
  const [tipsError, setTipsError] = useState("")




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
    console.log(addNewOption, "addNewOption")

    const data = {
      sector: sectorSelected?.name, 
      subSector: subSectorSelected?.name,  
      type: typeSelected?.name,
      industryFunction: industryFunctionSelected?.name,  
      userFunction: userFunctionSelected?.name,  
      selectAssessmentCat: assessmentSelected?.name,  
      selectComplianceCat: complianceSelected?.name,

      jurisdiction: standardsJurisdictionSelected?.name || regulationsAndFrameworkJurisdictionSelected?.name || guidanceJurisdictionSelected.name,
      scheme: standardsSchemeSelected?.name || regulationsAndFrameworkSchemeSelected?.name || regulationsAndFrameworkSchemeSelectedB?.name || guidanceSchemeSelected?.name,
      body: standardBodySelected?.name || regulationsAndFrameworkBodySelected?.name || guidanceBodySelected?.name,
      complianceTitle: standardComplianceTitleSelected?.name || standardComplianceTitleSelectedB?.name || standardComplianceTitleSelectedC?.name || regulationsAndFrameworkTitleSelected?.name || regulationsAndFrameworkTitleSelectedB?.name,
      tsi: regulationsAndFrameworkTSISelected?.name,
      ntsn: guidanceNTSNsSelected?.name,

      // standards: standardsJurisdictionSelected?.name || regulationsAndFrameworkSelected?.name ,  
      // international: standardsSchemeSelected?.name,  //Change the body property jurisdiction
      // general:  "",  // change the body property to scheme        
      
      text: optionTitle,
      point: points,
      tips: addNewOption[0]?.optionTips,
      options: addNewOption.map(option => ({
        text: option.optionText,
        point: Number(option.optionPoints),
        evd: option?.optionImageName?.secure_url,
        evdText: option.optionEviQuestion,
        tips: option.optionTips,
        keyWord: option.optionKeyword
      }))
    }
    console.log(data, "akpabio")
    // return 
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
      // window.location.reload()

    })
    .catch((err) => {
      console.log(err, 'err')
      toast(`${err?.response?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      })
    })
    // if (userFunctionSelected?.name === "") {
    //     setUserFunctionError("User Function is Required")
    // } else {
    //   return
   

    // }


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
   if (sections.length === 1 && optionTitle && tipsError) {
      submitForm()
    } else {
      setTipsError("Tips is required")
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
          standardsJurisdictionSelected={standardsJurisdictionSelected}
          setStandardsJurisdictionSelected={setStandardsJurisdictionSelected}
          standardsSchemeSelected={standardsSchemeSelected}
          setStandardsSchemeSelected={setStandardsSchemeSelected}
          standardBodySelected={standardBodySelected}
          setStandardBodySelected={setStandardBodySelected}
          standardComplianceTitleSelected={standardComplianceTitleSelected}
          setStandardComplianceTitleSelected={setStandardComplianceTitleSelected}
          standardComplianceTitleSelectedB={standardComplianceTitleSelectedB}
          setStandardComplianceTitleSelectedB={setStandardComplianceTitleSelectedB}
          standardComplianceTitleSelectedC={standardComplianceTitleSelectedC}
          setStandardComplianceTitleSelectedC={setStandardComplianceTitleSelectedC}
          // userFunctionError={userFunctionError}

          //Regulations and Framework
          regulationsAndFrameworkJurisdictionSelected={regulationsAndFrameworkJurisdictionSelected}
          setRegulationsAndFrameworkJurisdictionSelected={setRegulationsAndFrameworkJurisdictionSelected}
          regulationsAndFrameworkSchemeSelected={regulationsAndFrameworkSchemeSelected}
          setRegulationsAndFrameworkSchemeSelected={setRegulationsAndFrameworkSchemeSelected}
          regulationsAndFrameworkSchemeSelectedB={regulationsAndFrameworkSchemeSelectedB}
          setRegulationsAndFrameworkSchemeSelectedB={setRegulationsAndFrameworkSchemeSelectedB}
          regulationsAndFrameworkBodySelected={regulationsAndFrameworkBodySelected}
          setRegulationsAndFrameworkBodySelected={setRegulationsAndFrameworkBodySelected}
          regulationsAndFrameworkTitleSelected={regulationsAndFrameworkTitleSelected}
          setRegulationsAndFrameworkTitleSelected={setRegulationsAndFrameworkTitleSelected}
          regulationsAndFrameworkTitleSelectedB={regulationsAndFrameworkTitleSelectedB}
          setRegulationsAndFrameworkTitleSelectedB={setRegulationsAndFrameworkTitleSelectedB}
          regulationsAndFrameworkTSISelected={regulationsAndFrameworkTSISelected}
          setRegulationsAndFrameworkTSISelected={setRegulationsAndFrameworkTSISelected}

          // Guidance & Code of practice
          guidanceJurisdictionSelected={guidanceJurisdictionSelected}
          setGuidanceJurisdictionSelected={setGuidanceJurisdictionSelected}
          guidanceSchemeSelected={guidanceSchemeSelected}
          setGuidanceSchemeSelected={setGuidanceSchemeSelected}
          guidanceBodySelected={guidanceBodySelected}
          setGuidanceBodySelected={setGuidanceBodySelected}
          guidanceNTSNsSelected={guidanceNTSNsSelected}
          setGuidanceNTSNsSelected={setGuidanceNTSNsSelected}

          sector={sector}
          subSector={subSector}
          sectorType={sectorType}
          industryFunction={industryFunction}
          userFunction={userFunction}
          assessment={assessment}
          compliance={compliance}

          //Standards
          standardsJurisdiction={standardsJurisdiction}
          standardsScheme={standardsScheme}
          standardBody={standardBody}
          standardComplianceTitle={standardComplianceTitle}
          standardComplianceTitleB={standardComplianceTitleB}
          standardComplianceTitleC={standardComplianceTitleC}

          //Regulations and Framework
          regulationsAndFrameworkJurisdiction={regulationsAndFrameworkJurisdiction}
          regulationsAndFrameworkScheme={regulationsAndFrameworkScheme}
          regulationsAndFrameworkSchemeB={regulationsAndFrameworkSchemeB}
          regulationsAndFrameworkBody={regulationsAndFrameworkBody}
          regulationsAndFrameworkTitle={regulationsAndFrameworkTitle}
          regulationsAndFrameworkTitleB={regulationsAndFrameworkTitleB}
          regulationsAndFrameworkTSI={regulationsAndFrameworkTSI}


          //Guidance & Code of practice
          guidanceJurisdiction={guidanceJurisdiction}
          guidanceScheme={guidanceScheme}
          guidanceBody={guidanceBody}
          guidanceNTSNs={guidanceNTSNs}

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
        points={points}
        setPoints={setPoints}
        tipsError={tipsError}
        setTipsError={setTipsError}
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
            label={sections.length === 1 ? "Publish" : "Section"} 
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
