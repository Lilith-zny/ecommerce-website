import room1 from '@/assets/images/rooms1.png'
import room2 from '@/assets/images/rooms2.png'
import room3 from '@/assets/images/rooms3.png'

import { Link } from "react-router";

export default function Rooms() {
  return (
    <>
      <div className="bg-[#FCF8F3]">
        <div className="container mx-auto max-w-[1320px]">
          <div className='flex flex-col md:flex-row justify-start items-center p-10 gap-10'>
            <div>
              <h2 className='font-bold text-2xl'>
                50+ Beautiful rooms<br/>inspiration
              </h2>
              <p className='text-gray-500 mb-4'>Our designer already made a lot of beautiful<br/> prototipe of rooms that inspire you</p>
              <Link to='/' className='bg-[#B88E2F] py-2 px-5 text-white text-[12px]'>Explore More</Link>
            </div>
            <div className='flex gap-x-3'>
              <img className='h-[400px]' src={room1} alt="" />
              <img className='h-[400px]' src={room1} alt="" />
              <img className='h-[400px]' src={room1} alt="" />
              <img className='h-[400px]' src={room1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


