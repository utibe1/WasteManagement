import fullBlogImage from '../assets/img/fullBlogImage.png'
import fullBlogImage2 from '../assets/img/fullBlogimage2.png'

const Blog = () => {
  return (
    <div className="container mx-auto" >
      <h2 className="font-bold text-3xl text-center my-14">Sustainable Education: Navigating the <br /> World of Waste Management</h2>
      <img  className='w-full mx-4' src={fullBlogImage} alt="blog" />
      <h1 className='font-bold text-3xl my-8'>Introduction:</h1>
      <p className='text-2xl font-medium'>
        In today's rapidly changing world, the importance of waste management cannot be overstated. The impact of improper waste disposal is felt on a global scale, affecting the environment, human health, and even our economy. As responsible citizens of the planet, it is our duty to educate ourselves and others about the best practices for waste management. In this blog post, we will delve into the world of waste management, exploring its significance, challenges, and solutions.
      </p>
      <h1 className='font-bold text-3xl mt-20 mb-8'>
        The Significance of Waste Management:
      </h1>
      <p className='text-2xl font-medium'>
        Waste management is a critical component of environmental sustainability. When waste is not managed properly, it can lead to a range of problems, including pollution, habitat destruction, and the depletion of natural resources. Here are some key points to consider:
        <div className="flex">
        <span className='block mx-2'>1.</span><p> Environmental Impact: Poor waste management contributes to air and water pollution, soil contamination, and the release of greenhouse gases. These factors play a significant role in climate change and the loss of biodiversity.</p> 
        </div>
        <div className="flex">
        <span className='block mx-2'>2.</span><p className='inline'>Public Health: Inadequate waste management can lead to the spread of diseases, as well as exposure to harmful chemicals and toxins. This poses a direct threat to human health, particularly in communities where waste is mishandled.</p>
        </div>
        <div className="flex">
        <span className='block mx-2'>3.</span> <p>Resource Conservation: Proper waste management can reduce the strain on our natural resources.</p>
        </div>
      </p>
      <img className='w-full mx-4' src={fullBlogImage2} alt="" />
      <h1 className='font-bold text-3xl mt-32 mb-8'>
        Challenges in Waste Management:
      </h1>
      <p className='text-2xl font-medium mb-28 '>
        Waste management is a complex issue with several challenges. Understanding these challenges is essential for creating effective solutions:
        <div className="flex">
          <span className="mx-2">1.</span>
          <p>
            Waste Generation: The ever-increasing global population results in higher waste generation. We must find ways to manage this growing volume of waste efficiently.
          </p>
        </div>
        <div className="flex">
          <span className="mx-2">2.</span>
          <p>
            Lack of Awareness: Many people are unaware of the environmental consequences of improper waste disposal. Raising awareness is crucial to changing behaviors.
          </p>
        </div>
        <div className="flex">
          <span className="mx-2">3.</span>
          <p>
            Inadequate Infrastructure: Some regions lack the infrastructure for proper waste collection and disposal. This leads to illegal dumping and unregulated waste sites.
          </p>
        </div>
        <div className="flex">
          <span className="mx-2">4.</span>
          <p>
            Recycling and Resource Recovery: Effective recycling programs are not available everywhere, and not all materials are easily recyclable. This hinders resource recovery efforts.
          </p>
        </div>
      </p>
    </div>
  )
}


export default Blog