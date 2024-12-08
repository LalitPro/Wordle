import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-center w-full px-10 h-14 text-start bg-backblack">
      <Link
        to="/"
        className="mr-auto font-semibold text-white duration-100 hover:scale-110 font-figtree "
      >
        Wordle
      </Link>
    </div>
  );
}

export default Navbar;
