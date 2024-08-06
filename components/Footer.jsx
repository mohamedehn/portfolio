import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-[90%] mx-auto lg:h-auto md:top-[350px] top-[80px] relative text-gray-600 pb-5 items-center">
      <div className="md:flex justify-around block items-center">
        <p className="pb-3 md:pb-0">
          &copy; 2023 Mohamed Ebarhmatin - Tous droits réservés.
        </p>
        <div className="flex md:justify-between">
          <a
            href="https://fr.linkedin.com/in/mohamed-ebarhmatin-376731179"
            className="pr-2 pb-3 md:pb-0"
          >
            <div className="rounded-full shadow-lg shadow-gray-500 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </a>
          <a href="https://github.com/mohamedehn" className="pr-2 pb-3 md:pb-0">
            <div className="rounded-full shadow-lg shadow-gray-500 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </a>
          <a
            href="mailto:mohamed.ebarhmatin@yahoo.fr"
            className="pr-2 pb-3 md:pb-0"
          >
            <div className="rounded-full shadow-lg shadow-gray-500 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </a>
        </div>
        <p>
          <Link href="/mentions" className="hover:border-b">
            Mentions légales
          </Link>
        </p>
        <p>
          <Link href="/cookies" className="hover:border-b">
            Cookies
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;