import React from "react";
import "../../src/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer className="border-t-[1px] border-[black] flex justify-center font-bold pt-[5px]">
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
          <p>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#000000" }}
              className="w-[20px] h-[20px] hover:!text-[#0880c3] pt-[3px]"
            />
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/lo%C3%AFc-kalai/"
          target="_blank"
          rel="noreferrer"
          className="pl-[5px]"
        >
          <p>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#000000" }}
              className="w-[20px] h-[20px] hover:!text-[#0880c3] pt-[3px]"
            />
          </p>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
