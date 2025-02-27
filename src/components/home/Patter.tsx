import pt1 from "@/assets/images/patter-01.png";
import pt2 from "@/assets/images/patter-02.png";
import pt3 from "@/assets/images/patter-03.png";
import { Link } from "react-router";

export default function Patter() {
  return (
    <>
      <div className="h-[685px]">
        <div className="conatiner mx-auto max-w-[1320px]">
          <div className="flex flex-col p-10 h-[685px]">
            <div className="flex flex-col items-center mb-6">
              <h3 className="font-semibold text-2xl">Browse The Range</h3>
              <p className="text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-30">
              <div className="flex flex-col items-center">
                <div className="h-[450px] w-[320px] rounded-[3px] overflow-hidden shadow">
                  <Link to='/shop'>
                    <img
                      className="w-full h-full object-cover transition duration-170 hover:brightness-75"
                      src={pt1}
                      alt=""
                    />
                  </Link>
                </div>
                <Link to='/shop' className="mt-2 text-lg font-semibold text-[#333333]">Dining</Link>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[450px] w-[320px] rounded-[3px] overflow-hidden shadow">
                  <Link to='/shop'>
                    <img className="w-full h-full object-cover transition duration-170 hover:brightness-75" src={pt2} alt="" />
                  </Link>
                </div>
                <Link to='/shop' className="mt-2 text-lg font-semibold text-[#333333]">Living</Link>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[450px] w-[320px] rounded-[3px] overflow-hidden shadow">
                  <Link to='/shop'>
                    <img className="w-full h-full object-cover transition duration-170 hover:brightness-75" src={pt3} alt="" />
                  </Link>
                </div>
                <Link to='/shop' className="mt-2 text-lg font-semibold text-[#333333]">Bedroom</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
