import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="flex justify-between p-4 items-center shadow-md">
      <div className="logo w-24 md:w-36 ">
        <img src="https://fontmeme.com/permalink/230924/fdd2ff6b54278fe8106c1e86f3a9588c.png" />
      </div>
      <nav className="flex gap-2 font-semibold text-sm md:text-lg">
        <Link to="/">Home</Link>
        <Link to="about-us">About</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="contact-us">Contact US</Link>
      </nav>
    </header>
  );
}

export default Header;
