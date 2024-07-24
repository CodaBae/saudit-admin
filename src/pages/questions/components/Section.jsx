import React, { useState, Fragment } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Listbox, Transition } from '@headlessui/react';

import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"



const Section = ({ 
    setType, 
    sectionId, 
    onDelete,

    sectorSelected,
    setSectorSelected,
    subSectorSelected,
    setSubSectorSelected,
    typeSelected,
    setTypeSelected,
    industryFunctionSelected,
    setIndustryFunctionSelected,
    userFunctionSelected,
    setUserFunctionSelected,
    assessmentSelected,
    setAssessmentSelected,
    complianceSelected,
    setComplianceSelected,
    standardsJurisdictionSelected,
    setStandardsJurisdictionSelected,
    standardsSchemeSelected,
    setStandardsSchemeSelected,
    standardBodySelected,
    setStandardBodySelected,
    standardComplianceTitleSelected,
    setStandardComplianceTitleSelected,
    standardComplianceTitleSelectedB,
    setStandardComplianceTitleSelectedB,
    standardComplianceTitleSelectedC,
    setStandardComplianceTitleSelectedC,
    sector,
    subSector,
    sectorType,
    industryFunction,
    userFunction,
    assessment,
    compliance,
    standardsJurisdiction,
    standardsScheme,
    standardBody,
    standardComplianceTitle,
    standardComplianceTitleB,
    standardComplianceTitleC,

    //Regulations And Frameworks
    regulationsAndFrameworkJurisdictionSelected,
    setRegulationsAndFrameworkJurisdictionSelected,
    regulationsAndFrameworkSchemeSelected,
    setRegulationsAndFrameworkSchemeSelected,
    regulationsAndFrameworkSchemeSelectedB,
    setRegulationsAndFrameworkSchemeSelectedB,
    regulationsAndFrameworkBodySelected,
    setRegulationsAndFrameworkBodySelected,
    regulationsAndFrameworkTitleSelected,
    setRegulationsAndFrameworkTitleSelected,
    regulationsAndFrameworkTitleSelectedB,
    setRegulationsAndFrameworkTitleSelectedB,
    regulationsAndFrameworkTSISelected,
    setRegulationsAndFrameworkTSISelected,

    regulationsAndFrameworkJurisdiction,
    regulationsAndFrameworkScheme,
    regulationsAndFrameworkSchemeB,  
    regulationsAndFrameworkBody, 
    regulationsAndFrameworkTitle,
    regulationsAndFrameworkTitleB,
    regulationsAndFrameworkTSI,

    //Guidance & Code of practice
    guidanceJurisdictionSelected,
    setGuidanceJurisdictionSelected,
    guidanceSchemeSelected,
    setGuidanceSchemeSelected,
    guidanceBodySelected,
    setGuidanceBodySelected,
    guidanceNTSNsSelected,
    setGuidanceNTSNsSelected,

    guidanceJurisdiction,
    guidanceScheme,
    guidanceBody,
    guidanceNTSNs
}) => {
    const [title, setTitle] = useState("")
    

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDelete = () => {
        onDelete(sectionId);
    };


  return (
    <div className='w-[1065px] mt-[33px] h-auto p-10  animate__animated animate__fadeInUp flex flex-col bg-[#F4F4F4] border border-x-0 border-b-0 border-t border-[#40D49F]'>
        <div className='flex justify-between items-center'>
            <p className='font-Kumbh'>Section 1</p>
            <div className='flex items-center gap-[37px]'>
                <img src={Copy} alt='Copy' />
                <img src={Bin} alt='Bin' className='cursor-pointer' onClick={() => { handleDelete()}} />
            </div>
        </div>
        <div className='flex flex-col gap-4'>

            <Listbox value={sectorSelected} onChange={setSectorSelected}>
                <div className="relative">
                    <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                        <span className="block truncate font-medium text-[22px] font-Kumbh">{sectorSelected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <IoIosArrowDown
                                className=" text-[22px] mr-[36px]"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {sector.map((item, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={item}
                                >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate text-lg ${
                                            selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>

            <div className='w-full flex items-center gap-[22px] mt-[20px]'>

                <Listbox value={subSectorSelected} onChange={setSubSectorSelected}>
                    <div className="relative">
                        <Listbox.Button className='w-[480px] relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                            <span className="block truncate font-medium text-[22px] font-Kumbh">{subSectorSelected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <IoIosArrowDown
                                    className=" text-[22px] mr-[36px]"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {subSector.map((item, index) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={item}
                                    >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate text-lg ${
                                                selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                                {item.name}
                                            </span>
                                        </>
                                    )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>

                <Listbox value={typeSelected} onChange={setTypeSelected}>
                    <div className="relative">
                        <Listbox.Button className='w-[480px] relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                            <span className="block truncate font-medium text-[22px] font-Kumbh">{typeSelected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <IoIosArrowDown
                                    className=" text-[22px] mr-[36px]"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {sectorType.map((item, index) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={item}
                                    >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate text-lg ${
                                                selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                                {item.name}
                                            </span>
                                        </>
                                    )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>

            <Listbox value={industryFunctionSelected} onChange={setIndustryFunctionSelected}>
                <div className="relative">
                    <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                        <span className="block truncate font-medium text-[22px] font-Kumbh">{industryFunctionSelected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <IoIosArrowDown
                                className=" text-[22px] mr-[36px]"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {industryFunction.map((item, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={item}
                                >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate text-lg ${
                                            selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>

            <Listbox value={userFunctionSelected} onChange={setUserFunctionSelected}>
                <div className="relative">
                    <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                        <span className="block truncate font-medium text-[22px] font-Kumbh">{userFunctionSelected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <IoIosArrowDown
                                className=" text-[22px] mr-[36px]"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {userFunction.map((item, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={item}
                                >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate text-lg ${
                                            selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>

            <Listbox value={assessmentSelected} onChange={setAssessmentSelected}>
                <div className="relative">
                    <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                        <span className="block truncate font-medium text-[22px] font-Kumbh">{assessmentSelected.name || "Select Module"}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <IoIosArrowDown
                                className=" text-[22px] mr-[36px]"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {assessment.map((item, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={item}
                                >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate text-lg ${
                                            selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>

            <Listbox value={complianceSelected} onChange={setComplianceSelected}>
                <div className="relative">
                    <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                        <span className="block truncate font-medium text-[22px] font-Kumbh">{complianceSelected.name || "Select sustainability compliance category"}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <IoIosArrowDown
                                className=" text-[22px] mr-[36px]"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {compliance.map((item, index) => (
                                <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={item}
                                >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate text-lg ${
                                            selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                    </>
                                )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>

                    {/* Standards */}
            {
                complianceSelected?.name === "Standards" && (
                    <Listbox value={standardsJurisdictionSelected} onChange={setStandardsJurisdictionSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{standardsJurisdictionSelected.name || "Jurisdiction"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {standardsJurisdiction.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                standardsJurisdictionSelected?.name === "International" && (
                    <Listbox value={standardsSchemeSelected} onChange={setStandardsSchemeSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{standardsSchemeSelected.name || "Scheme"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {standardsScheme.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                standardsSchemeSelected?.name === "General" && (
                    <Listbox value={standardBodySelected} onChange={setStandardBodySelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{standardBodySelected.name || "Body"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {standardBody.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                standardBodySelected?.name === "ISSB" && (
                    <Listbox value={standardComplianceTitleSelected} onChange={setStandardComplianceTitleSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{standardComplianceTitleSelected.name || "Compliance title"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {standardComplianceTitle.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                standardBodySelected?.name === "GRI" && (
                    <Listbox value={standardComplianceTitleSelectedB} onChange={setStandardComplianceTitleSelectedB}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{standardComplianceTitleSelectedB.name || "Compliance title"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {standardComplianceTitleB.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                standardBodySelected?.name === "SASB" && (
                    <Listbox value={standardComplianceTitleSelectedC} onChange={setStandardComplianceTitleSelectedC}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{standardComplianceTitleSelectedC.name || "Compliance title"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {standardComplianceTitleC.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

                                {/* Regulations & Frameworks */}
            {
                complianceSelected?.name === "Regulations & Frameworks" && (
                    <Listbox value={regulationsAndFrameworkJurisdictionSelected} onChange={setRegulationsAndFrameworkJurisdictionSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{regulationsAndFrameworkJurisdictionSelected.name || "Jurisdiction"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {regulationsAndFrameworkJurisdiction.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                regulationsAndFrameworkJurisdictionSelected?.name === "International" && (
                    <Listbox value={regulationsAndFrameworkSchemeSelected} onChange={setRegulationsAndFrameworkSchemeSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{regulationsAndFrameworkSchemeSelected.name || "Compliance Scheme"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {regulationsAndFrameworkScheme.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                regulationsAndFrameworkJurisdictionSelected?.name === "Regional - Europe" && (
                    <Listbox value={regulationsAndFrameworkSchemeSelectedB} onChange={setRegulationsAndFrameworkSchemeSelectedB}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{regulationsAndFrameworkSchemeSelectedB.name || "Scheme"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {regulationsAndFrameworkSchemeB.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                regulationsAndFrameworkSchemeSelectedB?.name === "Industry Specific" && (
                    <Listbox value={regulationsAndFrameworkBodySelected} onChange={setRegulationsAndFrameworkBodySelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{regulationsAndFrameworkBodySelected.name || "Body"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {regulationsAndFrameworkBody.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                regulationsAndFrameworkBodySelected?.name === "European Railway Agency" && (
                    <Listbox value={regulationsAndFrameworkTitleSelected} onChange={setRegulationsAndFrameworkTitleSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{regulationsAndFrameworkTitleSelected.name || "Title"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {regulationsAndFrameworkTitle.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                regulationsAndFrameworkBodySelected?.name === "European Standard" && (
                    <Listbox value={regulationsAndFrameworkTitleSelectedB} onChange={setRegulationsAndFrameworkTitleSelectedB}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{regulationsAndFrameworkTitleSelectedB.name || "Title"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {regulationsAndFrameworkTitleB.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                regulationsAndFrameworkTitleSelected?.name === "Technical Specification for Interopability (TSI)" && (
                    <Listbox value={regulationsAndFrameworkTSISelected} onChange={setRegulationsAndFrameworkTSISelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{regulationsAndFrameworkTSISelected.name || "TSI"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {regulationsAndFrameworkTSI.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

                                      {/* Guidance & Code of practice */}
            {
                complianceSelected?.name === "Guidance & Code of practice" && (
                    <Listbox value={guidanceJurisdictionSelected} onChange={setGuidanceJurisdictionSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{guidanceJurisdictionSelected.name || "Jurisdiction"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {guidanceJurisdiction.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                guidanceJurisdictionSelected?.name === "Regional - Europe" && (
                    <Listbox value={guidanceSchemeSelected} onChange={setGuidanceSchemeSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{guidanceSchemeSelected.name || "Scheme"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {guidanceScheme.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                guidanceSchemeSelected?.name === "Industry Specific" && (
                    <Listbox value={guidanceBodySelected} onChange={setGuidanceBodySelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{guidanceBodySelected.name || "Body"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {guidanceBody.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }

            {
                guidanceBodySelected?.name === "National Technical Specification Notices(NTSNs)" && (
                    <Listbox value={guidanceNTSNsSelected} onChange={setGuidanceNTSNsSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{guidanceNTSNsSelected.name || "NTSNs"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className=" text-[22px] mr-[36px]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {guidanceNTSNs.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate text-lg ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )
            }
           
        </div>
    </div>
  )
}

export default Section


{/* <div 
    className='w-full bg-[#fff] pl-5 pr-[36px] py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' 
>
    <p className='font-medium text-[22px] font-Kumbh'>Select compliance category</p>
    <IoIosArrowDown className='text-[22px]' />
</div> */}