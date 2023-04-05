import React from "react";
import "../../src/index.css";

function Footer() {
  return (
    <div>
      <footer className="border-t-[1px] border-[black] flex-shrink-0 font-bold">
        <p className="text-center">
          &copy;{new Date().getFullYear()} - Loïc Kalaidjoglou - Tous droits
          réservés
        </p>
      </footer>
    </div>
  );
}

export default Footer;
