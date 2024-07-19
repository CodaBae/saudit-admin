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
    standardsSelected,
    setStandardsSelected,
    internationalSelected,
    setInternationalSelected,
    generalSelected,
    setGeneralSelected,
    complianceTitleSelected,
    setComplianceTitleSelected,
    sector,
    subSector,
    sectorType,
    industryFunction,
    userFunction,
    assessment,
    compliance,
    standards,
    international,
    general,
    complianceTitle
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

            {
                complianceSelected?.name === "Standards" && (
                    <Listbox value={standardsSelected} onChange={setStandardsSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{standardsSelected.name || "Compliance Jurisdiction"}</span>
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
                                    {standards.map((item, index) => (
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
                standardsSelected?.name === "International" && (
                    <Listbox value={internationalSelected} onChange={setInternationalSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{internationalSelected.name || "Compliance Scheme"}</span>
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
                                    {international.map((item, index) => (
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
                internationalSelected?.name === "General" && (
                    <Listbox value={generalSelected} onChange={setGeneralSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{generalSelected.name || "General - Compliance body"}</span>
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
                                    {general.map((item, index) => (
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
                generalSelected?.name === "ISSB" && (
                    <Listbox value={complianceTitleSelected} onChange={setComplianceTitleSelected}>
                        <div className="relative">
                            <Listbox.Button className='w-full relative cursor-default bg-[#fff] pl-5  py-6 outline-none text-[#000] flex items-center justify-between h-[80px]  font-semibold text-[22px] mt-[20px]' >
                                <span className="block truncate font-medium text-[22px] font-Kumbh">{complianceTitleSelected.name || "Compliance title"}</span>
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
                                    {complianceTitle.map((item, index) => (
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