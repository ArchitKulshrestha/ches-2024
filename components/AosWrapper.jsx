"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";

const AosWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AosWrapper;
