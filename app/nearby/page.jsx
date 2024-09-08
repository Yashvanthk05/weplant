"use client"
import React, { useState } from 'react'
import Sidebar from '../_components/Sidebar.jsx'
import { AlignLeft, Settings,ArrowRight,User,SwatchBook,ShieldPlus } from 'lucide-react'
import Image from 'next/image'
import {doctors} from '../../Schema/index.js'

const page = () => {
  const [extend,setExtend]=useState(false);
  const handleToggleSidebar=()=>{
    setExtend(prev=>!prev)
  }
  return (
    <>
    <div className='w-screen flex items-center justify-between pr-10 pl-10 pt-5 backdrop-blur-sm'>
      <button onClick={handleToggleSidebar}><AlignLeft size={28}/></button>
        <Image className='rounded-md' src='/assets/logo.png' width={150} height={150} alt='logo'/>
        <Settings size={28}/>
    </div>
    <div className={`flex absolute ${extend ? 'w-full' : 'w-full'} transition-all duration-300`}>
        {extend && <Sidebar />}
        <div className="flex flex-col items-center justify-center w-screen gap-8 p-8" style={{minHeight:'100%'}}>
            <span className='text-2xl font-black text-green-600'>Chat with Nearby Farmer</span>
            <span className='text-2xl font-black text-green-600'>In Deployment Process..</span>
            <span className='text-2xl font-black text-green-600'>Sorry for the Inconvenience</span>
        </div>
      </div>
    </>
  )
}

export default page