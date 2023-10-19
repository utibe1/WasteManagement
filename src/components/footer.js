import { Link } from 'react-router-dom'
import footerImage from '../assets/img/footerImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return(
    <div className="">
      <h1 className='text-5xl ms-16 text-[#FFB967] font-bold'>Ekid<span className='text-[#21752C] '>Waste</span></h1>
      <div className='flex justify-around mt-5'>
        <div>
          <img src={footerImage} alt="Eket-Logo" />
        </div>
        <div className=''>
          <Link className='block my-4'>Home</Link>
          <Link className='block my-4'>About</Link>
          <Link className='block my-4'>Service</Link>
          <Link className='block my-4'>Blog</Link>
        </div>
        <div>
          <span className='block my-4'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Address: 5 Eket -oron road,eket</span>
          <span className='block my-4' ><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Call Customer Care: 070-0000-0000</span>
          <span className='block my-4'>eketwastemanagement@gmail.com</span> 
        </div>
        <div>
          <h1 className='text-5xl ms-16 text-[#000] font-bold w-[416px]'>Keeping Eket <span className='text-[#21752C]'>Save</span> Depends On US And YOU</h1>
        </div>
      </div>
      <div className='container mx-auto'>
      <hr  className='mt-20 w-full text-[#21752C]'/>
        <div className='flex items-center justify-center mt-4'>
          <FontAwesomeIcon className='text-4xl mx-2 text-[#384FA6]' icon={faFacebook}></FontAwesomeIcon>
          <FontAwesomeIcon className='rounded-full text-xl mx-2 bg-[#60B9FE] text-[#fff] p-2' icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon className='rounded-full mx-2 bg-[#E14B91] text-[#fff] text-xl p-2 px-2.5' icon={faInstagram}></FontAwesomeIcon>
          <FontAwesomeIcon className='rounded-full p-2 text-xl mx-2 bg-[#FF2F3C] text-[#fff]' icon={faYoutube}></FontAwesomeIcon>          
        </div>
        <p className='flex items-center justify-center text-xl mt-2'>Copyright &copy; 2023</p>
      </div>
    </div>
  )
}

export default Footer