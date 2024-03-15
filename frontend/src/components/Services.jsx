import { Link } from "react-router-dom";
import imgWeb001 from "../assets/img/web001.jpg";
import imgFinance from "../assets/img/finance.jpg";
import imgWeb002 from "../assets/img/web002.jpg";
import imgWeb003 from "../assets/img/web003.jpg";
import bgSVG002 from "../assets/img/bgSVG002.png";


export default function Services() {
  return (
    <div className="p-5 leading-6 md:text-lg">
      <h1 className="text-2xl text-grayColor pt-4 text-4xl">MES SERVICES</h1>
      <div className="main mx-5">          
          <div className="relative flex flex-col gap-5 py-4 lg:flex-row lg:items-center xl:h-[70vh]">
            <div className="w-[80%] mx-auto lg:order-last lg:w-[50%] lg:max-h-[550px] lg:grid lg:grid-cols-12 lg:grid-rows-12">
              <img src={imgWeb002} alt="logo site web" className="hidden lg:block lg:w-full lg:h-full lg:col-start-4 lg:col-end-12 lg:row-start-1 lg:row-end-6" />
              <img src={imgWeb001} alt="logo site web" className="lg:w-full lg:h-full lg:col-start-1 lg:col-end-8 lg:row-start-4 lg:row-end-10" />
              <img src={imgWeb003} alt="logo site web" className="hidden lg:block lg:w-full lg:h-full lg:col-start-6 lg:col-end-13 lg:row-start-8 lg:row-end-13" />
              <img src={bgSVG002} alt="" className="hidden -z-50 lg:block absolute lg:-right-[20%] lg:bottom-0" />
            </div>
            <div className="lg:w-[50%] text-justify lg:w-[620px] ">
              <h2 className="my-4 lg:text-3xl">Developpement Web</h2>
              <p
                className="first-letter:font-bold first-letter:text-3xl first-letter:text-redColor
  first-letter:mr-1 first-letter:float-left lg:first-letter:text-5xl"
              >
                Développeur Web expérimenté avec une expertise en conception,
                développement et maintenance de sites Web et d'applications Web.
                Maîtrise des technologies{" "}
                <em>
                  HTML, CSS, JavaScript, React, TypeScript, Nodejs, express,
                  MySQL, Postsql, etc.
                </em>
              </p>
              <p>
                Je suis spécialisé dans la création de <em>sites Web</em> et d'
                <strong>applications Web</strong> de haute qualité qui sont à la
                fois attrayants et fonctionnels. Je travaille en étroite
                collaboration avec mes clients pour comprendre leurs besoins et
                créer des solutions qui répondent à leurs attentes.
              </p>
              <p>
                J'ai une passion pour le développement web et je suis toujours à
                la recherche de nouveaux défis. Je suis un excellent
                communicateur et je suis capable de travailler de manière
                indépendante ou en équipe.
              </p>
              <p>
                Je suis disponible pour des projets à temps plein, à temps
                partiel ou freelance. Si vous avez un projet de{" "}
                <strong>développement web</strong> en tête, n'hésitez pas à me{" "}
                <Link to="/contact" className="text-[#0000FF]">
                  contacter
                </Link>
                .
              </p>
            </div>
          </div>
        <section className="py-4">
          <h2 className="my-4 lg:text-3xl">Developpement logiciel</h2>
          <div className="flex flex-wrap gap-y-5">
            <div className="w-[80%] mx-auto">
              <img src={imgWeb001} alt="" />
            </div>
            <div>
              <p
                className="first-letter:font-bold first-letter:text-3xl first-letter:text-redColor
    first-letter:mr-1 first-letter:float-left"
              >
                Je suis un développeur logiciel expérimenté avec une passion
                pour créer des applications logicielles innovantes et efficaces.
                Je maîtrise les dernières technologies et tendances du
                développement logiciel, et je suis toujours à la recherche de
                nouvelles façons d'améliorer mon travail.
              </p>
              <p>
                Je suis compétent dans les langages de programmation suivants :
                JavaScript, nodejs. J'ai également une expérience dans le
                développement de logiciels pour une variété d'industries,
                notamment la finance, la santé et la technologie.
              </p>
              <p>
                Je travaille en étroite collaboration avec mes clients pour
                comprendre leurs besoins et leurs objectifs. Je leur propose
                ensuite des solutions personnalisées qui répondent à leurs
                besoins spécifiques. Je suis également disponible pour fournir
                un soutien et une maintenance continus après la mise en œuvre du
                projet.
              </p>
            </div>
            <div className="hidden">
              <h3>SKILLS</h3>
              <div className="javascript">
                <label htmlFor="javascript">JavaScript</label>
                <progress id="javascript" max={100} value={0}>
                  85
                </progress>
              </div>
              <div className="reactjs">
                <label htmlFor="reactjs">ReactJs</label>
                <progress id="reactjs" max={100} value={0}>
                  95
                </progress>
              </div>
              <div className="nodejs">
                <label htmlFor="nodejs">NodeJs</label>
                <progress id="nodejs" max={100} value={0}>
                  92
                </progress>
              </div>
              <div className="mysql">
                <label htmlFor="mysql">MySQL</label>
                <progress id="mysql" max={100} value={0}>
                  80
                </progress>
              </div>
            </div>
          </div>
        </section>
        <section id="gestion__fin">
          <h2 className="my-4 lg:text-3xl">Gestion financière</h2>
          <div className="flex flex-wrap gap-y-5">
            <div className="w-[80%] m-auto">
              <img src={imgFinance} alt="logo gestion financiere" />
            </div>
            <div>
              <p
                className="first-letter:font-bold first-letter:text-3xl first-letter:text-redColor
  first-letter:mr-1 first-letter:float-left"
              >
                Gestionnaire financier expérimenté avec une passion pour aider
                les entreprises à atteindre leurs objectifs financiers. Je
                maîtrise les dernières techniques et tendances en matière de
                gestion financière, et je suis toujours à la recherche de
                nouvelles façons d'améliorer mes services.
              </p>
              <p>
                Je suis un gestionnaire financier expérimenté avec une passion
                pour aider les entreprises à atteindre leurs objectifs
                financiers. Je maîtrise les dernières techniques et tendances en
                matière de gestion financière, et je suis toujours à la
                recherche de nouvelles façons d'améliorer mes services.
              </p>
              <p>
                Je suis titulaire d'un diplôme en gestion financière de
                l'Université de Lubumbashi, UNILU en sigle. J'ai également une
                expérience de 3 années dans la gestion financière, notamment
                dans les secteurs de commerce.
              </p>
              <p>
                Je travaille en étroite collaboration avec mes clients pour
                comprendre leurs besoins et leurs objectifs financiers. Je leur
                propose ensuite des solutions personnalisées qui répondent à
                leurs besoins spécifiques. Je suis également disponible pour
                fournir un soutien et une supervision continus après la mise en
                œuvre de la solution.
              </p>
            </div>
            <div className="experiences">
              <p>
                "J'ai aidé une entreprise à augmenter son chiffre d'affaire de
                27% en diversifiant sa gamme des produits."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
