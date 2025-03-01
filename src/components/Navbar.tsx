import logo from "@/assets/images/logo.png";
import { Link } from "react-router";

// Icon
import { IoSearchOutline, IoSquare } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const hamburger = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <>
      <div>
        <div className="container mx-auto max-w-[1320px]">
          <div className='flex justify-between items-center h-[50px]'>

              <Link className='flex items-center' to='/'>
                <img className='w-[60px]' src={logo} alt="" />
                <h1 className='text-[#000000] text-[30px] font-bold'>Furniro</h1>
              </Link>

              <ul className='md:flex md:space-x-[50px] hidden'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/shop'>Shop</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
              </ul>

              <div className='md:flex md:space-x-[30px] hidden'>
                  <BsPerson className='text-[20px] cursor-pointer' />
                  <IoSearchOutline className='text-[20px] cursor-pointer' />
                  <MdFavoriteBorder className='text-[20px] cursor-pointer' />
                  <IoCartOutline className='text-[20px] cursor-pointer' />
              </div>

              <div className="md:hidden mr-4" onClick={hamburger}>
                <RxHamburgerMenu size={30} />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

