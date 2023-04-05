import React from "react";
import logo from "../assets/images/simple-icons_tinder.png";
import "../../src/index.css";

const Logo = () => {
  return (
    <div className="contain-logo w-full flex pt-[10px] pl-[10px] md:pt-[20px] md:pl-[20px]">
      <img
        src={logo}
        alt="logo match movie"
        className="h-[50px] w-[50px] md:h-[80px] md:w-[80px]"
      />
      <h1
        className="font-[Oswald] font-bold text-[18px] md:text-[3
        0px] lg:text-[35px] flex items-center"
      >
        Match Movie
      </h1>
    </div>
  );
};

export default Logo;
