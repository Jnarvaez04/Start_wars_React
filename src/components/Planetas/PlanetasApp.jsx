import React, { useEffect, useState } from "react";

export const PlanetasApp = () => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {

    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((data) => {

        const useData = {

          nombre: data.results[0].name,
          rotate: data.results[0].rotation_period,
          clima: data.results[0].climate,
          terreno: data.results[0].terrain,
          popular: data.results[0].population,
        };

        setPlanet(useData);

      });
  }, []);


  return (
    <>
      <div className="w-screen h-auto flex justify-center ">
        <h2 className="text-white uppercase text-6xl">PLANETAS</h2>
      </div>

      {planet ? (  <div className="flex justify-around items-center flex-wrap">
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img src="" alt="" />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">{planet.nombre}</h2>
          <p className="mt-1 text-xl font-base tracking-normal text-white">
          <h3 className="text-base text-yellow-300">Rotation Period: <span className="text-white pl-1">{planet.rotate}</span></h3>
            <h3 className="text-base text-yellow-300">Climate: <span className="text-white pl-1">{planet.clima}</span></h3>
            <h3 className="text-base text-yellow-300">Terrain: <span className="text-white pl-1">{planet.terreno}</span></h3>
          </p>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">
              {planet.nombre}
            </h3>
            <i className="text-white">{planet.popular}</i>
          </div>
        </div>
      </div> ) : null}

    </>
  );
};
