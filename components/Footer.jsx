import { ChesNoText } from "../public/assets";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="px-4 lg:px-28 py-4 mx-auto   ">
      <div className="flex-col md:flex-row gap-8 flex justify-center">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-2xl text-text-200 font-bold ">Email Us</h1>
          <Link
            href="mailto:ches@svnit.ac.in"
            aria-label="mail"
            className="text-text-200 hover:text-secondary-400 mt-2">
            ches@svnit.ac.in
          </Link>
          <Link
            href="mailto:ches.svnit@gmail.com"
            aria-label="mail"
            className="text-text-200 hover:text-secondary-400 mt-2">
            ches.svnit@gmail.com
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <Image
            src={ChesNoText}
            alt="CHES-Logo"
            border="0"
            className=" h-20 w-20"
          />
          <p className="mt-4 font-body font-bold">
            Sardar Vallabhbhai National Institute of Technology, Surat
          </p>
        </div>
      </div>
      <div className="w-full text-center">
        <div className="flex gap-8 p-6 justify-center w-full">
          <Link
            href="https://m.facebook.com/ches.svnit.aiche"
            target="_blank"
            aria-label="link"
            rel="noreferrer">
            <FaFacebook className="text-2xl text-secondary-400 hover:text-accent-400" />
          </Link>
          <Link
            href="https://www.instagram.com/ches_svnit_aiche/"
            target="_blank"
            aria-label="link"
            rel="noreferrer">
            <FaInstagram className="text-2xl text-secondary-400 hover:text-accent-400" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/chemical-engineering-society-svnit/mycompany/"
            target="_blank"
            aria-label="link"
            rel="noreferrer">
            <FaLinkedin className="text-2xl text-secondary-400 hover:text-accent-400" />
          </Link>
          <Link
            href="https://www.youtube.com/@aichechessvnit7048"
            target="_blank"
            aria-label="link"
            rel="noreferrer">
            <FaYoutube className="text-2xl text-secondary-400 hover:text-accent-400" />
          </Link>
          <Link
            href="https://www.google.com/maps/place/Sardar+Vallabhbhai+National+Institute+of+Technology,+SVNIT./@21.1663287,72.7642292,15z/data=!4m10!1m2!2m1!1ssvnit+location!3m6!1s0x3be04dec8b56fdf3:0x423b99085d26d1f9!8m2!3d21.1663287!4d72.7832836!15sCg5zdm5pdCBsb2NhdGlvbpIBCnVuaXZlcnNpdHngAQA!16zL20vMDZscjIz?entry=ttu"
            target="_blank"
            rel="noreferrer"
            aria-label="link">
            <FaMapMarkerAlt className="text-2xl text-secondary-400 hover:text-accent-400" />
          </Link>
        </div>
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-2 border-t border-accent-400"></div>
        <span className="flex-shrink mx-4 text-text-300">
          {" "}
          © {year} AIChE ChES SVNIT. All rights reserved
        </span>
        <div className="flex-grow border-2 border-t border-accent-400"></div>
      </div>
    </footer>
  );
}

export default Footer;
