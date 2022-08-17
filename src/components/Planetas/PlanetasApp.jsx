import React, { useEffect, useState } from 'react'


export const PlanetasApp = () => {

  // const {getallPerson} = getallPerson ();

  const[planet, setPlanet] = useState([]);
    
    useEffect(() => {
      async function fetchPeople(){
        const personaje = await fetch ('https://swapi.dev/api/planets/');
        const data = await personaje.json();
        setPlanet(data.results);
      }

      fetchPeople();
    },[]);

  return (
    
    // surface_water

    <div className='flex flex-wrap justify-center'>      {
        planet.map(planet =>(
          <div className='cont' key={setPlanet}>
             <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img src="data:image/jpeg;base64,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" alt="" />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">{planet.name}</h2>
          <div className='max-h-20	overflow-y-auto'>
          <p className="mt-1 text-xl font-base tracking-normal text-white">
          <h3 className="text-base text-yellow-300">Rotation_period: <span className="text-white pl-1">{planet.rotation_period}</span></h3>
            <h3 className="text-base text-yellow-300">Climate: <span className="text-white pl-1">{planet.climate}</span></h3>
            <h3 className="text-base text-yellow-300">Terrain: <span className="text-white pl-1">{planet.terrain}</span></h3>
            <h3 className="text-base text-yellow-300">Diameter: <span className="text-white pl-1">{planet.diameter}</span></h3>
            <h3 className="text-base text-yellow-300">Orbital_Period: <span className="text-white pl-1">{planet.orbital_period}</span></h3>
            <h3 className="text-base text-yellow-300">Gravity: <span className="text-white pl-1">{planet.gravity}</span></h3>
            <h3 className="text-base text-yellow-300">Surface_water: <span className="text-white pl-1">{planet.surface_water}</span></h3>
          </p>
          </div>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">
              {planet.name}
            </h3>
            <i className="text-white">{planet.population}</i>
          </div>
        </div>
          </div>
        ))
      }
    </div>
  )
}