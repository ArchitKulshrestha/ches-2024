/* eslint-disable react/no-unescaped-entities */
import React from "react";
const objectives = [
  "Demonstrate the ability to control a chemical reaction.",
  "Innovate with chemical processes to power a small-scale vehicle.",
  "Apply chemical engineering principles to a practical challenge.",
  "Collaborate with team members to design and build the car.",
  "Compete with other teams to achieve the most accurate stopping distance.",
];

const benefits = [
  "Apply theoretical knowledge in a fun and competitive environment.",
  "Encourage creativity, teamwork, and problem-solving.",
  "Showcase skills in front of peers and industry professionals.",
  "Gain experience relevant to a career in chemical engineering.",
  "Push the boundaries of chemical engineering through innovation.",
];

const page = () => {
  return (
    <section className="pt-[75px] min-h-screen w-full px-4 md:px-28">
      <div className="max-w-5xl mx-auto mt-8">
        <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-4 decoration-4 decoration-accent-500 underline underline-offset-8">
          Chem-E-Car Competition
        </h1>
        <p className="mt-4 text-justify font-light text-text-100 text-[14px] md:text-[18px]">
          One of the flagship events of AIChE Global is the Chem-E-Car
          competition. This event challenges students to design and construct a
          shoe box-sized car that is powered solely by chemical reactions. The
          objective is to demonstrate the ability to control a chemical reaction
          to precisely start and stop the car, thereby controlling its motion
          entirely through chemical processes.
        </p>
        <h2 className="md:text-2xl text-xl mt-4 font-semibold mb-4 text-secondary-200">
          About the Competition
        </h2>
        <p className="mt-4 text-justify font-light text-text-100 text-[14px] md:text-[18px]">
          The Chem-E-Car competition is not just about building a car; it's
          about applying chemical engineering principles in a practical,
          hands-on project. Teams of students are required to innovate and
          experiment with various chemical reactions to power their cars. The
          car must be small enough to fit within the dimensions of a shoe box,
          and it must be able to carry a specified load over a given distance,
          stopping as close as possible to a target line.
        </p>
        <h2 className="md:text-2xl text-xl mt-4 font-semibold mb-4 text-secondary-200">
          Objectives
        </h2>
        <ul className="list-disc list-inside mb-6 font-light text-text-100">
          {objectives.map((objective, index) => (
            <li key={index} className="mb-2 ">
              {objective}
            </li>
          ))}
        </ul>
        <h2 className=" font-semibold mb-4 md:text-2xl text-xl mt-4  text-secondary-200">
          Why Participate?
        </h2>
        <p className="text-lg mb-6 font-light text-text-100">
          Participating in the Chem-E-Car competition provides students with an
          opportunity to apply their theoretical knowledge in a fun and
          competitive environment. It encourages creativity, teamwork, and
          problem-solving, all while giving participants a chance to showcase
          their skills in front of peers and industry professionals.
        </p>
        <ul className="list-disc list-inside mb-6 font-light text-text-100">
          {benefits.map((benefit, index) => (
            <li key={index} className="mb-2">
              {benefit}
            </li>
          ))}
        </ul>
        <h2 className="font-semibold mb-4 md:text-2xl text-xl mt-4  text-secondary-200">
          Join the Competition!
        </h2>
        <p className="text-lg mb-6 font-light text-text-100">
          Are you ready to take on the challenge and build a Chem-E-Car? Whether
          you're a seasoned participant or new to the competition, this is your
          chance to innovate, experiment, and push the boundaries of chemical
          engineering.
        </p>
      </div>
    </section>
  );
};

export default page;
