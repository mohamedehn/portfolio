import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const cv = "https://mohamedehn.github.io/portfolio/cv.pdf"; //this will define the url of the document

const Main = () => {
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
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="pt-24">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            CONSTRUISONS ENSEMBLE LE WEB DE DEMAIN
          </p>
          <h1 className="py-4 text-gray-700">
            Bienvenue sur mon<span className="text-[#338be9]"> Portfolio</span>!
          </h1>
          <h2 className="py-4 text-gray-700">
            Je m&#39;appelle Mohamed, développeur full stack spécialisé en
            Javascript
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Passionné par le développement, j&#39;ai décidé, en 2022, de faire
            de ma passion mon métier en effectuant une reconversion
            professionnelle.
          </p>
          <div className="py-2 flex items-center justify-between max-w-[330px] m-auto">
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
  );
};

export default Main;