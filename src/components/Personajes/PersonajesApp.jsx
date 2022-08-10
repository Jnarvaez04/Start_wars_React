import React from "react";

export const PersonajesApp = () => {
  return (
    <>
    <div className="w-screen h-auto flex justify-center ">
        <h2 className="text-white uppercase text-6xl">PERSONAJES</h2>
    </div>
      <div className="flex justify-around items-center flex-wrap">
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img
              src=""
              alt=""
            />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">
            Personajes
          </h2>
          <p className="mt-1 text-xl font-base tracking-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            odio vero laborum rem natus incidunt voluptatibus dolorem dolor
            eaque laboriosam? Rerum est velit tempora pariatur sed, perferendis
            iste recusandae suscipit.
          </p>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">
              Jar Jar Binks
            </h3>
            <i className="text-white">08-marzo-2022</i>
          </div>
        </div>
      </div>
    </>
  );
};
