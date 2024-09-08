import { MapPin, MessageCircleMore, SquareActivity } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link href={'docsupport'} className='sidetab'><SquareActivity/>Doctor Support</Link>
        <Link href="location" className='sidetab'><MapPin/> Location</Link>
        <Link href="nearby" className='sidetab'><MessageCircleMore/> Nearby Farmer</Link>
    </div>
  )
}

export default Sidebar