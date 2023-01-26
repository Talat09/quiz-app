import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-600 text-white leading-10 p-5 md:flex justify-between">
      <h1 className="text-4xl font-bold pl-7">Quize King</h1>
      <div className=" md:pr-6 mr-12">
        <Link
          className="md:mr-3 text-xl hover:bg-green-500 px-3 py-2 rounded-lg"
          to="/"
        >
          Topics
        </Link>
        <Link
          className="md:mr-3 text-xl hover:bg-green-500 px-3 py-2 rounded-lg"
          to="/statistics"
        >
          Statistics
        </Link>
        <Link
          className="md:mr-3 text-xl  hover:bg-green-500 px-3 py-2 rounded-lg"
          to="/blog"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Header;
