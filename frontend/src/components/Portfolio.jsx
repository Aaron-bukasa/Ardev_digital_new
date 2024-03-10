import datas from "../assets/portfolio.json";

export default function Portfolio() {
    return (
        <div className="flex flex-col items-center my-12 z-50 min-h-screen px-6 md:px-12">
          <h2 className="self-start">MES PORTFOLIO</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-auto gap-5">
            
            {datas.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  target="_blank"
                  className="relative beforePortfolio projet-0 block w-[400px] hover:before:h-full"
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