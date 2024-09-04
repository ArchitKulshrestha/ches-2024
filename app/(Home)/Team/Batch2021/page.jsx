import React from "react";
import { Batch2021, Batch2122 } from "@/constants";
import { SVNITLOGO } from "@/public/assets";
import Image from "next/image";

const page = () => {
  return (
    <section className="px-4 md:px-28 pt-[75px] w-full min-h-screen">
      <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-10 decoration-4  decoration-accent-500 underline underline-offset-8  ">
        Batch2021
      </h1>
      <div className=" my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {Batch2021.map((Batch2021, index) => (
          <div
            data-aos="fade-left"
            key={Batch2021.position}
            className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  backdrop-blur-lg  shadow-lg p-4 rounded-xl  hover:shadow-lg hover:shadow-text-500/60  sm:w-[100%] flex items-center justify-between  gap-2 ">
            <div>
              <div className="text-base sm:text-xl font-bold font-heading text-text-200 ">
                {Batch2021.position}
              </div>
              <div className="text-[.9rem] text-accent-300 pb-2 font-semibold">
                {Batch2021.name}
              </div>
            </div>
            <Image
              src={Batch2021.ImageUrl ? Batch2021.ImageUrl : SVNITLOGO}
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
