"use client";
import Image from "next/image";

const Logo_costumer = () => {
  return (
    <div className="relative pb-36 flex flex-col">
      <Image
        src="/costumer_logo/logo5.avif"
        alt=""
        layout="responsive"
        width={1512}
        height={332}
        className="absolute inset-0 z-0 object-cover"
      />
      <div className="relative z-10 flex flex-row justify-between p-8 space-x-6 mt-24">
        
        {/* Adjusted margin-top */}
        <div className="quote-container text-center">
          <blockquote className="text-xl font-semibold">
            “Simple, straightforward,
            <br />
            and super powerful”
          </blockquote>
          <Image
            src="/costumer_logo/logo1.png"
            alt="the-verge customer logo"
            width={92}
            height={16}
            className="mt-8 ml-14 bg-white"
          />
        </div>
        <hr className="bg-white h-32 w-px" />
        <div className="quote-container text-center">
          <blockquote className="text-xl font-semibold">
            “Simply a joy to use”
          </blockquote>
          <Image
            src="/costumer_logo/logo2.png"
            alt="wirecutter customer logo"
            width={139}
            height={18}
            className="mt-14 ml-8 bg-white"
          />
        </div>
        <hr className="bg-white h-32 w-px" />
        <div className="quote-container justify-items-center text-center">
          <blockquote className="text-xl font-semibold">
            “The best to-do list app
            <br />
            on the market”
          </blockquote>
          <Image
            src="/costumer_logo/logo3.png"
            alt="pc-mag customer logo"
            width={30}
            height={40}
            className="mt-4 ml-20 bg-white "
          />
        </div>
        <hr className="bg-white h-32 w-px" />
        <div className="quote-container text-center">
          <blockquote className="text-xl font-semibold">
            “Nothing short of stellar”
          </blockquote>
          <Image
            src="/costumer_logo/logo4.png"
            alt="techradar customer logo"
            width={120}
            height={18}
            className="mt-14 ml-14 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo_costumer;
