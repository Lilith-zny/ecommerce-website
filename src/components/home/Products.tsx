import productImg1 from '@/assets/images/our-product01.png'
import productImg2 from '@/assets/images/our-product02.png'
import productImg3 from '@/assets/images/our-product03.png'
import productImg4 from '@/assets/images/our-product04.jpg'
import productImg5 from '@/assets/images/our-product05.png'
import productImg6 from '@/assets/images/our-product06.png'
import productImg7 from '@/assets/images/our-product07.jpg'
import productImg8 from '@/assets/images/our-product08.jpg'
import { Link } from 'react-router'


export default function Products() {
  
  const imgs = [
    productImg1, productImg2, productImg3, productImg4,
    productImg5, productImg6, productImg7, productImg8
  ];

  return (
    <>
      <div className="">
        <div className="container mx-auto max-w-[1320px]">
          <div className='flex flex-col items-center'>
            <h2 className='mb-7 font-bold text-3xl'>Our Products</h2>
            <div className='grid grid-cols-4 gap-6'>
              {
                imgs.map((img, index) => (
                  <div key={index} className='relative'>
                    <img className='object-cover w-[230px] h-[230px]' src={img} alt="" />
                    <div className='absolute bg-pink-500 h-[35px] w-[35px] rounded-full text-[#FFFFFF] font-light text-[12px] items-center justify-center flex top-5 right-5'>
                      <p>-30%</p>
                    </div>
                    <div className='bg-gray-200 px-2 py-3 flex flex-col w-[230px]'>
                      <h3 className='font-semibold text-[19px]'>Syltherine</h3>
                      <p className='text-gray-500 text-sm font-light my-1 text-[13px]'>Stylish cafe chair</p>
                      <div className='flex justify-between items-center'>
                        <h4 className='font-semibold text-[15px]'>Rp 2.500.000</h4>
                        <p className='text-[12px] text-gray-400'>Rp 3.500.000</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='py-1 px-[40px] border border-[#B88E2F] my-5'>
              <Link to='/product' className='text-[#B88E2F] text-[14px]'>Show More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
