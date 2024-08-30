import { Menu, MenuHandler, MenuList, MenuItem, Button } from "./Provider";
import Link from "next/link";

const Dropdown = () => {
  return (
    <Menu color="white">
      <MenuHandler>
        <Button className="py-2 px-4 bg-accent-600 hover:bg-accent-500 text-white text-base font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          Aluminis
        </Button>
      </MenuHandler>
      <MenuList className="bg-background-100 border border-background-100 shadow-md rounded-md">
        <MenuItem className="hover:bg-background-100 px-2 py-1 text-text-800 font-semibold text-base transition-all duration-200 ease-in-out ">
          <Link href={"/Team/Batch2324"} target="_blank">
            2023-24
          </Link>
        </MenuItem>
        <MenuItem className="hover:bg-background-100 px-2 py-1 text-text-800 font-semibold text-base transition-all duration-200 ease-in-out">
          <Link href={"/Team/Batch2223"} target="_blank">
            2022-23
          </Link>
        </MenuItem>
        <MenuItem className="hover:bg-background-100 px-2 py-1 text-text-800 font-semibold text-base transition-all duration-200 ease-in-out">
          <Link href={"/Team/Batch2122"} target="_blank">
            2021-22
          </Link>
        </MenuItem>
        <MenuItem className="hover:bg-background-100 px-2 py-1 text-text-800 font-semibold text-base transition-all duration-200 ease-in-out">
          <Link href={"/Team/Batch2021"} target="_blank">
            2020-21
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
