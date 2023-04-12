import React from "react";
import "../../src/index.css";
import Logo from "../components/Logo"
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';



function Home() {
  return (
    <>
    <Logo />
      <div className="contain-start text-[20px] leading-[2rem] h-[82vh] flex flex-col items-center justify-center pb-[150px]">
        <p className="">
          Avec{" "}
          <span className="text-[18px] font-bold font-[Oswald]">
            {" "}
            Match Movie
          </span>
          , plus besoin de se casser la tête à choisir un film, il le fait pour
          vous!😁
        </p>

        <p className="">
          On vous pose des questions sur le genre de film que vous voulez voir,
          le but est de vous donner des idées.
        </p>

        <p className="">
          Une fois que vous avez répondu aux questions, nous vous proposons des films,
          à vous de voir si ça match ou pas! 💙 x ❎
        </p>
        <p className="pb-[2%]">
          Tous les films Liké seront enregistrés pour pouvoir ensuite choisir
          celui que vous voudrez!
        </p>
        
        <Link to= "/Questions">
          <button className="border-[1px] border-[black] bg-[#0880C3] px-[10px] py-[5px]  rounded-[10px] font-[Oswald] font-bold text-[whitesmoke] hover:text-[black]">
            Commencer!
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;
