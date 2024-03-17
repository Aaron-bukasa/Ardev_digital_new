import imgProfil from "../assets/img/profil_small.png";

export default function About() {
  return (
    <div className="max-w-[800px] mx-auto my-6">
      <Profil />
      <div className="flex flex-col text-white md:flex-row">
        <EtudesAndFormations />
        <Experiences />
      </div>
    </div>
  );
}

function Profil() {
  return (
    <div className="flex flex-col gap-y-5 bg-graySecond px-6 pt-12 pb-6 md:flex-row">
      <div>
        <img
          src={imgProfil}
          alt="photo de Aaron"
          className="rounded-full w-[40%] m-auto border-[5px] border-grayColor outline outline-8 outline-white "
        />
      </div>
      <div>
        <div>
          <h1 className="text-grayColor text-2xl">AARON BUKASA</h1>
          <p className="py-3">DEVELOPPEUR WEB &amp; GESTIONNAIRE FINANCIER</p>
        </div>
        <p className="text-justify">
          Développeur web et web mobile expérimenté avec une passion pour le
          code. Licencié en sciences économiques et de gestion, je dispose
          également d'une expérience professionnelle réussie dans le commerce.
          Je suis capable de relever les défis, de travailler en autonomie et
          j'ai une forte capacité d'apprentissage.
        </p>
      </div>
    </div>
  );
}

function EtudesAndFormations() {
  return (
    <div className="bg-grayColor py-6 px-6">
      <div className="mb-8">
        <h2 className="text-white flex gap-x-3 text-lg mb-4">
          <span className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
          </span>
          CONTACTEZ-MOI
        </h2>
        <p className="flex gap-x-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={24}
            viewBox="0 -960 960 960"
            width={24}
            className="fill-white"
          >
            <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          <a href="tel:+243816213580" className="text-white underline">
            +243 816 21 35 80
          </a>
        </p>
        <p className="flex gap-x-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={24}
            viewBox="0 -960 960 960"
            width={24}
            className="fill-white"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          <a href="mailto:01bukasa@gmail.com" className="text-white underline">
            01bukasa@gmail.com
          </a>
        </p>
        <p className="flex gap-x-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={24}
            viewBox="0 -960 960 960"
            width={24}
            className="fill-white"
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
          20, kasapa, C/Annexe, Lubumbashi, RDC
        </p>
      </div>
      <div className="my-6">
        <h2 className="text-white flex gap-x-3 text-lg mb-4">
          <span className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
            >
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>
          </span>
          FORMATION
        </h2>
        <h3>Universtité de Lubumbashi (UNILU)</h3>
        <p>
          Licence en sciences économiques et de gestion, Option gestion
          financière <br />
          2014-2019
        </p>
        <h3>KADEA Academy</h3>
        <p>
          Certificat en developpement web et web mobile <br />
          2023-2024
        </p>
      </div>
      <div className="my-6">
        <h2 className="text-white flex gap-x-3 text-lg mb-4">
          <span className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
            >
              <path d="m590-488 160-92-160-92-160 92 160 92Zm0 122 110-64v-84l-110 64-110-64v84l110 64ZM480-480Zm320 320H600q0-20-1.5-40t-4.5-40h206v-480H160v46q-20-3-40-4.5T80-680v-40q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm-720 0v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Z" />
            </svg>
          </span>
          FORMATION CONTINUE
        </h2>
        <p>Apprentissage continu de nouveaux langages informatique</p>
        <p>Actualisation régulière des compétences</p>
      </div>
      <div className="refference">
        <h2 className="text-white flex gap-x-3 text-lg mb-4">
          <span className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
            >
              <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
            </svg>
          </span>
          REFFERENCES
        </h2>
        <h3>OBRUCE MAKUALA</h3>
        <p>
          20, kasapa, C/Annexe, Lubumbashi, RDC
          <br /> La Rossée <br />
          <span>Tel</span>
          <a href="tel:+243999093092" className="text-white underline">
            +243 999 09 30 92
          </a>
        </p>
      </div>
    </div>
  );
}

function Experiences() {
  return (
    <div className="py-6 px-6 text-black bg-gray-100">
      <div className="Exp-prof">
        <h2 className="flex gap-x-3 text-lg mb-4">
          <span className="bg-grayColor rounded-full w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
              className="fill-white"
            >
              <path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z" />
            </svg>
          </span>
          EXPERIENCES PROFESSIONNELLES
        </h2>
        <h3>
          Développeur Fullstack La Rosée Lubumbashi, République Démocratique du
          Congo Octobre 2022 - Présent
        </h3>
        <ul>
          <li>Développement du site web et d'applications mobiles</li>
          <li>
            Utilisation de technologies telles que HTML, CSS, JavaScript, React,
            Node.js, etc.
          </li>
          <li>Mise en œuvre de solutions logicielles complexes</li>
        </ul>
        <h3>
          Responsable commercial La Rosée Lubumbashi, République Démocratique du
          Congo Septembre 2019 - Octobre 2022
        </h3>
        <ul>
          <li>
            Contribution significative à l’expansion de la gamme de produits et
            à l’augmentation du chiffre d’affaires
          </li>
          <li>Gestion de la comptabilité</li>
        </ul>
      </div>
      <div className="my-6">
        <h2 className="flex gap-x-3 text-lg mb-4">
          <span className="bg-grayColor rounded-full w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
              className="fill-white"
            >
              <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z" />
            </svg>
          </span>
          COMPETENCES TECHNIQUES
        </h2>
        <ul>
          <li>Comptabilité et analyse financière</li>
          <li>
            Développement Web : HTML, CSS, JavaScript, React, Bootstrap, Sass,
            WordPress, Node.js, git, GitHub.
          </li>
          <li>Autres : Microsoft office, Canvas, google slides, asana</li>
        </ul>
      </div>
      <div className="my-6">
        <h2 className="flex gap-x-3 text-lg mb-4">
          <span className="bg-grayColor rounded-full w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
              className="fill-white"
            >
              <path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z" />
            </svg>
          </span>
          PROJETS DE DEVELOPPEMENTS
        </h2>
        <ul>
          <li>Développement de logiciels</li>
          <li>
            Portfolio disponible sur{" "}
            <a href="https://github.com/Aaron-bukasa">Github</a> et{" "}
            <a href="https://www.linkedin.com/in/aaron-bukasa-bb84b42a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className="my-6">
        <h2 className="flex gap-x-3 text-lg mb-4">
          <span className="bg-grayColor rounded-full w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
              className="fill-white"
            >
              <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
            </svg>
          </span>
          LANGUES
        </h2>
        <ul className="">
          <li>Français</li>
          <li>Anglais (en cours d’apprentissage)</li>
          <li>Swahili</li>
          <li>Lingala</li>
        </ul>
      </div>
      <div className="centre-interet">
        <h2 className="flex gap-x-3 text-lg mb-4">
          <span className="bg-grayColor rounded-full w-8 h-8 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
              className="fill-white"
            >
              <path d="m80-520 200-360 200 360H80Zm200 400q-66 0-113-47t-47-113q0-67 47-113.5T280-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-280q0-33-23.5-56.5T280-360q-33 0-56.5 23.5T200-280q0 33 23.5 56.5T280-200Zm-64-400h128l-64-115-64 115Zm304 480v-320h320v320H520Zm80-80h160v-160H600v160Zm80-320q-57-48-95.5-81T523-659q-23-25-33-47t-10-47q0-45 31.5-76t78.5-31q27 0 50.5 12.5T680-813q16-22 39.5-34.5T770-860q47 0 78.5 31t31.5 76q0 25-10 47t-33 47q-23 25-61.5 58T680-520Zm0-105q72-60 96-85t24-41q0-13-7.5-21t-20.5-8q-10 0-19.5 5.5T729-755l-49 47-49-47q-14-14-23.5-19.5T588-780q-13 0-20.5 8t-7.5 21q0 16 24 41t96 85Zm0-78Zm-400 45Zm0 378Zm400 0Z" />
            </svg>
          </span>
          CENTRES D'INTERET
        </h2>
        <ul>
          <li>Passion pour le codage et le développement de logiciels</li>
          <li>Résolution de défis complexes</li>
          <li>Travail en autonomie et curiosité d’apprendre</li>
          <li>Contribution à des projets bénéfiques pour l’humanité</li>
        </ul>
      </div>
      <div className="my-6">
        <h2 className="flex gap-x-3 text-lg mb-4">
          <span className="bg-grayColor rounded-full w-8 h-8 flex justify-center items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                viewBox="0 -960 960 960"
                width={24}
                className="fill-white"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-80q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z" />
              </svg>
            </span>
          </span>
          OBJECTIF PROFESSIONNELLE
        </h2>
        <p>
          Contribution à l’avancement de la société en utilisant mes compétences
          en développement web et en gestion financière pour créer des logiciels
          innovants et utiles.
        </p>
      </div>
    </div>
  );
}
