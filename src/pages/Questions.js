import React, { useState } from "react";
import "../../src/index.css";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Questions() {
  const [genre, setGenre] = useState(null);
  //   const [answers, setAnswers] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const selectedGenre = e.target.querySelector('li[name="genre"]:checked');

    if (selectedGenre !== null) {
      setGenre(selectedGenre.value);
    }
  }

  function handleGenreSelection(value) {
    setGenre(value);
  }

  // Tableau des genres de films à proposer
  const allgenres = [
    { value: "action", label: "Action" },
    { value: "comedy", label: "Comédie" },
    { value: "horror", label: "Horreur" },
    { value: "romance", label: "Romance" },
    { value: "fantastique", label: "Fantastique" },
    { value: "science-fi", label: "Science-fiction" },
  ];

  return (
    <>
      {/*Nav Logo & Home*/}
      <div className="place-nav flex pb-[35px]">
        <Logo />

        <Link to="/">
          <button className="border-[1px] border-[black] bg-[#0880C3] text-[whitesmoke] hover:text-[black] px-[10px] py-[5px] rounded-[10px] font-[Oswald] font-bold mt-[10px] mr-[10px]">
            Home
          </button>
        </Link>
      </div>
      {/* /Nav Logo & Home*/}

      <div className="bloc-questions w-full h-[36.5rem]">
        <h2 className="font-[Oswald] font-bold text-[24px] pl-[25px] pb-[20px]">
          Trouvez le film que vous voulez voir 🎥
        </h2>

        {/*Placer le bloc question*/}
        <div className="place-contain-questions flex flex-col items-center h-[33rem]">
          {/* Question */}
          <p className="text-question text-[20px] pb-[20px]">
            {genre === null && "Quel genre de film voulez-vous regarder?🤔"}

            {genre === "action" && "Quel type de film d'action préférez vous?"}
            {genre === "comedy" && "Quel type de comédie préférez-vous ?"}
            {genre === "horror" &&
              "Quel type de film d'horreur préférez-vous ?"}
            {genre === "romance" && "Quel type de romance préférez-vous ?"}
            {genre === "fantastique" &&
              "Quel type de film fantastique préférez-vous ?"}
            {genre === "science-fi" &&
              "Quel type de film de science-fiction préférez-vous ?"}
          </p>
          {/* /Question */}

          <div className="contain-questions w-[40%] h-[60%]">
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              {/* boucler pour afficher les <li> */}
              {allgenres.map((genre) => (
                <li
                  className="flex-1 flex items-center cursor-pointer hover:bg-[#0880c3] bg-[whitesmoke] border-b-[#e2e2e2] border-b-[2px]"
                  onClick={() => handleGenreSelection(genre.value)}
                  name="genre"
                >
                  <span className="pl-[15px]">{genre.label}</span>
                </li>
              ))}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Questions;
