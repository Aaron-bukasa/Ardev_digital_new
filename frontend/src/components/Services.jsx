import { Link } from "react-router-dom";
import imgWeb001 from "../assets/img/web001.jpg";
import imgFinance001 from "../assets/img/imgFinance001.jpg";
import imgFinance002 from "../assets/img/imgFinance002.jpg";
import devLogiciel005 from "../assets/img/devLogiciel005.png";
import imgWeb002 from "../assets/img/web002.jpg";
import imgWeb003 from "../assets/img/web003.jpg";
import bgSVG002 from "../assets/img/bgSVG002.png";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const intersectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current);
      }
    };
  }, []);

  const { value: frontend } = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? 92 : 0 },
    config: { duration: 4000 },
  });

  const { value: backend } = useSpring({
    from: { value: 0 },
    to: { value: isVisible ? 87 : 0 },
    config: { duration: 4000 },
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="p-5 leading-6 md:text-lg">
      <h1 className="text-2xl text-grayColor pt-4 text-4xl">MES SERVICES</h1>
      <div className="main mx-5">
        <div className="relative flex flex-col gap-5 py-4 lg:flex-row lg:items-center xl:h-[70vh]">
          <div className="w-[80%] mx-auto lg:order-last lg:w-[50%] lg:max-h-[550px] lg:grid lg:grid-cols-12 lg:grid-rows-12">
            <img
              src={imgWeb002}
              alt="logo site web"
              className="hidden lg:block lg:w-full lg:h-full lg:col-start-4 lg:col-end-12 lg:row-start-1 lg:row-end-6"
            />
            <img
              src={imgWeb001}
              alt="logo site web"
              className="lg:w-full lg:h-full lg:col-start-1 lg:col-end-8 lg:row-start-4 lg:row-end-10"
            />
            <img
              src={imgWeb003}
              alt="logo site web"
              className="hidden lg:block lg:w-full lg:h-full lg:col-start-6 lg:col-end-13 lg:row-start-8 lg:row-end-13"
            />
            <img
              src={bgSVG002}
              alt=""
              className="hidden -z-50 lg:block absolute lg:-right-[20%] lg:bottom-0"
            />
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
              la recherche de nouveaux défis. Je suis un excellent communicateur
              et je suis capable de travailler de manière indépendante ou en
              équipe.
            </p>
            <p>
              Je suis disponible pour des projets à temps plein, à temps partiel
              ou freelance. Si vous avez un projet de{" "}
              <strong>développement web</strong> en tête, n'hésitez pas à me{" "}
              <Link to="/contact" className="text-[#0000FF]">
                contacter
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="py-4 xl:flex xl:jstify-center xl:items-center xl:py-12">
          <div className="lg:w-[50%] text-justify lg:w-[620px] mx-auto xl:mx-0">
            <h2 className="my-4 lg:text-3xl xl:mb-12 xl:text-center">
              Developpement logiciel
            </h2>
            <p
              className="first-letter:font-bold first-letter:text-3xl first-letter:text-redColor
  first-letter:mr-1 first-letter:float-left"
            >
              Je suis un développeur logiciel expérimenté avec une passion pour
              créer des applications logicielles innovantes et efficaces. Je
              maîtrise les dernières technologies et tendances du développement
              logiciel, et je suis toujours à la recherche de nouvelles façons
              d'améliorer mon travail.
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
              ensuite des solutions personnalisées qui répondent à leurs besoins
              spécifiques. Je suis également disponible pour fournir un soutien
              et une maintenance continus après la mise en œuvre du projet.
            </p>
          </div>
          <div
            ref={intersectionRef}
            className="w-full flex justify-between gap-x-12 gap-y-6 px-6 xl:flex-col xl:order-first xl:w-[50%]"
          >
            <div className="w-full max-w-[480px] flex flex-col gap-y-4 font-semibold xl:order-last xl:w-[70%]">
              <div>
                <div>
                  <h4>Javascript</h4>
                  <p
                    className={`${
                      isVisible && "lg:w-[85%]"
                    } w-[85%] h-4 bg-gradient-to-r from-grayColor via-grayColor to-graySecond rounded-r-2xl lg:w-[0] transition-all duration-[3000ms]`}
                  ></p>
                </div>
              </div>
              <div>
                <div>
                  <h4>NodeJs</h4>
                  <p
                    className={`${
                      isVisible && "lg:w-[80%]"
                    } w-[80%] h-4 bg-gradient-to-r from-grayColor via-grayColor to-graySecond rounded-r-2xl lg:w-[0] transition-all duration-[3000ms]`}
                  ></p>
                </div>
              </div>
              <div>
                <div>
                  <h4>React</h4>
                  <p
                    className={`${
                      isVisible && "lg:w-[92%]"
                    } w-[92%] h-4 bg-gradient-to-r from-grayColor via-grayColor to-graySecond rounded-r-2xl lg:w-[0] transition-all duration-[3000ms]`}
                  ></p>
                </div>
              </div>
              <div>
                <div>
                  <h4>TypeScript</h4>
                  <p
                    className={`${
                      isVisible && "lg:w-[90%]"
                    } w-[90%] h-4 bg-gradient-to-r from-grayColor via-grayColor to-graySecond rounded-r-2xl lg:w-[0] transition-all duration-[3000ms]`}
                  ></p>
                </div>
              </div>
              <div>
                <div>
                  <h4>Express</h4>
                  <p
                    className={`${
                      isVisible && "lg:w-[87%]"
                    } w-[87%] h-4 bg-gradient-to-r from-grayColor via-grayColor to-graySecond rounded-r-2xl lg:w-[0] transition-all duration-[3000ms]`}
                  ></p>
                </div>
              </div>
              <div>
                <div>
                  <h4>CSS</h4>
                  <p
                    className={`${
                      isVisible && "lg:w-[97%]"
                    } w-[97%] h-4 bg-gradient-to-r from-grayColor via-grayColor to-graySecond rounded-r-2xl lg:w-[0] transition-all duration-[3000ms]`}
                  ></p>
                </div>
              </div>
              <div>
                <div>
                  <h4>Tailwind</h4>
                  <p
                    className={`${
                      isVisible && "lg:w-[95%]"
                    } w-[95%] h-4 bg-gradient-to-r from-grayColor via-grayColor to-graySecond rounded-r-2xl lg:w-[0] transition-all duration-[3000ms]`}
                  ></p>
                </div>
              </div>
              <div>
                <div>
                  <h4>Wordpress</h4>
                  <p
                    className={`${
                      isVisible && "lg:w-[75%]"
                    } w-[75%] h-4 bg-gradient-to-r from-grayColor via-grayColor to-graySecond rounded-r-2xl lg:w-[0] transition-all duration-[3000ms]`}
                  ></p>
                </div>
              </div>
            </div>
            <div className="hidden justify-center items-center gap-x-6 lg:flex">
              <div className="flex flex-col items-center gap-y-4">
                <h4 className="text-2xl">Frontend</h4>
                <animated.div className="flex justify-center items-center text-redColor text-4xl font-bold w-[220px] h-[220px]  xl:w-[200px] xl:h-[200px] border-4 border-grayColor rounded-full">
                  {frontend.to((value) => `${Math.round(value)}%`)}
                </animated.div>
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <h4 className="text-2xl">Backend</h4>
                <animated.div className="flex justify-center items-center text-redColor text-4xl font-bold w-[200px] h-[200px]  xl:w-[200px] xl:h-[200px] border-4 border-grayColor rounded-full">
                  {backend.to((value) => `${Math.round(value)}%`)}
                </animated.div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="my-4 lg:text-3xl">Gestion financière</h2>
          <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-8">
            <div className="w-[80%] m-auto lg:w-[50%]">
              <img src={imgFinance001} alt="logo gestion financiere" className="lg:hidden" />
              <Slider {...settings} className="hidden lg:block">
                <div className="w-full h-full">
                <img src={imgFinance001} alt="logo gestion financiere" className="w-full h-full" />
                </div>
                <div>
                <img src={imgFinance002} alt="logo gestion financiere" />
                </div>
                <div>
                <img src={devLogiciel005} alt="logo gestion financiere" />
                </div>
              </Slider>
            </div>
            <div className="lg:w-[50%] text-justify lg:w-[620px] lg:order-first mx-auto xl:mx-0">
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
              <div>
                "J'ai aidé une entreprise à augmenter son chiffre d'affaire de
                27% en diversifiant sa gamme des produits."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
