import React, { useState, Fragment } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Listbox, Transition } from '@headlessui/react';

import Copy from "../../../assets/svg/copy.svg"
import Bin from "../../../assets/svg/bin.svg"

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

  const type = [
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

const Section = ({ setType, sectionId, onDelete }) => {
    const [title, setTitle] = useState("")
    const [sectorSelected, setSectorSelected] = useState(sector[0])
    const [subSectorSelected, setSubSectorSelected] = useState(subSector[0])
    const [typeSelected, setTypeSelected] = useState(type[0])
    const [industryFunctionSelected, setIndustryFunctionSelected] = useState(industryFunction[0])
    const [userFunctionSelected, setUserFunctionSelected] = useState(userFunction[0])
    const [assessmentSelected, setAssessmentSelected] = useState(assessment[0])
    const [complianceSelected, setComplianceSelected] = useState(compliance[0])

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

            <Listbox value={sectorSelected} onChange={sectorSelected}>
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
                                {type.map((item, index) => (
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
                        <span className="block truncate font-medium text-[22px] font-Kumbh">{assessmentSelected.name}</span>
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
                        <span className="block truncate font-medium text-[22px] font-Kumbh">{complianceSelected.name}</span>
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