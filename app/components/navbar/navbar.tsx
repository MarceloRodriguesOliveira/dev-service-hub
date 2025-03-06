"use client";

import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";
import CubeLogo from "@/public/cube.svg";

export default function Navbar() {
  const [isMenuOpen, setMenu] = useState<boolean>(false);

  const toggleMenu = (open: boolean) => {
    setMenu(open);
  };
  return (
    <header
      className="bg-white w-full h-[68px] z-10 fixed top-0  px-1 md:px-16 xl:px-24"
      id="header"
    >
      <nav className="w-full h-full flex  justify-between items-center font-grotesk ">
        <div className="flex items-center text-4xl h-full ">
          <Link
            href="/"
            className=" h-full flex items-center justify-center gap-5"
          >
            <CubeLogo className="h-full w-full" />
            <h1 className="hidden sm:inline-block">DevHub</h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center md:gap-5 lg:gap-10 h-full ">
          <ul className="flex md:gap-5 lg:gap-10 md:text-xl h-full items-center  ">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#proccess">Proccess</a>
            </li>
          </ul>
          <Button
            variant="outlined"
            className="rounded-2xl py-2 w-24 lg:w-48 text-xl text-black border-black hover:!bg-lime-300 "
          >
            Login
          </Button>
        </div>
        <div className="h-full md:hidden sm:flex justify-center items-center text-black ">
          <IconButton
            className="h-full flex p-0 "
            onClick={() => toggleMenu(true)}
          >
            <MenuIcon
              sx={{
                color: "black",
                "&:hover": {
                  color: "lime",
                },
                fontSize: 36,
              }}
            />
          </IconButton>
        </div>
      </nav>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => toggleMenu(false)}
      >
        <div className="w-64 p-4">
          <IconButton onClick={() => toggleMenu(false)} className="mb-4">
            <CloseIcon />
          </IconButton>

          <List>
            {["About Us", "Services", "Use Cases"].map((text) => (
              <ListItem component="button" key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </header>
  );
}
