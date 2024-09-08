"use client"
import { BrainCircuit, Send, Terminal, UserRoundCheck } from 'lucide-react'
import React, { useState } from 'react'

const Prompt = () => {
    const [image,setImage] = useState(null);
    const handleFileChange = (e)=>{
        const file=e.target.files[0];
        if(file){
            const reader=new FileReader();
            reader.onloadend=()=>{
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    const handleSubmit=async()=>{
        if(!image) return;
        try{
            const response = await fetch('/api/prompt',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({image:image})
            });
            const result = await response.json();
            console.log('API response:',result);
        }catch(error){
            console.log("Error sending image to API:",error);
        }
    }

  return (
    <div className='pp'>
        <div className='flex flex-col items-center justify-center'>
            <span className='text-3xl text-green-600 font-black'>AI Driven Crop Disease Prediction</span>
        <span className='text-3xl text-green-800 font-black'>& Management System</span>
        </div>
        <div className='flex gap-4'>
            <div className='tab'>
                <BrainCircuit color='green'/>
                Machine Learning Based
            </div>
            <div className='tab'>
                <UserRoundCheck color='green'/>
                User Friendly Interface
            </div>
        </div>
        <form onSubmit={handleSubmit} className='flex items-center
        gap-2'>
            <div className='prompt'>
            <input type="file" name="uploadimg" id="uploadimg" accept='image/*'/>
        </div>
        <button type="submit" className='submitbtn'><Send/>Prompt</button>
        </form>
        
        
    </div>
  )
}

export default Prompt