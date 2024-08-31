import Image from "next/image";
import React from "react";

const CarouselCard = ({ ImageUrl, description, title }) => {
  return (
    <div className="md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-8">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-100">
            {title}
          </h3>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={ImageUrl}
            alt={title}
            width={150}
            height={150}
            className="h-20 sm:h-32 object-contain aspect-[3/2] rounded-xl"
          />
        </div>
      </div>
      <div>
        <p className="text-text-100 text-base md:text-xl mb-20 mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
