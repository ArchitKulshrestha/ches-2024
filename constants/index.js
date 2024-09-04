import {
  ChesLogo,
  SVNITLOGO,
  aiche_logo,
  SIPHON,
  Workshop,
  car,
  K12,
  uphoto,
  Alchemy,
  aa,
  ab,
  ac,
  ad,
  ae,
  af,
  ag,
  Alchemylogo,
  SIPHONlogo,
  Workshoplogo,
  K12logo,
  Eurekalogo,
  car_logo,
  SRClogo,
  SRC,
  Archit,
  Kamakshi,
  Bhumi,
  Yukta,
  Technical,
  ayushi,
  gaurav,
  mahendra,
  president,
  priyal,
  sahil,
  sambhavi,
  swapnil,
  sheetal,
  shipra,
  sarrah,
  anuj,
  ayush,
  himanshu,
  himil,
  nisarg,
  pranav,
  ronak,
  vrund,
  kenny,
  neha,
  sajal,
  sayantani,
  tanay,
  utsav,
  aswin,
  devsharma,
  dheypatel,
  dhyeybhagat,
  kushal,
  rupesh,
  sarita,
  simran,
  soumya,
  namrata,
  aneCar,
  alluCar,
} from "@/public/assets";

export const NavLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/#About",
    title: "About",
  },
  {
    id: "/Events",
    title: "Events",
  },
  {
    id: "/Achievement",
    title: "Achievements",
  },
  {
    id: "/Team",
    title: "Team",
  },

  {
    id: "/contact",
    title: "Contact",
  },
];

export const Developers = [
  {
    position: "Head",
    name: "Archit Kulshrestha",
    Linkedin: "https://www.linkedin.com/in/archit-kulshrestha-1aa01a255/",
    ImageUrl: Archit,
  },
  {
    position: "Executive",
    name: "Aditya Kumar",
    Linkedin: "https://www.linkedin.com/in/adityak1911/",
  },
  {
    position: "Executive",
    name: "Abhay Dubey",
    Linkedin: "https://www.linkedin.com/in/abhay-dubey-480a48264/",
  },
  {
    position: "Member",
    name: "Kamakshi Jibhkate",
    Linkedin: "https://www.linkedin.com/in/kamakshi-jibhkate-35671529a/",
    ImageUrl: Kamakshi,
  },
  {
    position: "Member",
    name: "Bhumi Gupta",
    Linkedin: "https://www.linkedin.com/in/bhumi-gupta-b13b1528a/",
    ImageUrl: Bhumi,
  },
  {
    position: "Member",
    name: "Dattatreya Mangipudi",
    Linkedin: "https://www.linkedin.com/in/dattatreya-mangipudi-7168762a6/",
  },
  {
    position: "Member",
    name: "Namrata Patil",
    Linkedin: "https://www.linkedin.com/in/namrata-patil-220714282/",
    ImageUrl: namrata,
  },
];
export const AluMillennium = {
  name: "AluMillennium",
  img: alluCar,
  design:
    "The vehicle in question employs a front-wheel drive system, wherein the power is transmitted to the front wheels. This propulsion mechanism is facilitated by the utilization of aluminum air cells, which are interconnected through a series and parallel configuration. The electrical energy generated by these air cells is then converted into mechanical energy through the utilization of a motor. This motor, in turn, drives the rotation of the wheel via a two-gear system, enabling the efficient transfer of power and the subsequent movement of the vehicle.",
  powerSource:
    "The power source utilized in this system is an Aluminum-Air Battery, which features copper electrodes connected to the aluminum components. The core structure of the cell is composed of aluminum sheets. The space between the two electrode layers is filled with a specialized material that serves a critical function within the device's overall design and operation. Potassium hydroxide (KOH) solution serves as the electrolyte. A graphite sheet coated with a paste containing activated charcoal and manganese dioxide (MnO2) functions as the cathode. Steel mesh is also attached with a cathode as a current collector. These elements are assembled together using adhesive tape, and the individual cells are connected in various series and parallel configurations to achieve the desired voltage and current output. The stacking of these electrochemical cells is facilitated through the use of an enclosure fabricated from acrylic sheets, providing a robust and organized housing for the complete power generation system.",
  stoppingMechanism:
    "The Iodine Clock is used as a stopping mechanism. Two solutions namely A and B are produced. Solution A contains fixed proportions of Starch, Water and Hydrogen Peroxide while Solution B contains fixed proportions of powdered Vitamin C, water at 323K and Iodine. These two solutions are mixed together in order to form a timed reaction",
};

export const Anerobes = {
  name: "Anerobes",
  img: aneCar,
  design:
    "The car is mounted upon by a battery of 12 volts of dimension 10cm*6.5cm*7.5 cm. The battery is charged via the Microbial Fuel Cells (MFCs) that powers the chem-e-car. The stopping mechanism consists of Arduino and a beaker of 50 mL where the stopping reaction takes place.",
  powerSource:
    "Microbial Fuel Cells (MFCs) operate based on the electrochemical activity of bacteria, converting organic matter (waste water) into electrical energy. The process begins with anaerobic bacteria in the anode chamber oxidizing organic compounds present in the substrate, releasing electrons as byproducts. These electrons travel through an external circuit connected to the anode, creating an electric current flow. A proton exchange membrane (PEM) selectively allows protons to pass through to the cathode compartment while blocking larger molecules. In the cathode chamber, oxygen or other electron acceptors react with electrons and protons to produce water, completing the electrochemical circuit. This continuous electron flow generates a steady electric current, which can be harnessed to power electrical devices or stored for later use. MFCs offer a sustainable approach to electricity generation, with applications in wastewater treatment and renewable energy production. Power Storage Device: Microbial fuel Cell produces sufficient voltage but low and fluctuating current hence low and fluctuating power. This power is not sufficient to directly run the car thus the diffused MFC power is stored to power storage devices, which when charged generates continuous and sufficiently high power. In brief, to run the Chem-e-car, the Power generated by the MFC’s is to be stored in a lead acid battery. The lead-acid battery is made of lead plates comprising of lead and lead oxide layer. The battery is then packed and charged by the source, MFC, by either one way diode switch or boost up circuit (PMS).",
  stoppingMechanism:
    "The Stopping mechanism of our car is Reaction between Sodium Thiosulfate and Hydrochloric Acid. This reaction demonstrates the formation of sodium chloride, sulfur, sulfur dioxide, and water. As the reaction Between Na2S2O3 and HCl proceeds, the formation of colloidal sulfur leads to an increase in the solution’s Turbidity. This results in a measurable decrease in the intensity of light transmitted through the mixture. Light coming from the solution Is detected and similar code is run through an Arduino which stops our circuit. Time vs Conc. Graph (Sodium Thiosulphate reacting Hydrochloric Acid) The reaction between sodium thiosulfate and hydrochloric acid is given by: 𝑁𝑎2𝑆2𝑂3 + 2𝐻𝐶𝑙 → 2𝑁𝑎𝐶𝑙 + 𝑆 + 𝑆𝑂2 + 𝐻2",
};

export const Batch2021 = [
  {
    position: "PRESIDENT",
    name: "Javed Alam Saifi",
    ImageUrl: president,
  },
  {
    position: "VICE-PRESIDENT",
    name: "Shambhavi Srivastava",
    ImageUrl: sambhavi,
  },
  {
    position: "SECRETARY(Advisor)",
    name: "Sarrah Saify",
    ImageUrl: sarrah,
  },
  {
    position: "SECRETARY",
    name: "Yukta Malik",
    ImageUrl: Yukta,
  },
  {
    position: "SECRETARY",
    name: "Swapnil Bhavsar",
    ImageUrl: swapnil,
  },
  {
    position: "SECRETARY(Treasurer)",
    name: "Gaurav Tayade",
    ImageUrl: gaurav,
  },
  {
    position: "MANAGERIAL",
    name: "Mahendra Singh",
    ImageUrl: mahendra,
  },
  {
    position: "TECHNICALL",
    name: "Paavan Rupapara",
    ImageUrl: Technical,
  },
  {
    position: "K12 OUTREACH(Innovation head ) ",
    name: "Sheetal Maheshwari",
    ImageUrl: sheetal,
  },
  {
    position: "SOCIAL MEDIA",
    name: "Shipra Novil",
    ImageUrl: shipra,
  },
  {
    position: "WEB D",
    name: "Sahil Shahi",
    ImageUrl: sahil,
  },
  {
    position: "DOCUMENTATION",
    name: "Aayushi Gupta",
    ImageUrl: ayushi,
  },
  {
    position: "DOCUMENTATION",
    name: "Priyal Panda",
    ImageUrl: priyal,
  },
];

export const Batch2122 = [
  {
    position: "PRESIDENT",
    name: "Sheetal Maheshwari",
    ImageUrl: sheetal,
  },
  {
    position: "VICE-PRESIDENT",
    name: "Shipra Novil",
    ImageUrl: shipra,
  },
  {
    position: "SECRETARY (Student Advisor)",
    name: "Aayushi Gupta",
    ImageUrl: ayushi,
  },
  {
    position: "SECRETARY (Committee Coordinator)",
    name: "Ronak Asnani",
    ImageUrl: ronak,
  },
  {
    position: "SECRETARY(Treasurer)",
    name: "Nisarg Shah",
    ImageUrl: nisarg,
  },
  {
    position: "MANAGERIAL",
    name: "Himil Gohel",
    ImageUrl: himil,
  },
  {
    position: "TECHNICALL",
    name: "Vrund Shah",
    ImageUrl: vrund,
  },
  {
    position: "PUBLIC RELATION",
    name: "Ayush Biyani",
    ImageUrl: ayush,
  },
  {
    position: "SOCIAL MEDIA",
    name: "Himanshu Gaikwad",
    ImageUrl: himanshu,
  },
  {
    position: "WEB D",
    name: "Pranav Dherange",
    ImageUrl: pranav,
  },
  {
    position: "PUBLICITY",
    name: "Anuj sawal",
    ImageUrl: anuj,
  },
];

export const Batch2223 = [
  {
    position: "PRESIDENT",
    name: "Himanshu Gaikwaid",
    ImageUrl: himanshu,
  },
  {
    position: "VICE-PRESIDENT",
    name: "Kushagra Gupta",
  },
  {
    position: "SECRETARY (Treasurer)",
    name: "Dhyey Bhagat",
    ImageUrl: dhyeybhagat,
  },
  {
    position: "MANAGERIAL",
    name: "Prashant Paliwal",
  },
  {
    position: "TECHNICAL",
    name: "Dhyey Patel",
    ImageUrl: dheypatel,
  },
  {
    position: "K12 OUTREACH",
    name: "Bollineni Neha",
    ImageUrl: neha,
  },
  {
    position: "PUBLIC RELATION",
    name: "Abhyudayam Dadhich",
  },
  {
    position: "DESIGN",
    name: "Sajal Saxena",
    ImageUrl: sajal,
  },
  {
    position: "DESIGN",
    name: "Tanay Damania",
    ImageUrl: tanay,
  },
  {
    position: "SOCIAL MEDIA",
    name: "Sayantani Dutta",
    ImageUrl: sayantani,
  },
  {
    position: "PUBLICITY",
    name: "Utsav Singh",
    ImageUrl: utsav,
  },
  {
    position: "DOCUMENTATION",
    name: "Kenny Kachhadiya",
    ImageUrl: kenny,
  },
];

export const Batch2324 = [
  {
    position: "PRESIDENT",
    name: "Dhyey  Bhagat",
    ImageUrl: dhyeybhagat,
  },
  {
    position: "VICE-PRESIDENT",
    name: "Dhyey Patel",
    ImageUrl: dheypatel,
  },
  {
    position: "MANAGERIAL",
    name: "Aswin Nair",
    ImageUrl: aswin,
  },
  {
    position: "TECHNICAL",
    name: "Dev Sharma",
    ImageUrl: devsharma,
  },
  {
    position: "K12 OUTREACH",
    name: "Rupesh Yadav",
    ImageUrl: rupesh,
  },
  {
    position: "PUBLIC RELATION",
    name: "Saumya Jain",
    ImageUrl: soumya,
  },
  {
    position: "DESIGN",
    name: "Ranjana Soni",
  },
  {
    position: "SOCIAL MEDIA",
    name: "Simran Hirekhan",
    ImageUrl: simran,
  },
  {
    position: "FINANCE",
    name: "Kushal Doshi",
    ImageUrl: kushal,
  },
  {
    position: "FINANCE",
    name: "Om Pandey",
  },
  {
    position: "EDITORIAL",
    name: "Nitin Vaishnav",
  },
  {
    position: "DOCUMENTATION",
    name: "Sarita Meena",
    ImageUrl: sarita,
  },
];
