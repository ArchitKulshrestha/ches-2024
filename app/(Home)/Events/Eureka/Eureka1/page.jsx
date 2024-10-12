import {
  eurekab,
  eurekad,
  eurekae,
  eurekac,
  eurekaf,
  eurekag,
  eurekah,
  eurekai,
} from "@/public/assets/index";
import Image from "next/image";

const EurekaA = [
  {
    img: eurekac,
    title: "Corrosion resistant coatings with self healing properties.",
    author: "Presented by Bharat Bairagi, Swapnil Bhavsar and Yukta Malik",
  },
  {
    img: eurekab,
    title: "Replacing harmful synthetic dyes with natural dyes",
    author: "Presented by Shikha Yadav and Tanuka Sinha ",
  },
  {
    img: eurekad,
    title: "Increment in efficiency of solar cell",
    author: "Presented by Jay Chauhan, Avinash Verma and Pears Patel",
  },
  {
    img: eurekae,
    title: "Algae Biofuels",
    author: "Presented by Bhuvan, Upendra, Satya, Sasank M and Rishabh V Yadav",
  },
  {
    img: eurekaf,
    title: "Neutralization of Quartenary Ammonium Compound in Wastewater",
    author: "Presented by Daxesh M. Vasava and Aaditya Kumar",
  },
  {
    img: eurekag,
    title: "Manufacturing of Biodegradable PU and its waste management",
    author:
      "Presented by Dhananjay Dadheech, Priyanka Kadam and Jaykumar A. Vaghela",
  },
  {
    img: eurekah,
    title: "Transparent Solar Cells",
    author: "Presented by Abhay Dubey, Anuj Desai and Shambhavi Shrivastav",
  },
  {
    img: eurekai,
    title: "Packaging Waste Management",
    author: "Presented by Sanskar C. Patel, Jeet N. Gajera and Dwij A. Pandya",
  },
];

function Eureka1() {
  return (
    <>
      <section className="pt-[75px] min-h-screen w-full px-4 md:px-28">
        <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-4">
          Eureka 1.0 Archives
        </h1>

        <div className="flex flex-col justify-center items-center mt-8 space-y-6">
          {EurekaA.map((eurekaA, index) => (
            <div
              className="bg-background-900 flex w-full sm:w-[80%] flex-col justify-center items-center p-4 mb-4 rounded-lg hover:shadow-lg hover:shadow-text-500/60 backdrop-blur-[10px]"
              key={index}>
              <Image
                src={eurekaA.img}
                height={500}
                width={500}
                alt="eureka1"
                className="w-full rounded-lg"
                loading="lazy"
              />
              <p className="text-text-100 md:text-2xl text-base text-center font-semibold mt-4">
                {eurekaA.title}
              </p>
              <p className="text-text-100 md:text-xl text-sm text-center font-light">
                {eurekaA.author}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Eureka1;
