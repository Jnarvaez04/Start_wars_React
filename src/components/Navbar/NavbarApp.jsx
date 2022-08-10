import React from 'react'
import { Link } from "react-router-dom"; 

export const NavbarApp = () => {
  return (
    <>
    <div className='w-full bg-black h-20 p-1 fixed flex flex-row justify-between items-center z-50'>
       <div className='w-auto pl-10'>
        <a href="/">
        <img className='w-24 h-16 ' src="https://yt3.ggpht.com/ytc/AMLnZu9hv_vCie23HTkPzwUgF7loqz1JaCCJYiz8VRtkTQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
        </a>
       </div>
        <div className='h-auto w-auto'>
            <Link className='p-5 pr-10 text-white uppercase font-semibold text-sm' to="/" href="">Home</Link>
            <Link className='p-5 pr-10 text-white uppercase font-semibold text-sm' to="personaje" href="">Personajes</Link>
            <Link className='p-5 pr-10 text-white uppercase font-semibold text-sm' to="planeta" href="">Planetas</Link>
        </div>
    </div>
    </>
  )
}
