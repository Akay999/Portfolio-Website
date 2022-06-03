import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { SiCodechef, SiCodeforces } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div >
          <a href="https://twitter.com/AKSHATS81946707" target="_blank" rel='noreferrer'>
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/profile.php?id=100025549337282" target="_blank" rel='noreferrer'>
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/itsakay0707/?hl=en" target="_blank" rel='noreferrer'>
            <BsInstagram />
          </a>
        </div>
        <div>
          <a href="https://www.codechef.com/users/akay199" target="_blank" rel='noreferrer'>
            <SiCodechef />
          </a>
        </div>
        <div>
          <a href="https://codeforces.com/profile/Akay199" target="_blank" rel='noreferrer'>
            <SiCodeforces />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia