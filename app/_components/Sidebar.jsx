import { MapPin, MessageCircleMore, SquareActivity } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidetab'><SquareActivity/>Doctor Support</div>
        <div className='sidetab'><MapPin/> Location</div>
        <div className='sidetab'><MessageCircleMore/> Nearby Farmer</div>
    </div>
  )
}

export default Sidebar