import Link from "next/link";
import { useEffect } from "react";
import React from "react";

function Mentions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#ecf0f3] h-full text-justify">
      <div className="relative md:bg-[#ecf0f3] md:p-6 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-6">
          <div
            className="prose prose-lg prose-indigo text-gray-600 lg:max-w-none sm:mx-auto sm:mt-5 sm:max-w-xl md:mt-5
                 lg:mx-0 text-justify pt-14"
          >
            <div className="rounded-md shadow w-[25%] justify-center flex mx-auto mt-0">
              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base
                            font-medium text-black md:py-4 md:px-10 no-underline bg-gradient-to-r from-[#338be9] to-[#82a7ff]"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
            <div>
              <p
                className="text-gray-900 font-semibold flex mx-auto w-auto justify-center pt-10"
                id="mentions"
              >
                MENTIONS LEGALES
              </p>
              <p className="text-gray-900 font-semibold pt-10 pb-5">
                1 - PROPRIÉTÉ
              </p>
              <p className="leading-8">
                Le présent site est la propriété de Coding Corp <br />
                Siège social : 7 Impasse de la Boutas 38090 VILLEFONTAINE - Tél
                : 06 87 41 O9 41 <br />
                Email: contact@codingcorp.fr <br />
                Entreprise individuelle créée en 2023 – Code 62.01Z - SIRET :
                953 263 423 00014
                <br />
                {/* Directeur de la publication : nom, fonction et entreprise <br/> */}
                Toute reproduction même partielle est interdite sans
                autorisation préalable.
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-semibold pt-10 pb-5">
                2 - PRESTATAIRES
              </p>
              <p className="leading-8">
                Création / Conception / Développement : <br />
                Nom entreprise : Coding Corp <br />
                SIRET : 953 263 423 00014
                <br />
                Email : contact@codingcorp.fr <br />
                Web : https://mohamedehn.github.io/portfolio <br />
                Hébergement : HOSTINGER
              </p>
            </div>
            <div>
              <p
                className="text-gray-900 font-semibold flex mx-auto w-auto justify-center pt-10 pb-10"
                id="politique"
              >
                POLITIQUE DE CONFIDENTIALITÉ
              </p>
              <p className="leading-8">
                Les internautes accédant au site
                https://mohamedehn.github.io/portfolio peuvent être amenés à
                fournir des informations nominatives ou à caractère personnel
                dans le cadre des services proposés par Coding Corp.
              </p>
              <p className="leading-8">
                L’entreprise Coding Corp est responsable de traitement au sens
                du Règlement (UE) 2016/679 dit Règlement Général pour la
                Protection des Données ou « RGPD », pour la collecte et le
                traitement des données à caractère personnel effectuées sur le
                site accessible à l’adresse URL: <br />{" "}
                https://mohamedehn.github.io/portfolio
              </p>
              <p className="pt-3">
                L’entreprise Coding Corp traite les données personnelles
                collectées via son site pour les finalités suivantes :
              </p>
              <p className="leading-8">
                - Afin de permettre au visiteur du site d’obtenir des
                informations sur les services proposés par l&apos;entreprise
                Coding Corp et les conditions d’éligibilité.
                <br />
                Conformément au RGPD, le visiteur du site dispose sur ses
                données personnelles des droits suivants :<br />
                - Un droit d’accès
                <br />
                - Un droit de rectification
                <br />
                - Un droit d’effacement
                <br />
                - Le cas échéant, d’un droit à la portabilité de ses données
                <br />
                - Un droit de demander la limitation du traitement de ses
                données et/ ou de s’y opposer
                <br />
                - Le cas échéant, un droit de retirer son consentement
                <br />
                - Un droit de définir des directives relatives au sort de ses
                données après sa mort
                <br />
                Le visiteur peut exercer ses droits en envoyant soit :<br />
                - Un courriel au Responsable de Traitement de DNS France <br />
                - Un courrier à l’attention du Responsable de Traitement à
                l’adresse suivante :<br />
                Coding Corp - Mohamed Ebarhmatin <br />
                7 Impasse de la Boutas
                <br />
                38090 Villefontaine
                <br />
              </p>
              <p className="pt-3 text-justify leading-8">
                Si le visiteur estime que Coding Corp n’a pas correctement
                répondu à ses sollicitations, il dispose d’un droit d’introduire
                une réclamation auprès de la CNIL. Coding Corp limite la
                collecte des données personnelles au strict nécessaire au regard
                des finalités des traitements de données, elles sont destinées à
                l&apos;entrprise Coding Corp mais sont susceptibles d’être
                transférées à des organismes publics afin de mieux répondre à la
                demande du visiteur.
              </p>
              <p className="leading-8">
                Les données ne sont en aucun cas communiquées, ni vendues, ni
                cédées, louées et / ou commercialisées à des tiers au sens du
                RGPD.
              </p>
              <p className="leading-8">
                Les données sont stockées exclusivement sur le territoire
                Français et ne font l’objet d’aucun transfert en dehors de
                l’Union Européenne.
              </p>
              <p className="leading-8">
                Les données seront conservées tant que le visiteur souhaite
                recevoir des informations, et le temps nécessaire à la gestion
                de sa demande.
              </p>
              <p className="leading-8">
                Coding Corp veille à ce que toutes les mesures techniques et
                organisationnelles afin de protéger les données personnelles
                soient mises en œuvre, ces règles de confidentialités et de
                sécurité sont également imposées à l’ensemble du personnel de
                Coding Corp , ainsi qu’à tous les prestataires et sous-traitants
                travaillant pour Coding Corp.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 inline-flex rounded-md shadow"></div>
      </div>
    </div>
  );
}

export default Mentions;