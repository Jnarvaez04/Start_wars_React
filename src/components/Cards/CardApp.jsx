import React from "react";

export const CardApp = () => {
  return (
    <>
      <div className="w-screen flex flex-row justify-center">
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/4812/production/_110005481_baby-yoda.jpg" className="hover:brightness-200 "  alt="" />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">Baby Yoda</h2>
          <p className="mt-1 text-base font-base tracking-normal text-white">
          Es miembro de la misma especie que Yoda, un personaje popular de las películas de La guerra de las galaxias y de Yaddle, conocida de Yoda. 
          </p>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">
              Baby Yoda
            </h3>
            <i className="text-white">08-marzo-2022</i>
          </div>
        </div>

        {/* card 2 */}
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img src="
            https://es.rollingstone.com/wp-content/uploads/2021/11/20-personajes-emblematicos-de-Star-Wars6-1024x719.jpg
            " className="hover:brightness-200" alt="" />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">Ackbar</h2>
          <p className="mt-1 text-base font-base tracking-normal text-white">
           El almirante de flota Gial Ackbar es un personaje ficticio y probablemente sea mejor conocido por su línea de meme "¡Es una trampa!" de la franquicia Star Wars.
          </p>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">
              Ackbar
            </h3>
            <i className="text-white">08-marzo-2022</i>
          </div>
        </div>

        {/* Card 3 */}
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img src="https://www.republica.com/cine-publico/wp-content/uploads/sites/21/2017/12/jar_jar_binks.jpg" className="hover:brightness-200 " alt="" />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">Jar Jar Binks</h2>
          <p className="mt-1 text-base font-base tracking-normal text-white">
           Este personaje aparece en el primer episodio de la saga. En agosto de 2015, el creador de Star Wars; George Lucas, reveló que para crear a Jar Jar Binks se inspiró en Goofy, el torpe perro de Disney.
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
