import React, { useState, useEffect } from "react";
import Link from "next/link";

const PopUpCookies = () => {
  const [visible, setVisible] = useState(false); //le hook useState permet de gérer l'état de visibilité de notre pop-up de cookies.

//e hook useEffect pour vérifier si l'utilisateur a déjà accepté les cookies. 
//Si ce n'est pas le cas, nous rendons la popup visible en définissant l'état à true
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setVisible(true);
    }
  }, []);

//La méthode handleAccept() est appelée lorsqu'un utilisateur clique sur le bouton Accepter. 
//Elle définit une clé dans le localStorage pour enregistrer le choix de l'utilisateur et cache la popup.
  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
    window.location.reload()
  };

//La méthode handleRefuse() est appelée lorsqu'un utilisateur clique sur le bouton Refuser. 
//Elle définit une clé dans le localStorage pour enregistrer le choix de l'utilisateur et cache la popup.
  const handleRefuse = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setVisible(false);
    window.location.reload()
  };

//Dans le rendu du composant, nous vérifions si la popup doit être affichée en fonction de l'état de visibilité. 
//Si oui, nous affichons le message et les boutons Accepter/Refuser.
  return visible ? (
    <div className="fixed bottom-0 right-0 left-0 z-50 p-4 bg-gray-400 rounded-3xl w-[70%] sm:w-[60%] m-auto">
      <p className="text-gray-900 mt-3 sm:mx-auto sm:mt-5 md:mt-5 lg:mx-0 text-justify">
        Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site web. En cliquant sur « Accepter », vous acceptez 
        l’utilisation de cookies à usages techniques nécessaires à son bon fonctionnement, ainsi que des cookies, y compris des cookies tiers, 
        à des fins statistiques, de publicité ou de personnalisation pour vous proposer des services et des offres adaptés. Pour plus 
        d&apos;informations, consultez nos <Link href="/mentions" className="no-underline text-gray-100 font-bold">mentions légales</Link>.
      </p>
      <div className="flex justify-end pt-2">
        <button
          className="px-4 py-2 mr-2 text-sm font-bold text-black bg-white rounded hover:bg-slate-400"
          onClick={() => {
            handleAccept(); //appel la fonction et ajoute un cookie avec la valeur "cookiesAccepted=true" et une durée de vie de 1 an
            document.cookie = "cookiesAccepted=true; max-age=31536000";
          }}
        >
          Accepter
        </button>
        <button
          className="px-4 py-2 text-sm font-bold text-white bg-white rounded hover:bg-slate-400"
          onClick={() => {
            handleRefuse(); //appel la fonction handleRefuse et ajoute un cookie avec la valeur "cookiesAccepted=false" et une durée de vie de 1 an
            document.cookie = "cookiesAccepted=false; max-age=31536000";
          }}
        >
          Refuser
        </button>
      </div>
    </div>
  ) : null;
};

export default PopUpCookies;