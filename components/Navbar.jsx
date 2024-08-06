import Image from "next/image"; //useful to import images with next without import it from any files like react
// import Link from "next/link";
import { react, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import logo from "../public/assets/navLogo2.webp";

const Navbar = () => {
  //here I'm going to set the state to open and close the menu while I'm in a small screen like mobile
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  //Below is the state to have deux different navbar bg
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  //useEffect here to change the navbar rather I'm on project pages or main page
  useEffect(() => {
    if (
      router.asPath === "/dns" ||
      router.asPath === "/ges" ||
      router.asPath === "/kasa" ||
      router.asPath === "/booki" ||
      router.asPath === "/ohmyfood" ||
      router.asPath === "/kanap" ||
      router.asPath === "/panthere" ||
      router.asPath === "/piiquante" ||
      router.asPath === "/portfolio"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect here to show or not the shadow on the navbar while scrolling
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
      style={{ backgroundColor: `${navBg}` }}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a href="#main">
          <Image src={logo} alt="/" width="125" height="50" />
        </a>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <a href="#main">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Accueil
              </li>
            </a>
            <a href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                A propos
              </li>
            </a>
            <a href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Skills
              </li>
            </a>
            <a href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Projets
              </li>
            </a>
            <a href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Contact
              </li>
            </a>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* the div above will allow me to put the navbar on the left when I'm using a mobile device*/}
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a href="#main">
                <Image src={logo} alt="/" width="120" height="50" />
              </a>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[90%] md:w-[90%] py-2">
                Construisons ensemble le web de demain !
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="#main">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {" "}
                  Accueil{" "}
                </li>
              </a>
              <a href="#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {" "}
                  A propos{" "}
                </li>
              </a>
              <a href="#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {" "}
                  Skills{" "}
                </li>
              </a>
              <a href="#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {" "}
                  Projets{" "}
                </li>
              </a>
              <a href="#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {" "}
                  Contact{" "}
                </li>
              </a>
            </ul>
            <div className="pt-9">
              <p className="uppercase tracking-widest text-[#338be9]">
                Prenons contact !
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="https://fr.linkedin.com/in/mohamed-ebarhmatin-376731179">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="https://github.com/mohamedehn">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="mailto:mohamed.ebarhmatin@yahoo.fr">
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
