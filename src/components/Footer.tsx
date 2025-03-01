import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <div className="h-[300px] border-t-1 border-gray-100">
        <div className="container mx-auto max-w-[1320px]">
          <div className="h-[300px] grid grid-cols-1">

            <div className="flex flex-col md:flex-row space-x-20 py-10 justify-between">
              <div>
                <h4 className="text-[19px] font-bold mb-[30px]">Funiro.</h4>
                <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral<br/> Gables,<br/>
                FL 33134 USA</p>
              </div>
              <div>
                <h5 className="text-[#9F9F9F] mb-[30px] font-semibold">Links</h5>
                <ul className="space-y-5">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/'>Shop</Link></li>
                  <li><Link to='/'>About</Link></li>
                  <li><Link to='/'>Contact</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[#9F9F9F] mb-[30px] font-semibold">Help</h5>
                <ul className="space-y-5">
                  <li><Link to='/'>Payment Options</Link></li>
                  <li><Link to='/'>Returns</Link></li>
                  <li><Link to='/'>Privacy Policies</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[#9F9F9F] mb-[30px] font-semibold">Newsletter</h5>
                <form className="space-x-2">
                  <input className="border-b-1 focus:outline-none placeholder-gray-300" type="text" placeholder="Enter Your Email Address" />
                  <button className="border-b-1" type="submit">SUBSCRIBE</button>
                </form>
              </div>
            </div>

            <div className="h-[70px] flex items-center border-t-1 border-gray-100">
              <p className="text-[16px]">2023 furino. All rights reverved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
