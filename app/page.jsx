"use client"
import React, { useState } from 'react'
import Prompt from './_components/Prompt.jsx'
import Sidebar from './_components/Sidebar.jsx'
import { AlignLeft, Settings } from 'lucide-react'
import Image from 'next/image'

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
    <div className={`flex ${extend ? 'w-full' : 'w-full'} transition-all duration-300`}>
        {extend && <Sidebar />}
        <div className={`flex-1 ${extend ? 'ml-60' : 'ml-0'} transition-all duration-300`}>
          <Prompt />
        </div>
      </div>
    </>
  )
}

export default page