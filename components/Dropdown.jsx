import { Menu, MenuHandler, MenuList, MenuItem, Button } from "./Provider";
import Link from "next/link";

const Batch = [
  {
    batch: "2023-24",
    link: "/Team/Batch2324",
  },
  {
    batch: "2022-23",
    link: "/Team/Batch2223",
  },
  {
    batch: "2021-22",
    link: "/Team/Batch2122",
  },
  {
    batch: "2020-21",
    link: "/Team/Batch2021",
  },
];

const Dropdown = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button className="py-2 px-4 bg-accent-600 hover:bg-accent-500 text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-0">
          Our Alumni
        </Button>
      </MenuHandler>
      <MenuList className="bg-background-100 border border-background-100 shadow-md rounded-md ">
        {Batch.map((batch, index) => (
          <Link href={batch.link} target="_blank" key={index}>
            <MenuItem className="hover:bg-background-200 px-2 py-1 text-text-800 font-semibold text-base transition-all duration-200 ease-in-out ">
              {batch.batch}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
