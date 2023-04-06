import React from "react";
import "../../src/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer className="border-t-[3px] border-[black] flex justify-center font-bold">
        <p className="text-center pr-[15px]">
          &copy;{new Date().getFullYear()} -{" "}
          <a
            href="https://portfolio-loic-kalaidjoglou.com/portfolio/"
            className="hover:text-[#0880C3]"
            target="_blank"
            rel="noreferrer"
          >
            Loïc Kalaidjoglou
          </a>{" "}
          - Tous droits réservés
        </p>
        <a href="https://github.com/LoicKalai" target="_blank" rel="noreferrer">
          <p className="flex items-end">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#000000" }}
              className="w-[20px] h-[20px]"
            />
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/lo%C3%AFc-kalai/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="pl-[5px]">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#000000" }}
              className="w-[20px] h-[20px] flex items-end"
            />
          </p>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
