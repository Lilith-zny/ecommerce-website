import logo from '@/assets/images/logo.png'
import { Link } from 'react-router'

// Icon
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <div className="h-[100px]">
        <div className="container mx-auto max-w-[1320px]">
          <div className='flex flex-col md:flex-row md:justify-between items-center h-[100px]'>
              <Link className='flex md:flex-row items-center' to='/'>
                <img className='w-[60px]' src={logo} alt="" />
                <h1 className='text-[#000000] text-[30px] font-bold'>Furniro</h1>
              </Link>
            <ul className='flex flex-col md:flex-row md:space-x-[50px]'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/shop'>Shop</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className='flex flex-col md:flex-row md:space-x-[30px]'>
              <BsPerson className='text-[20px] cursor-pointer' />
              <IoSearchOutline className='text-[20px] cursor-pointer' />
              <MdFavoriteBorder className='text-[20px] cursor-pointer' />
              <IoCartOutline className='text-[20px] cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
