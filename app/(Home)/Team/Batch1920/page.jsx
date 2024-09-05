import React from "react";
import { Batch1920 } from "@/constants";
import { placeholder } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <section className="px-4 md:px-28 pt-[75px] w-full min-h-screen">
      <div className="flex justify-between items-center mt-8">
        <h1 className="md:text-4xl text-3xl font-bold font-heading text-secondary-200 decoration-4 decoration-accent-500 underline underline-offset-8">
          Batch 2019-20
        </h1>
        <Link
          className="md:text-4xl text-3xl font-bold font-heading text-secondary-100 bg-accent-600 hover:bg-accent-500 px-1 rounded-lg"
          href="/Team">
          <IoIosArrowRoundBack />
        </Link>
      </div>
      <div className=" my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {Batch1920.map((Batch1920, index) => (
          <div
            key={Batch1920.position}
            className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  backdrop-blur-lg  shadow-lg p-4 rounded-xl  hover:shadow-lg hover:shadow-text-500/60  sm:w-[100%] flex items-center justify-between  gap-2 ">
            <div>
              <div className="text-base sm:text-xl font-bold font-heading text-text-200 ">
                {Batch1920.position}
              </div>
              <div className="text-[.9rem] text-accent-300 pb-2 font-semibold">
                {Batch1920.name}
              </div>
              <Link
                href={`${Batch1920.linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label="linkedIn">
                <FaLinkedin className="text-xl text-text-200 hover:text-accent-400" />
              </Link>
            </div>
            <Image
              src={Batch1920.ImageUrl ? Batch1920.ImageUrl : placeholder}
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
