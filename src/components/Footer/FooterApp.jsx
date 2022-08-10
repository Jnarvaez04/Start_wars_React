import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const FooterApp = () => {
  return (
    <>
      <div className='footer w-screen h-full flex justify-center align-middle'>
      <div className='mt-5'>
        <h3 className='text-white text-center mb-22 mt-20 font-black'>FOLLOW STAR WARS:</h3>
        <div className='w-screen flex justify-center'>
            <div className='w-auto flex row '>
                <a href="" className="m-5"><FaGithub color='white' size={'25px'} margin='5px'/></a>
                <hr className="text-slate-100	flex column"/>
                <a href="" className="m-5"><FaFacebook color='white' size={'25px'}/></a>
                <a href="" className="m-5"><FaInstagramSquare color='white' size={'25px'}/></a>
                <a href="" className="m-5"><FaYoutube color='white' size={'25px'}/></a>
            </div>
        </div>

        <h6 className="text-sm text-white text-center mb-2 font-sans mb-5">TM & © Lucasfilm Ltd. All Rights Reserved </h6>

        <ul className='w-screen flex flex-row justify-center items-center mt-1 mb-10'>
          <li><a target="_blank" href="https://disneytermsofuse.com/" className='text-xs text-white font-light ml-6 border-r-2 pr-5'>Terms of Use</a></li>
          <li><a target="_blank" href="https://support.disney.com/hc/es-es" className='text-xs text-white font-light ml-6 border-r-2 pr-5'>Additional Content Information</a></li>
          <li><a target="_blank" href="http://disneyprivacycenter.com/" className='text-xs text-white font-light ml-6 border-r-2 pr-5'>Privacy Policy</a></li>
          <li><a target="_blank" href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/" className='text-xs text-white font-light ml-6 border-r-2 pr-5'>Children’s Online Privacy Policy</a></li>
          <li><a target="_blank" href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/" className='text-xs text-white font-light ml-6 border-r-2 pr-5'>Your California Privacy Rights</a></li>
          <li><a target="_blank" href="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store" className='text-xs text-white font-light ml-6 border-r-2 pr-5'>Star Wars at shopDisney</a></li>
          <li><a target="_blank" href="https://support.starwars.com/hc/es-es" className='text-xs text-white font-light ml-6 border-r-2 pr-5'>Star Wars Helpdesk</a></li>
          <li><a target="_blank" href="https://preferences-mgr.truste.com/?type=starwars&affiliateId=115" className='text-xs text-white font-light ml-6 border-r-2 pr-5'>Interest-Based Ads</a></li>
          <li><a target="_blank" href="https://privacyportal-de.onetrust.com/webform/64f077b5-2f93-429f-a005-c0206ec0738e/0a4f1f0b-7130-421f-971d-ef578c0bce6d" className='text-xs text-white font-light pl-5'>Do Not Sell My Personal Information</a></li>
        </ul>
      </div>
    </div>
    </>
  );
};
