import React from "react";
import { FaLinkedin } from "react-icons/fa";
// import { Teams } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { SVNITLOGO, teamImg } from "@/public/assets";
import Dropdown from "@/components/Dropdown";

import { Developers } from "@/constants/index";
import {
  getCommittee,
  getStudentHeads,
  getFaculty,
} from "@/sanity/utilsSanity";
const buttonReg = {
  href: "https://drive.google.com/file/d/1gDyxfguBfHto_UCzkxHc2SLVenRvoTA7/view?usp=sharing",
  text: "Full Committee List",
};

const page = async () => {
  const committees = await getCommittee();
  const studentHeads = await getStudentHeads();
  const faculty = await getFaculty();
  return (
    <section className="px-4 md:px-28 pt-[75px] w-full min-h-screen mb-6">
      <div className="flex justify-between items-center mt-8">
        <h1 className="md:text-4xl text-3xl font-bold font-heading text-secondary-200 decoration-4 decoration-accent-500 underline underline-offset-8">
          Our Team
        </h1>
        <Dropdown />
      </div>

      <div className="w-full mt-8 ">
        <Image
          src={teamImg}
          alt="team"
          className="h-[20dvh] md:h-[55dvh] object-center rounded-md w-full  object-cover"
        />
      </div>
      <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-10 decoration-4  decoration-accent-500 underline underline-offset-8  ">
        Faculty Advisors
      </h1>
      <div className=" my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {faculty.map((faculty, index) => (
          <div
            data-aos="fade-left"
            key={faculty.position}
            className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  backdrop-blur-lg  shadow-lg p-4 rounded-xl  hover:shadow-lg hover:shadow-text-500/60  sm:w-[100%] flex items-center justify-between  gap-2 ">
            <div>
              <div className="text-base sm:text-xl font-bold font-heading text-text-200 ">
                {faculty.position}
              </div>
              <div className="text-[.9rem] text-accent-300 pb-2 font-semibold">
                {faculty.name}
              </div>
              <Link
                href={`${faculty.linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label="linkedIn">
                <FaLinkedin className="text-xl text-text-200 hover:text-accent-400" />
              </Link>
            </div>
            <Image
              src={faculty.ImageUrl ? faculty.ImageUrl : SVNITLOGO}
              alt="Img"
              height={100}
              width={100}
              className="float aspect-[1/1] rounded-lg"
            />
          </div>
        ))}
      </div>

      <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-10 decoration-4  decoration-accent-500 underline underline-offset-8  ">
        Student Heads
      </h1>
      <div className=" my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {studentHeads.map((StudentHead, index) => (
          <div
            data-aos="fade-left"
            data-aos-delay={index * 50}
            key={StudentHead.position}
            className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  backdrop-blur-lg  shadow-lg p-4 rounded-xl  hover:shadow-lg hover:shadow-text-500/60  sm:w-[100%] flex items-center justify-between  gap-2 ">
            <div>
              <div className="text-base sm:text-xl font-bold font-heading text-text-200 ">
                {StudentHead.position}
              </div>
              <div className="text-[.9rem] text-accent-300 pb-2 font-semibold">
                {StudentHead.name}
              </div>
              <Link
                href={`${StudentHead.linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label="linkedIn">
                <FaLinkedin className="text-xl text-text-200 hover:text-accent-400" />
              </Link>
            </div>
            <Image
              src={StudentHead.ImageUrl ? StudentHead.ImageUrl : SVNITLOGO}
              alt="Img"
              height={100}
              width={100}
              className="float aspect-[1/1] rounded-lg"
            />
          </div>
        ))}
      </div>

      <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-4 decoration-4  decoration-accent-500 underline underline-offset-8  ">
        Committee Heads
      </h1>
      <div className="my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {committees.map((committee, index) => (
          <div
            data-aos="fade-right"
            data-aos-delay={index * 50}
            key={committee.head}
            className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  backdrop-blur-lg  shadow-lg p-4 rounded-xl hover:shadow-lg hover:shadow-text-500/60  sm:w-[100%] flex items-center justify-between  gap-2 ">
            <div>
              <div className="text-base sm:text-xl font-bold font-heading text-text-200 ">
                {committee.committee}
              </div>
              <div className="text-[.9rem] text-accent-300 pb-2 font-semibold">
                {committee.head}
              </div>
              <Link
                href={`${committee.linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label="linkedIn">
                <FaLinkedin className="text-xl text-text-200 hover:text-accent-400" />
              </Link>
            </div>
            <Image
              src={committee.ImageUrl ? committee.ImageUrl : SVNITLOGO}
              alt="Img"
              height={100}
              width={100}
              className=" rounded-lg  aspect-[1/1] object-fill "
            />
          </div>
        ))}
      </div>
      <Link
        href={buttonReg.href}
        target="_blank"
        rel="noreferrer"
        aria-label="core committee"
        className="bg-accent-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-opacity-50 transition-colors duration-200">
        {buttonReg.text}
      </Link>
      <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-10 decoration-4  decoration-accent-500 underline underline-offset-8  ">
        Developers
      </h1>
      <div className=" my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {Developers.map((Developers, index) => (
          <div
            key={Developers.position}
            className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  backdrop-blur-lg  shadow-lg p-4 rounded-xl  hover:shadow-lg hover:shadow-text-500/60  sm:w-[100%] flex items-center justify-between  gap-2 ">
            <div>
              <div className="text-base sm:text-xl font-bold font-heading text-text-200 ">
                {Developers.position}
              </div>
              <div className="text-[.9rem] text-accent-300 pb-2 font-semibold">
                {Developers.name}
              </div>
              <Link
                href={`${Developers.Linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label="linkedIn">
                <FaLinkedin className="text-xl text-text-200 hover:text-accent-400" />
              </Link>
            </div>
            <Image
              src={Developers.ImageUrl ? Developers.ImageUrl : SVNITLOGO}
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
