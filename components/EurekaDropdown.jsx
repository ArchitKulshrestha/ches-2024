import { Menu, MenuHandler, MenuList, MenuItem, Button } from "./Provider";
import Link from "next/link";

const Year = [
  {
    year: "Eureka-1.0",
    link: "/Events/Eureka/Eureka1",
  },
  {
    year: "Eureka-2.0",
    link: "/Events/Eureka/Eureka2",
  },
  {
    year: "Eureka-3.0",
    link: "/Events/Eureka/Eureka3",
  },
];

const EurekaDropdown = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button className="py-2 px-4 bg-accent-600 hover:bg-accent-500 text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-0">
          Archives
        </Button>
      </MenuHandler>
      <MenuList className="bg-background-100 border border-background-100 shadow-md rounded-md ">
        {Year.map((year, index) => (
          <Link target="blank" href={year.link} key={index}>
            <MenuItem className="hover:bg-background-200 px-2 py-1 text-text-800 font-semibold text-base transition-all duration-200 ease-in-out ">
              {year.year}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default EurekaDropdown;
