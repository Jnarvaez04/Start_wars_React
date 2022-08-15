import React, { useEffect, useState } from "react";
import { UsePerson } from "../../Hooks/UsePerson";

export const PersonajesApp = () => {

  // const { getallPerson } = UsePerson();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
    .then((res) => res.json())
    .then((data) =>{

      const userData = {
        name: data.results[0].name,
        genero: data.results[0].gender,
        skin: data.results[0].skin_color,
        ojos: data.results[0].eye_color,
        cumple:data.results[0].birth_year,
      };

      setPerson(userData);
    });
  }, []);

  return (


    <>
    <div className="w-screen h-auto flex justify-center ">
        <h2 className="text-white uppercase text-6xl">PERSONAJES</h2>
    </div>
      {person ? (<div className="flex justify-around items-center flex-wrap">
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img
              src={person.picture}
              alt=""
            />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">
            {person.name}
          </h2>
          <p className="mt-1 text-xl font-base tracking-normal text-white">
            <h3 className="text-base text-yellow-300">Gender: <span className="text-white pl-1">{person.genero}</span></h3>
            <h3 className="text-base text-yellow-300">Skin_color: <span className="text-white pl-1">{person.skin}</span></h3>
            <h3 className="text-base text-yellow-300">Eye_color: <span className="text-white pl-1">{person.ojos}</span></h3>
          </p>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">
              {person.name}
            </h3>
            <i className="text-white">{person.cumple}</i>
          </div>
        </div>
      </div>) : null}
    </>
  );
};
