import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white sm:shadow w-full h-[68px]">
      <nav className="w-full h-full flex justify-between items-center font-grotesk border border-cyan-500">
        <div className="flex items-center border border-cyan-200 text-4xl h-full">
          <Link href="/">Positvus</Link>
        </div>
        <div className="hidden md:flex items-center md:gap-5 lg:gap-10 sm:shadow h-full">
          <ul className="flex md:gap-5 lg:gap-10 md:text-xl h-full items-center">
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
        <div className="h-full md:hidden sm:flex items-center text-black text-4xl border border-l-cyan-500">
          <IconButton className="h-full">
            <MenuIcon
              sx={{
                color: "black",
                "&:hover": {
                  color: "lime",
                },
                fontSize: 30,
              }}
            />
          </IconButton>
        </div>
      </nav>
    </header>
  );
}
