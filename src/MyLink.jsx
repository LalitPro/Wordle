import React from "react";
import { Link } from "react-router-dom";

function MyLink({ to, children, className, style, ...props }) {
  return (
    <Link
      style={style}
      className={
        "w-full py-3 text-2xl font-bold text-center text-backblack shadow-2xl hover:bg-sky-500 bg-green-400 rounded-2xl " +
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
