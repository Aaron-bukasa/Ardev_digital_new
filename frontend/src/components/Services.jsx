export default function Services() {
  return (
    <>
        <h1>MES SERVICES</h1>
      <main className="main">
        <section id="dev__web">
          <h2 className="dev__web__title">Developpement Web</h2>
          <div className="dev__web__content section__content">
            <p>
              Développeur Web expérimenté avec une expertise en conception,
              développement et maintenance de sites Web et d'applications Web.
              Maîtrise des technologies HTML, CSS, JavaScript, PHP, MySQL et
              React.
            </p>
            <p>
              Je suis spécialisé dans la création de sites Web et d'applications
              Web de haute qualité qui sont à la fois attrayants et
              fonctionnels. Je travaille en étroite collaboration avec mes
              clients pour comprendre leurs besoins et créer des solutions qui
              répondent à leurs attentes.
            </p>
            <p>
              J'ai une passion pour le développement web et je suis toujours à
              la recherche de nouveaux défis. Je suis un excellent communicateur
              et je suis capable de travailler de manière indépendante ou en
              équipe.
            </p>
            <p>
              Je suis disponible pour des projets à temps plein, à temps partiel
              ou freelance. Si vous avez un projet de développement web en tête,
              n'hésitez pas à me contacter.
            </p>
            <div className="dev__web__carousel">
              <div className="carousel">
                <img src="../img/web_dev.png" alt="creation de site web" />
                <img
                  src="../img/clement-helardot.jpg"
                  className="img-mobile"
                  alt=""
                />
                <img
                  src="../img/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                  alt=""
                />
                <img src="../img/web_dev.png" alt="creation de site web" />
              </div>
            </div>
          </div>
        </section>
        <section id="dev__logiciel">
          <h2 className="dev__logiciel__title">Developpement logiciel</h2>
          <div className="dev__logiciel__title section__content">
            <p>
              Je suis un développeur logiciel expérimenté avec une passion pour
              créer des applications logicielles innovantes et efficaces. Je
              maîtrise les dernières technologies et tendances du développement
              logiciel, et je suis toujours à la recherche de nouvelles façons
              d'améliorer mon travail.
            </p>
            <p>
              Je suis compétent dans les langages de programmation suivants :
              JavaScript et MySQL. J'ai également une expérience dans le
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
            <div className="skills">
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
          <h2 className="gestion__fin__title">Gestion financière</h2>
          <div className="gestion__fin__content section__content">
            <p>
              Je suis un gestionnaire financier expérimenté avec une passion
              pour aider les entreprises à atteindre leurs objectifs financiers.
              Je maîtrise les dernières techniques et tendances en matière de
              gestion financière, et je suis toujours à la recherche de
              nouvelles façons d'améliorer mes services.
            </p>
            <p>
              Je suis un gestionnaire financier expérimenté avec une passion
              pour aider les entreprises à atteindre leurs objectifs financiers.
              Je maîtrise les dernières techniques et tendances en matière de
              gestion financière, et je suis toujours à la recherche de
              nouvelles façons d'améliorer mes services.
            </p>
            <p>
              Je suis titulaire d'un diplôme en gestion financière de
              l'Université de Lubumbashi, UNILU en sigle. J'ai également une
              expérience de 3 années dans la gestion financière, notamment dans
              les secteurs de commerce.
            </p>
            <p>
              Je travaille en étroite collaboration avec mes clients pour
              comprendre leurs besoins et leurs objectifs financiers. Je leur
              propose ensuite des solutions personnalisées qui répondent à leurs
              besoins spécifiques. Je suis également disponible pour fournir un
              soutien et une supervision continus après la mise en œuvre de la
              solution.
            </p>
            <div className="experiences">
              <p>
                "J'ai aidé une entreprise à augmenter son chiffre d'affaire de
                27% en diversifiant sa gamme des produits."
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
