import React from 'react'
import { TiSocialTwitter, TiSocialFacebook } from "react-icons/ti";
import { SiDiscord } from "react-icons/si";

function SocialMedia() {
  return (
    <>
    <div className='flex my-5 mx-auto justify-center gap-10 md:gap-32 text-lime-900 font-medium text-lg'>
        <div className='flex gap-2 items-center'><TiSocialFacebook/><span>Facebook</span></div>
        <div className='flex gap-2 items-center'><TiSocialTwitter/><span>Twitter</span></div>
        <div className='flex gap-2 items-center'><SiDiscord/><span>Discord</span></div>
    </div>
    </>
  )
}

export default SocialMedia