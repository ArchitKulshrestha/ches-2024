/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { getPortal } from "@/sanity/utilsSanity";
import Image from "next/image";
import { EurekaHome } from "@/public/assets/index";
import EurekaDropdown from "@/components/EurekaDropdown";

// const participationBenefits = [
//   "Explore cutting-edge research in chemical engineering.",
//   "Collaborate with like-minded peers and faculty members.",
//   "Gain hands-on experience in tackling real-world problems.",
//   "Enhance your understanding of the research process and methodologies.",
//   "Present your findings and get recognized for your work.",
// ];

// const eventHighlights = [
//   "Workshops and seminars led by industry experts and academicians.",
//   "Research paper presentations and poster sessions.",
//   "Collaborative projects and team challenges.",
//   "Mentorship opportunities with seasoned researchers.",
// ];
const portal = await getPortal();
const title = portal[0].title;
const link = portal[0].link;

// const page = () => {
//   return (
//     <section className="pt-[75px] min-h-screen w-full px-4 md:px-28">
//       <div className="max-w-5xl mx-auto mt-8">
//         <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-4 decoration-4  decoration-accent-500 underline underline-offset-8">
//           Eureka: Unveiling the World of Research
//         </h1>
//         <p className="mt-4 text-justify font-light text-text-100 text-[14px] md:text-[18px]">
//           Dive into the world where imagination meets reality at Eureka 7.0 –
//           the ultimate research-driven event designed to push the boundaries of
//           chemical engineering! This is your chance to unravel the mysteries of
//           the field, explore cutting-edge concepts, and transform your wildest
//           ideas into tangible breakthroughs.
//         </p>
//         <h2 className="md:text-2xl text-xl mt-4 font-semibold mb-4 text-secondary-200">
//           What is Eureka?
//         </h2>
//         <p className="mt-4 text-justify font-light text-text-100 text-[14px] md:text-[18px]">
//           Eureka is an initiative by the Chemical Engineering Society aimed at
//           fostering a research-oriented mindset among students. The event
//           provides a platform to delve deep into the world of research, offering
//           participants the opportunity to work on real-world problems and
//           contribute to innovative solutions in the field of chemical
//           engineering.
//         </p>
//         <h2 className="md:text-2xl text-xl mt-4 font-semibold mb-4 text-secondary-200">
//           Why Participate?
//         </h2>
//         <ul className="list-disc list-inside mb-6 font-light text-text-100">
//           {participationBenefits.map((benefit, index) => (
//             <li key={index} className="mb-2 ">
//               {benefit}
//             </li>
//           ))}
//         </ul>
//         <h2 className=" font-semibold mb-4 md:text-2xl text-xl mt-4  text-secondary-200">
//           Event Highlights
//         </h2>
//         <p className="text-lg mb-6 font-light text-text-100">
//           Eureka features a range of activities designed to ignite your passion
//           for research:
//         </p>
//         <ul className="list-disc list-inside mb-6 font-light text-text-100">
//           {eventHighlights.map((highlight, index) => (
//             <li key={index} className="mb-2">
//               {highlight}
//             </li>
//           ))}
//         </ul>
// <h2 className="font-semibold mb-4 md:text-2xl text-xl mt-4  text-secondary-200">
//   Join Us in This Journey!
// </h2>
// <p className="text-lg mb-6 font-light text-text-100">
//   Are you ready to dive into the world of research and explore the
//   endless possibilities in chemical engineering? Eureka is your gateway
//   to innovation and discovery. Join us, and let's push the boundaries of
//   what’s possible!
// </p>

// <div className="mb-8">
//   <Link
//     href={link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="inline-block px-6 py-3 bg-accent-600 text-white font-semibold text-lg rounded-lg hover:bg-secondary-600">
//     {title}
//   </Link>
// </div>
//       </div>
//     </section>
//   );
// };

// export default page;
// bg-heroBg bg-center bg-cover
const page = () => {
  return (
    <section className="pt-[75px] min-h-screen w-full px-4 md:px-28 ">
      <div className="flex flex-col sm:flex-row gap-y-16 gap-x-10  max-w-5xl mx-auto mt-14 justify-around">
        <div className="w-full sm:w-[1/2]">
          <h1 className="md:text-6xl text-3xl font-bold font-heading text-secondary-200 mt-4 ">
            Eureka 7.0
          </h1>
          <p className="mt-4   text-text-100 text-2xl md:text-3xl mb-8">
            Find your Eureka Moment!
          </p>
          <EurekaDropdown />
        </div>
        <div className="w-full sm:w-[1/2]">
          <Image
            className="w-96 "
            src={EurekaHome}
            alt="Eureka "
            placeholder="blur"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div>
        <h2 className="md:text-2xl text-xl mt-4 font-semibold mb-4 text-secondary-200">
          What is Eureka?
        </h2>
        <p className="mt-4 text-justify font-light text-text-100 text-[14px] md:text-[18px]">
          Eureka-the journey from raw thinking & imagination to a properly
          designed innovation! It began in 2018 as a research competition
          initiative by Chemical Engineering Society (ChES), SVNIT where teams
          with different thought processes, innovations compete with each other
          on a common platform to solve different problems after performing
          meticulous research work on their problem statements. Along with
          research, this initiative aims to promote a sense of cooperation,
          coordination & patience among its participants. Team ChES is proud to
          say that, participants of eureka 1.0 applied the experience gained in
          eureka to compete in national and international research competitions
          like ChemTech Student Outreach Program, Smart India Hackathon, STPC &
          Poster Competitions in AIChE Student Regional Conference.
        </p>
      </div>
      <div>
        <h2 className="font-semibold mb-4 md:text-2xl text-xl mt-4  text-secondary-200">
          Join Us in This Journey!
        </h2>
        <p className="text-lg mb-6 font-light text-text-100">
          Are you ready to dive into the world of research and explore the
          endless possibilities in chemical engineering? Eureka is your gateway
          to innovation and discovery. Join us, and let's push the boundaries of
          what’s possible!
        </p>

        <div className="mb-8">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent-600 text-white font-semibold text-lg rounded-lg hover:bg-secondary-600">
            {title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
