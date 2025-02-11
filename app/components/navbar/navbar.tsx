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

export default function Navbar() {
  const [isMenuOpen, setMenu] = useState<boolean>(false);

  const toggleMenu = (open: boolean) => {
    setMenu(open);
  };
  return (
    <header className="bg-white w-full h-10 md:h-[68px]">
      <nav className="w-full h-full flex justify-between items-center font-grotesk  ">
        <div className="flex items-center text-4xl h-full">
          <Link href="/" className=" h-full flex items-center">
            Positivus
          </Link>
        </div>
        <div className="hidden md:flex items-center md:gap-5 lg:gap-10 h-full ">
          <ul className="flex md:gap-5 lg:gap-10 md:text-xl h-full items-center  ">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Use Cases</a>
            </li>
          </ul>
          <Button
            variant="outlined"
            className="rounded-2xl h-full w-24 lg:w-48 text-xl text-black border-black hover:!bg-lime-300 "
          >
            Login
          </Button>
        </div>
        <div className="h-full md:hidden sm:flex justify-center items-center text-black pt-2">
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
          {/* Botão de Fechar */}
          <IconButton onClick={() => toggleMenu(false)} className="mb-4">
            <CloseIcon />
          </IconButton>

          {/* Itens do menu */}
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
