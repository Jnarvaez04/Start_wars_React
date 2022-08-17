import React, { useEffect, useState } from 'react'


export const PersonajesApp = () => {

  const[people, setPeople] = useState([]);

    useEffect(() => {
      async function fetchPeople(){
        const personaje = await fetch ('https://swapi.dev/api/people/');
        const data = await personaje.json();
        setPeople(data.results);
      }

      fetchPeople();

    },[]);

  return (
    
    <div className='flex flex-wrap justify-center'>      {
        people.map(people =>(
          <div className='cont' key={setPeople}>
             <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img className='hover:backdrop-grayscale bg-white/30' src="https://elcomercio.pe/resizer/lB8qXJwbR4a6cOt17LYuz_U0E5o=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JN6CO66UKRHPFLQ6YY3ZNXSC44.jpg" alt="" />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">{people.name}</h2>
          <div className='max-h-20	overflow-y-auto'>
          <p className="mt-1 text-xl font-base tracking-normal text-white">
          <h3 className="text-base text-yellow-300">Hair_color: <span className="text-white pl-1">{people.hair_color}</span></h3>
            <h3 className="text-base text-yellow-300">Skin_color: <span className="text-white pl-1">{people.skin_color}</span></h3>
            <h3 className="text-base text-yellow-300">Eye_color: <span className="text-white pl-1">{people.eye_color}</span></h3>
            <h3 className="text-base text-yellow-300">Height: <span className="text-white pl-1">{people.height}</span></h3>
            <h3 className="text-base text-yellow-300">Mass: <span className="text-white pl-1">{people.mass}</span></h3>
            <h3 className="text-base text-yellow-300">Gender: <span className="text-white pl-1">{people.gender}</span></h3>
          </p>
          </div>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">
              {people.name}
            </h3>
            <i className="text-white">{people.birth_year}</i>
          </div>
        </div>
          </div>
        ))
      }
    </div>
  )
}