import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/AshxMaker"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/ashxmaker"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://github.com/ashxmaker" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
