"use client"
import React, { useState } from 'react'
import Sidebar from '../_components/Sidebar.jsx'
import { AlignLeft, Settings,ArrowRight,User,SwatchBook,ShieldPlus } from 'lucide-react'
import Image from 'next/image'
import {doctors} from '../../Schema/index.js'
import Link from 'next/link'

const page = () => {
  const [extend,setExtend]=useState(false);
  const handleToggleSidebar=()=>{
    setExtend(prev=>!prev)
  }
  return (
    <>
    <div className='w-screen flex items-center justify-between pr-10 pl-10 pt-5 backdrop-blur-sm'>
      <button onClick={handleToggleSidebar}><AlignLeft size={28}/></button>
      <Link href={'/'}><Image className='rounded-md' src='/assets/logo.png' width={150} height={150} alt='logo'/></Link>
        <Settings size={28}/>
    </div>
    <div className={`flex absolute ${extend ? 'w-full' : 'w-full'} transition-all duration-300`}>
        {extend && <Sidebar />}
        <div className="flex flex-col items-center justify-center w-screen gap-8 p-8" style={{minHeight:'100%'}}>
            <span className='text-2xl font-black text-green-600'>24x7 Plant Pathologist Support</span>
            <div className='searchbar'>
                <input type="text" placeholder='Search a Doctor..' />
                <button style={{color:'white'}}>Find<ArrowRight/></button>
            </div>
            <div className='doctors'>
                {doctors.map(doctor=>(
                    <div key={doctor.id} className='doccard'>
                        <span className='flex'><User/>: {doctor.name}</span>
                        <span className='flex'><ShieldPlus/>: {doctor.expertise_level}</span>
                        <span className='flex'><SwatchBook/>: {doctor.plant_specialist}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default page