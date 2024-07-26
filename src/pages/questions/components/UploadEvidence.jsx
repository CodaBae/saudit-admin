import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Switch, Upload } from 'antd';

import UploadIcon from "../../../assets/png/upload_icon.png"
import axios from 'axios';

const UploadEvidence = ({ handleClose, setAddNewOption, addNewOption }) => {
    const [evidenceQuestion, setEvidenceQuestion] = useState("")
    const [keyWord, setKeyWord] = useState("")
    const [userImage, setUserImage] = useState(null)

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

    // const handleFileUpload = (optionId, e) => {
    //     const newOptions = addNewOption.map(option =>
    //         option.id === optionId ? { ...option, optionImageName: e.target.files[0] } : option
    //     );
    //     setAddNewOption(newOptions);
    // }

    
    const handleFileUpload = async (optionId, event) => {
        const files = event.target.files;
        if (files) {
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'rztljgso');
    
            try {
              const uploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dizlp3hvp/upload", formData);
              const data = uploadResponse.data;
              console.log(data, "data")
              const newOptions = addNewOption.map(option =>
                option.id === optionId ? { ...option, optionImageName: data } : option
            );
            setAddNewOption(newOptions);
           
            } catch (error) {
              console.error('Error uploading file:', error);
            }
          }
        }
      };

    // const handleFileChange = (event) => {
    //     const selectedFile = event.target.files[0];
    //     setUserImage(selectedFile)
    // };

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
           // action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
            onChange(info) {
                // const { status } = info.file;
                // if (status !== 'uploading') {
                //     console.log(info.file, info.fileList);
                // }
                // if (status === 'done') {
                //     message.success(`${info.file.name} file uploaded successfully.`);
                // } 
                // else if (status === 'error') {
                //     message.error(`${info.file.name} file upload failed.`);
                // }
            },
            onDrop(e) {
                console.log('Dropped files', e.dataTransfer.files);
            },
        };

        const onChange = (checked) => {
            console.log(`switch to ${checked}`);
          };

        const UploadData = () => {
            handleClose()
        }
        

  return (
    <div style={{ overflow:"scroll" }}  className='w-[90%] h-[85%] bg-[#fff] flex flex-col rounded items-center px-[46px] py-[32px] items-center gap-[26px]'>
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
        {addNewOption.map((item, index) => {
        console.log(item, "position")
        return (
            <div className='grid grid-cols-2 items-center gap-5' key={item.id}>
                <div className='w-[494px] h-[101px] rounded-lg p-[15px] bg-[#F7F8F8] mt-4'>
                    <div className='flex items-center  gap-1.5'>
                        <input type='radio' />
                        <p className='font-hanken text-[#363636] font-medium'>{item?.optionText}</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-end'>
                        <p className='font-hanken text-[#888B91] text-[11px]'>Maximum size 25MB</p>
                    </div>
                    <div className='flex flex-col lg:mx-auto  bg-transparent rounded-xl items-center lg:w-[504px] border-dashed border-[#D0D5DD] border px-6 py-[28px]  gap-[16px]'>
                        <div className='p-[9px] w-full cursor-pointer flex justify-center gap-[16px] '>
                            {  
                                item?.optionImageName?.original_filename ? 
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[15px] font-hanken text-[#858585]'>{ item?.optionImageName?.original_filename}</p>
                                            <p className='text-[#000] text-[11px]'>Completed</p>
                                        </div>
                                        <div className='w-[266px] h-[5px] bg-[#51E38B] rounded-lg'></div>
                                    </div> 
                                    :
                                    <div className='flex items-center gap-[16px]'>
                                        <img src={UploadIcon} alt='upload' className='w-6 h-6' />
                                        {/* <div className='flex flex-col'>
                                            <p className='text-sm font-semibold font-inter '>
                                                
                                            </p>
                                        </div> */}
                                        <label htmlFor="fileInput" className='cursor-pointer flex  items-center text-[#000] text-sm '>
                                            Drag and Drop <span className='text-[#475367] ml-1'>or choose file</span>
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{ display: 'none' }}
                                                onChange={(e) => handleFileUpload(item?.id, e)}
                                            />
                                        </label>
                                    </div>
                            }
                        </div>
                    </div>

                    {/* <Dragger {...props} style={{ background: "#fff" }}>
                        <div className='flex items-center justify-center gap-[21px] h-[65px]'>
                            <img src={UploadIcon} alt='Upload Icon' className='w-[30px] h-[35px]' />
                            <p className="font-hanken text-[#000] text-[17px]">Drag and drop file or <span className='underline font-medium'>choose file</span></p>
                        </div>
                    </Dragger> */}
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
        )})}

        <div className='flex justify-end hidden w-full mt-[0px]'>
            <div className='flex items-center gap-2 mr-10'>
                <p className='text-[#000] font-Kumbh font-medium text-[14px]'>Show Evidence</p>
                <Switch size="small"  onChange={onChange}/>
            </div>
        </div>

    </div>
  )
}

export default UploadEvidence