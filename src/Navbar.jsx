import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-10 w-full bg-backblack items-center justify-start flex px-10">
      <Link to="/" className="text-white ">
        Wordle
      </Link>
    </div>
  );
}

export default Navbar;
