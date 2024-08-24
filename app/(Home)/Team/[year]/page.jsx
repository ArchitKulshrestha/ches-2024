import React from "react";

const page = ({ params }) => {
  const { year } = params;
  return <div className="mt-16">{year}</div>;
};

export default page;
