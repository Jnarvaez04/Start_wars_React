import React from 'react'

export const SliderApp = () => {
  return (
    <>
    <div className="w-95% m-auto overflow-hidden">
          <ul className="slider p-0 flex w-screen">
            <li className="list-none w-100%">
              <img
                className="w-screen h-screen"
                src="https://i.pinimg.com/originals/f8/8b/41/f88b412bb4ed2df2b8e94354861e2156.jpg"
              />
            </li>
            <li className="w-screen list-none">
              <img
                className="w-screen h-screen"
                src="https://www.elcorteingles.es/entradas/blog/wp-content/uploads/2022/04/starwars.jpg"
              />
            </li>
            <li className="w-screen list-none">
              <img
                className="w-screen h-screen"
                src="https://p4.wallpaperbetter.com/wallpaper/968/579/707/5bd35e53d2ca6-wallpaper-preview.jpg"
              />
            </li>
            <li className="w-screen list-none">
              <img
                className="w-screen h-screen"
                src="https://www.xtrafondos.com/wallpapers/baby-yoda-en-el-mandaloriano-4404.jpg"
              />
            </li>
          </ul>
        </div>

    </>
  )
}
