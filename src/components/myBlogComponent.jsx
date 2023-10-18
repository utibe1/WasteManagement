import BlogImage from '../assets/img/BlogImage.png'
import Arrow from '../assets/img/Arrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const MyBlogComponent = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center font-bold text-4xl mt-20 mb-10'>Blog</h1>
      <div className='flex justify-around '>
        <div className="w-[532px] h-[550px] pt-8 p-6 rounded-lg multi-shadow border [border-#FFB967]">
         <img src={BlogImage} alt="Blog-img" className='w-full'/>
         <h1 className='text-3xl my-3 font-bold'>Educate Blog</h1>
          <p className='text-xl'>
            Together, we are embarking on a journey to transform Eket's waste management landscape, and it starts with the mantra, "Let's Make Eket Clean.
          </p>
          <div className="flex items-center">
            <button className='text-[#21752C] mr-4 text-xl'>Read more</button>
            <FontAwesomeIcon className='text-4xl' icon={faArrowRightLong}></FontAwesomeIcon>
          </div>
          {/* <img src={Arrow} alt="Arrow" className='inline text'/> */}
        </div>
        <div class="w-[532px] h-[550px] pt-8 p-6 rounded-lg multi-shadow border [border-#FFB967]">
         <img src={BlogImage} alt="Blog-img" className='full'/>
         <h1 className='text-3xl my-3 font-bold'>Educate Blog</h1>
          <p className='text-xl'>
            Together, we are embarking on a journey to transform Eket's waste management landscape, and it starts with the mantra, "Let's Make Eket Clean.
          </p>
          <button className='text-[#21752C] mr-4 text-xl'>Read more</button>
          <img src={Arrow} alt="Arrow" className='inline'/>
        </div>
      </div>
    </div>
  )
}

export default MyBlogComponent