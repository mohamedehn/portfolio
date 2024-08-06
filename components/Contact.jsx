import Image from "next/image";
import React from "react";
import img from "../public/assets/contact.webp";
import { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const cv = "https://mohamedehn.github.io/portfolio/cv.pdf"; //this will define the url of the document

function Contact() {
  const [buttonText, setButtonText] = useState("Envoyer"); //gestion de l'état du bouton envoyer
  const [status, setStatus] = useState({});
  const router = useRouter(); // pour rediriger sur la page de confirmation

  // les variable ci-dessous permettent de récupérer les cookies et ainsi vérifier si ils sont accepté ou non
  // on interviendra ensuite sur le bouton envoyer afin de le rendre inactif si les cookies ont été rejetées ou en attente de choix
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("cookiesAccepted="));
    const isAccepted =
      cookiesAccepted && cookiesAccepted.split("=")[1] === "true";
    setIsCookiesAccepted(isAccepted);
  }, []);

  //fonction qui permettra d'afficher un message d'alerte
  function handleClick() {
    if (!isCookiesAccepted) {
      alert("Veuillez accepter les cookies pour continuer.");
    }
  }

  // function qui permet de bloquer l'envoi du formulaire, de supprimer les cookies du local storage, de refresh la page + afficher popUpCookies
  const acceptCookies = (event) => {
    event.preventDefault();
    localStorage.removeItem("cookiesAccepted");
    window.location.reload();
  };

  //here a function to allow visitors download my resume
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div id="contact" className="w-full lg:h-screen pt-[50px]">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#338be9]">
          Contact
        </p>
        <h2 className="py-4">N&#39;hésitez pas à me solliciter</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={img}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Mohamed Ebarhmatin</h2>
                <p>Développeur Front-End</p>
                <p className="py-4">
                  Je suis disponible pour un poste à plein temps ou des missions
                  en freelance. N&#39;hésitez pas à me contacter afin d&#39;en
                  discuter
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connectons-nous !</p>
                <div className="flex items-center justify-between py-4">
                  <a href="https://fr.linkedin.com/in/mohamed-ebarhmatin-376731179">
                    <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="https://github.com/mohamedehn">
                    <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="mailto:mohamed.ebarhmatin@yahoo.fr">
                    <div className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <div
                    onClick={() => {
                      downloadFile(cv);
                    }}
                    className="rounded-full shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://formsubmit.co/mohamed.ebarhmatin@yahoo.fr"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Nom - Prénom
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Téléphone</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Objet</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    required
                  ></textarea>
                </div>
                {/* <button className='w-full p-4 text-gray-100'>Envoyer</button> */}
                {isCookiesAccepted ? (
                  <div className="sm:col-span-2 sm:justify-end block">
                    <button
                      type="submit"
                      onClick={handleClick}
                      disabled={!isCookiesAccepted} // permet de vérifier si l'utilisateur à accepté ou non les cookies
                      className="mt-3 md:mt-0 inline-flex w-full items-center justify-center rounded-md border border-transparent
                                    px-6 py-3 text-base font-medium text-black shadow-sm focus:outline-none focus:ring-2
                                    focus:ring-[#9aabb2] focus:ring-offset-2 sm:w-auto bg-gradient-to-r from-[#338be9] to-[#82a7ff]"
                    >
                      {buttonText}
                    </button>
                    {status.message && (
                      <div>
                        <p
                          className={
                            status.success === false
                              ? "danger, text-red-700"
                              : "success, text-green-600"
                          }
                        >
                          {status.message}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <button onClick={acceptCookies} className="p-1">
                      Merci d&apos;accepter au préalable les cookies en cliquant
                      ici
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;