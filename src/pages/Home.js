import React from "react";
import "../../src/index.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="contain-start text-[20px] leading-[2rem] h-[82vh] flex flex-col items-center justify-center pb-[150px]">
        <p className="">
          Avec{" "}
          <span className="text-[18px] font-bold font-[Oswald]">
            {" "}
            Match Movie
          </span>
          , plus besoin de se casser le crâne à choisir un film, il le fait pour
          vous!😁
        </p>

        <p className="">
          On vous pose des questions sur le genre de film que vous voulez voir,
          le but est de vous donner des idées.
        </p>

        <p className="">
          Une fois que vous avez répondu aux questions, on vous passe des films,
          à vous de voir si ça match ou pas! 💙 x ❎
        </p>
        <p className="pb-[2%]">
          Tous les films Liké seront enregistré pour pouvoir ensuite choisir
          celui que vous voudrez!
        </p>
        <button className="border-[1px] border-[black] bg-[#0880C3] px-[10px] py-[5px]  rounded-[10px] font-[Oswald] font-bold">
          Commencer!
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
