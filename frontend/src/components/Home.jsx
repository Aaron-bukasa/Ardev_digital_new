import imgProfilSmall from "../assets/img/profil_small.png";
import imgProfilFull from "../assets/img/profil_full.png";
import datas from "../assets/portfolio.json";

export default function Home() {
  return (
    <div className="px-5 bg-white md:px-12">
      <HomeAbout />
      <HomeServices />
      <HomePorfolio />
      <HomeContact />
    </div>
  );
}

function HomeAbout() {
  return (
    <div className="flex flex-col items-center py-5 lg:flex-row">
      <div className="text-center order-2 lg:order-1 lg:w-[50%]">
        <h1 className="text-2xl text-center text-grayColor md:my-3 lg:text-4xl">AARON BUKASA</h1>
        <h4 className="font-semibold text-center mb-4">Développeur web et mobile &amp; Gestionnaire financier</h4>
        <p className="text-justify md:leading-loose">
          Développeur web et mobile experimenté avec une passion pour les codes.
          Licencié en sciences économiques et de gestion, je dispose également
          d'une expérience professionnelle réussie dans le commerce.
        </p>
        <p className="text-justify md:leading-loose">
          Aujourd'hui je prends plaisir à coder, à passer des longues heures
          entrain de coder, à apprendre des nouvelles connaissances en
          développement web, donner vie à mes idées, coder me rend vivant.
        </p>
        <div className="font-lora font-semibold flex flex-col items-center gap-y-5 my-6 sm:flex-row sm:gap-x-3 lg:flex-col">
          <a
            href="#"
            className="text-redColor text-center w-full p-3 border-[1px] border-solid border-grayColor transitionBtn hover:bg-[#5252661c] sm:w-[50%] lg:w-full"
          >
            Télécharger CV PDF
          </a>
          <a
            href="https://aaron-bukasa.github.io/Aaron_bukasa-Curriculum_vitae/"
            target="_blank"
            className="bg-grayColor text-white text-center w-full p-3 border-[1px] border-solid border-grayColor transitionBtn hover:opacity-90 sm:w-[50%] lg:w-full"
          >
            Voir le CV
          </a>
        </div>
      </div>
      <div className="my-5 order-1 lg:order-2 lg:w-[50%]">
        <img
          src={imgProfilFull}
          alt="Aaron bukasa"
          className="hidden lg:block"
        />
        <img
          src={imgProfilSmall}
          alt="Aaron Bukasa"
          className="w-64 h-64 rounded-full lg:hidden"
        />
      </div>
    </div>
  );
}

function HomeServices() {
  return (
    <div className="py-5">
      <h2>MES SERVICES</h2>
      <div className="flex flex-wrap justify-center gap-6 my-6">
        <div className="gestion__fin text-center border-[1px] border-solid border-grayColor rounded-2xl w-[400px] bg-yellowColor">
          <a
            href="./pages/services.html#gestion__fin"
            className="block text-white p-12 md:px-6"
          >
            <h3 className="flex justify-center items-center gap-x-3 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                viewBox="0 -960 960 960"
                width={24}
                className="fill-white stroke-white"
              >
                <path d="M320-414v-306h120v306l-60-56-60 56Zm200 60v-526h120v406L520-354ZM120-216v-344h120v224L120-216Zm0 98 258-258 142 122 224-224h-64v-80h200v200h-80v-64L524-146 382-268 232-118H120Z" />
              </svg>
              Gestion financière
            </h3>
            <p className="text-justify leading-relaxed my-6">
              Je suis un gestionnaire financier expérimenté avec une passion
              pour aider les entreprises à atteindre leurs objectifs financiers.
              Je maîtrise les dernières techniques et tendances en matière de
              gestion financière, et je suis toujours à la recherche de
              nouvelles façons d'améliorer mes services...
            </p>
            <p className="font-lora font-semibold w-max p-1 mx-auto after:content-linkAfter after:translate-y-[8px] after:inline-block after:ml-1">
              Voir plus
            </p>
          </a>
        </div>
        <div className="dev__web text-center border-[1px] border-solid border-grayColor rounded-2xl w-[400px] bg-grayColor">
          <a
            href="./pages/services.html#dev_web"
            className="block text-white p-12 md:px-6"
          >
            <h3 className="flex justify-center items-center gap-x-3 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                viewBox="0 -960 960 960"
                width={24}
                className="fill-white stroke-white"
              >
                <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
              </svg>
              développement web
            </h3>
            <p className="text-justify leading-relaxed my-6">
              Développeur Web expérimenté avec une expertise en conception,
              développement et maintenance de sites Web et d'applications Web.
              Maîtrise des technologies HTML, CSS, JavaScript, PHP, MySQL et
              React.Je suis spécialisé dans la création de sites Web et
              d'applications Web de haute qualité qui sont à la fois
              attrayants...
            </p>
            <p className="font-lora font-semibold w-max p-1 mx-auto after:content-linkAfter after:translate-y-[8px] after:inline-block after:ml-1">
              Voir plus
            </p>
          </a>
        </div>
        <div className="dev__logiciel text-center border-[1px] border-solid border-grayColor rounded-2xl w-[400px] bg-redColor">
          <a
            href="./pages/services.html#dev__logiciel"
            className="block text-white p-12 md:px-6"
          >
            <h3 className="flex justify-center items-center gap-x-3 text-lg">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 100 100"
                xmlSpace="preserve"
                className="fill-white stroke-white"
              >
                <path
                  d="M78,67.5H44.4c-1,0-1.9,0.9-1.9,1.9v3.7c0,1,0.9,1.9,1.9,1.9H78c1,0,1.9-0.9,1.9-1.9v-3.7
                          C79.9,68.3,79,67.5,78,67.5z"
                />
                <path
                  d="M49.2,44.8L25.1,25.4c-0.7-0.6-1.9-0.5-2.5,0.4l-2.1,3c-0.6,0.9-0.4,2,0.4,2.6L38,45.1c0.6,0.5,0.6,1.5,0,2
                          L20.8,60.9c-0.7,0.6-1,1.9-0.4,2.6l2.1,3.2c0.6,0.9,1.7,1,2.5,0.4l24.2-19.3C50.2,47,50.2,45.5,49.2,44.8z"
                />
              </svg>
              développement logiciel
            </h3>
            <p className="text-justify leading-relaxed my-6">
              Je suis un développeur logiciel expérimenté avec une passion pour
              créer des applications logicielles innovantes et efficaces. Je
              maîtrise les dernières technologies et tendances du développement
              logiciel, et je suis toujours à la recherche de nouvelles façons
              d'améliorer mon travail...
            </p>
            <p className="font-lora font-semibold w-max p-1 mx-auto after:content-linkAfter after:translate-y-[8px] after:inline-block after:ml-1">
              Voir plus
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

function HomePorfolio() {
  return (
    <div className="flex flex-col items-center my-12">
      <h2 className="self-start">MES PORTFOLIO</h2>
      <ul className="flex items-center justify-center flex-wrap gap-6">
        {datas.map((data) => (
          <li key={data.id}>
            <a
              href={data.link}
              target="_blank"
              class="relative beforePortfolio projet-0 block w-[400px] hover:before:h-full"
            >
              <img src={data.image} alt={data.nom} className="w-full h-full" />
              <div className="relative text-center text-white flex flex-col items-center justify-center gap-[12px] bg-grayColor p-6 -mt-[7px] beforeProjet">
                <h3 className="text-xl text-center">{data.name}</h3>
                <p>{data.description}</p>
                <p>{data.langage}</p>
                <p>{data.date}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <a
        href="./pages/portfolio.html"
        className="block w-max font-lora text-xl text-white p-4 my-4 mx-auto bg-redColor rounded"
      >
        voir plus
      </a>
    </div>
  );
}

function HomeContact() {
  return (
    <div className="pt-6 px-6 pb-12 bg-white">
      <h2 className="md:text-3xl md:mb-12">ME CONTACTER</h2>
      <div className="flex flex-col items-center gap-6 lg:flex-row">
        <div className="text-lg w-[80%] mx-auto">
          <h3 className="text-[24px] text-center text-grayColor mb-6">AARON BUKASA</h3>
          <a href="tel:+243816213580" className="flex items-center gap-x-4 my-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
            >
              <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
            +243 816 21 35 80
          </a>
          <a href="mailto:aaronbukasa.mba@gmail.com" className="flex items-center gap-x-4 my-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            aaronbukasa.mba@gmail.com
          </a>
          <p className="flex items-center gap-x-4 my-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            Lubunbashi / RDC
          </p>
          <div className="flex gap-x-4 mt-4 mb-6">
            <a
              href="https://www.linkedin.com/in/aaron-bukasa-bb84b42a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="mg-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="LinkedIn"
                role="img"
                viewBox="0 0 512 512"
                stroke="#ffffff"
                fill="#484873"
              >
                <rect width={512} height={512} rx="15%" />
                <circle cx={142} cy={138} r={37} fill="#ffffff" />
                <path strokeWidth={66} d="M244 194v198M142 194v198" />
                <path
                  d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"
                  fill="#ffffff"
                />
              </svg>
            </a>
            <a href="https://github.com/Aaron-bukasa" target="_blank">
              <svg
                width="800px"
                height="800px"
                viewBox="0 -0.5 24 24"
                id="meteor-icon-kit__regular-github"
                fill="#484873"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z"
                />
              </svg>
            </a>
          </div>
        </div>
        <form method="post" className="p-6 border-2 border-solid text-white bg-grayColor md:rounded-2xl">
          <div className="username mb-4">
            <label htmlFor="username">Nom*</label>
            <input type="text" id="username" name="nom" className="border-2 border-solid border-grayColor text-black p-1 focus:outline-0" />
          </div>
          <div className="useremail mb-4">
            <label htmlFor="useremail">Mail*</label>
            <input type="email" id="useremail" name="email" className="border-2 border-solid border-grayColor text-black p-1 focus:outline-0" />
          </div>
          <div className="usermessage mb-4">
            <label htmlFor="usermessage">Message</label>
            <textarea
              name="usermessage"
              id="usermessage"
              cols={30}
              rows={10}
              defaultValue={""}
              className="h-24 border-2 border-solid border-grayColor text-black p-1 focus:outline-0"
            />
          </div>
          <div className="flex gap-x-4 mb-4">
            <input
              type="checkbox"
              id="validation-right"
              name="validation-right"
              className="w-16 md:w-8"
            />
            <label htmlFor="validation-right">
              Je consens par la présente à ce que ces données soient stockées et
              traitées dans le but d'établir un contact. je sais que je peux
              révoquer mon consentement à tout moment*
            </label>
          </div>
          <p>Veillez remplir tous les champs obligatoires.</p>
          <button className="w-full text-white bg-white font-bold text-grayColor p-3 my-4">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
