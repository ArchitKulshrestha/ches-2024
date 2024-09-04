import React from "react";
import { Batch2223 } from "@/constants";
import { SVNITLOGO } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
const page = () => {
  return (
    <section className="px-4 md:px-28 pt-[75px] w-full min-h-screen">
      <div className="flex justify-between items-center mt-8">
        <h1 className="md:text-4xl text-3xl font-bold font-heading text-secondary-200 decoration-4 decoration-accent-500 underline underline-offset-8">
          Batch 2022-23
        </h1>
        <Link
          className="md:text-4xl text-3xl font-bold font-heading text-secondary-100 bg-accent-600 hover:bg-accent-500 px-1 rounded-lg"
          href="/Team">
          <IoIosArrowRoundBack />
        </Link>
      </div>
      <div className=" my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {Batch2223.map((Batch2223, index) => (
          <div
            key={Batch2223.position}
            className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  backdrop-blur-lg  shadow-lg p-4 rounded-xl  hover:shadow-lg hover:shadow-text-500/60  sm:w-[100%] flex items-center justify-between  gap-2 ">
            <div>
              <div className="text-base sm:text-xl font-bold font-heading text-text-200 ">
                {Batch2223.position}
              </div>
              <div className="text-[.9rem] text-accent-300 pb-2 font-semibold">
                {Batch2223.name}
              </div>
            </div>
            <Image
              src={Batch2223.ImageUrl ? Batch2223.ImageUrl : SVNITLOGO}
              alt="Img"
              height={100}
              width={100}
              className="float aspect-[1/1] rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
