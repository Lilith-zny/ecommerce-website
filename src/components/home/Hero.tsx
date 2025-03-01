import bg from "@/assets/images/bg-hero.jpg";

export default function Hero() {
  return (
    <>
      <div className="h-[716px]">
        <img className="h-[716px] w-full object-cover relative" src={bg} alt="" />
        <div className="container mx-auto max-w-[1320px]">
          <div className="h-[716px]">
            <div className="flex justify-center">
              <div className="absolute top-[225px] md:right-15 h-[390px] w-[300px] md:w-[500px] p-10 bg-[#FFF3E3]">
                <p className="font-semibold tracking-[2px]">New Arrival</p>
                <h1 className="text-[#B88E2F] font-bold text-3xl md:text-5xl my-4">
                  Discover Our
                  <br />
                  New Collection
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <a className="bg-[#B88E2F] py-4 px-10 text-[#FFFFFF] uppercase inline-block mt-9" href="#">buy now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
