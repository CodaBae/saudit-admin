import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Switch, Upload } from 'antd';

import UploadIcon from "../../../assets/png/upload_icon.png"

const UploadEvidence = ({ handleClose, setAddNewOption, addNewOption }) => {
    const [evidenceQuestion, setEvidenceQuestion] = useState("")
    const [keyWord, setKeyWord] = useState("")

    const handleEvidenceQuestion = (optionId, e) => {
        const newOptions = addNewOption.map(option =>
          option.id === optionId ? { ...option, optionEviQuestion: e.target.value } : option
        );
        setAddNewOption(newOptions);
    };

    const handleKeyWord = (optionId, e) => {
        const newOptions = addNewOption.map(option =>
          option.id === optionId ? { ...option, optionKeyword: e.target.value } : option
        );
        setAddNewOption(newOptions);
    };

    // const handleEvidenceQuestion = (e) => {
    //     setEvidenceQuestion(e.target.value)
    // } 

    // const handleKeyWord = (e) => {
    //     setKeyWord(e.target.value)
    // } 

        const { Dragger } = Upload;
        const props = {
            name: 'file',
            multiple: true,
            action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
            onChange(info) {
                const { status } = info.file;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
            onDrop(e) {
                console.log('Dropped files', e.dataTransfer.files);
            },
        };

        const onChange = (checked) => {
            console.log(`switch to ${checked}`);
          };

        // const handleData = () => {
        //     localStorage.setItem("title", "Strategic Planning and Investment")
        //     localStorage.setItem("question", evidenceQuestion)
        //     localStorage.setItem("word", keyWord)
        // }

        const UploadData = () => {
            handleClose()
        }
        

  return (
    <div className='w-[90%] h-[85%] bg-[#fff] oveflow-auto flex flex-col rounded items-center px-[46px] py-[32px] items-center gap-[26px]'>
        <div className='flex gap-auto w-full justify-between'>
            <div className='w-[200px]'></div>
            <div className='flex flex-col items-center gap-1'>
                <p className='font-Kumbh text-[22px] font-semibold'>Upload evidence</p>
                <p className='font-hanken'>You can upload <span className='text-[#36A73A] font-semibold'>multiple evidence</span> to one option</p>
            </div>
            <button className='w-[144px] bg-[#000] p-2 rounded-lg h-[44px] mr-10' onClick={() => UploadData()}>
                <p className='text-[#fff] font-hanken text-sm font-medium'>Save & Continue</p>
            </button>
        </div>
        {addNewOption.map((item, index) => (
            <div className='grid grid-cols-2 items-center gap-5' key={item.id}>
                <div className='w-[494px] h-[101px] rounded-lg p-[15px] bg-[#F7F8F8] mt-4'>
                    <div className='flex items-center  gap-1.5'>
                        <input type='radio' />
                        <p className='font-hanken text-[#363636] font-medium'>Strategic Planning and Investment</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-end'>
                        <p className='font-hanken text-[#888B91] text-[11px]'>Maximum size 25MB</p>
                    </div>
                    <Dragger {...props} style={{ background: "#fff" }}>
                        <div className='flex items-center justify-center gap-[21px] h-[65px]'>
                            <img src={UploadIcon} alt='Upload Icon' className='w-[30px] h-[35px]' />
                            <p className="font-hanken text-[#000] text-[17px]">Drag and drop file or <span className='underline font-medium'>choose file</span></p>
                        </div>
                    </Dragger>
                </div>


                <div className='flex flex-col mt-2.5 gap-1'>
                    <p className='font-hanken text-sm text-[#000]'>Type suggested evidence's for this question</p>
                    <textarea
                        className='rounded-lg w-[494px] h-[101px] text-[12px] text-[#000] placeholder-[#D6D6D6] border border-[#8B8B8B] outline-none p-4'
                        placeholder='ISO 1000'
                        onChange={(e) => handleEvidenceQuestion(item?.id, e)}
                        value={item?.optionEviQuestion}
                    >
                    </textarea>
                </div>

                <div className='flex flex-col mt-2.5 gap-1'>
                    <p className='font-hanken text-xs text-[#000]'>Key words</p>
                    <textarea
                        className='rounded-lg w-[494px] text-sm text-[#000] placeholder-[#D6D6D6] h-[101px] border border-[#8B8B8B] outline-none p-4'
                        placeholder='Type keywords to this evidence'
                        onChange={(e) => handleKeyWord(item?.id, e)}
                        value={item?.optionKeyword}
                    >
                    </textarea>
                </div>
            </div>
        ))}

        <div className='flex justify-end w-full mt-[0px]'>
            <div className='flex items-center gap-2 mr-10'>
                <p className='text-[#000] font-Kumbh font-medium text-[14px]'>Show Evidence</p>
                <Switch size="small"  onChange={onChange}/>
            </div>
        </div>

    </div>
  )
}

export default UploadEvidence