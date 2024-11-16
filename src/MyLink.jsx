import React from "react";
import { Link } from "react-router-dom";

function MyLink({ to, children, className, ...props }) {
  return (
    <Link
      className={
        "w-full py-3 text-2xl font-bold text-center text-white border-2 shadow-2xl hover:bg-sky-500 bg-sky-400 rounded-2xl " +
        className +
        " "
      }
      to={to}
    >
      {children}
    </Link>
  );
}

export default MyLink;
