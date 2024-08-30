import Image from "next/image";
import { Hero } from "../public/assets/index.js";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="hero"
      className="relative pt-[75px] min-h-screen w-full px-4 md:px-28 flex justify-center items-center overflow-hidden">
      <video
        className="absolute inset-0 min-h-full w-full -z-10 object-cover blur-[4px] saturate-[1.2] contrast-[1.2]"
        poster="/assets/bgvidCutcomp2.gif"
        autoPlay
        muted
        playsInline
        loop>
        <source src="/assets/bgvidcut.mp4" type="video/mp4" playsInline muted />
        Your browser does not support the video tag.
      </video>

      <div className="flex items-center justify-center py-8">
        <div className="text-center sm:w-[60%] w-full mt-[-50px]">
          <div>
            <h1 className="md:text-7xl text-4xl font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-lime-600 via-sky-100 to-cyan-600 bg-clip-text text-transparent py-2 font-heading animate-gradient-slow">
              Chemical Engineering Society
            </h1>

            <p className="md:text-4xl text-2xl font-body font-light text-gray-100 mt-4 opacity-90 animate-fade-in">
              Fuel your passion for Chemical Engineering – where curiosity
              sparks progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
