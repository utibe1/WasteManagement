import InnovationImage from '../assets/img/InnovationImage.png'

const InnovativeSolution = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='font-bold text-3xl text-center my-14'>Innovative Solution</h1>
      <div className="flex items-center justify-center mb-20">
        <img src={InnovationImage} alt="waste motor" />
      </div>
      <div className='text-xl font-semibold ms-8 w-[1100px]'>
        <p className='mb-8'>
          To address these challenges, innovative waste management solutions are being developed and implemented worldwide. Here are some of the most promising approaches:
        </p>

        <div className="flex">
          <span className="mx-2">1.</span>
          <p>
          Waste-to-Energy Technology: This technology converts non-recyclable waste into energy, reducing landfill usage and generating electricity.
          </p>
        </div>
        <div className="flex">
          <span className="mx-2">2.</span>
          <p>
            Circular Economy: The concept of a circular economy promotes reducing, reusing, and recycling materials to minimize waste and maximize resource efficiency.
          </p>
        </div>
        <div className="flex">
          <span className="mx-2">3.</span>
          <p>
            Smart Bins and Collection Systems: Using data and technology, smart waste collection systems optimize routes and schedules, reducing costs and environmental impact.
          </p>
        </div>
        <div className="flex">
          <span className="mx-2">4.</span>
          <p>
            Composting: Encouraging composting at home and on a larger scale can divert organic waste from landfills and create nutrient-rich soil amendments.
          </p>
        </div>
        <div className="flex">
          <span className="mx-2">5.</span>
          <p>
            Waste Education Programs: Education campaigns help raise awareness about waste management and promote responsible disposal and recycling.
          </p>
        </div>
      </div>
      <h2 className='font-bold text-3xl my-14 ms-8'>Conclusion:</h2>
      <p className='ms-8 mb-10 text-xl font-semibold w-[1000px]'>
        Waste management is an ever-evolving field that plays a crucial role in environmental sustainability and the well-being of communities. As responsible citizens, it's essential for us to be informed about the challenges and innovative solutions in waste management. By embracing sustainable practices and supporting local initiatives, we can all contribute to a cleaner, healthier, and more sustainable future.
      </p>
      <p className='ms-8 w-[986px] text-xl font-semibold mb-20'>
        Remember, the journey towards effective waste management starts with individual actions, whether it's recycling at home, reducing waste generation, or supporting initiatives that promote a circular economy. Together, we can make a significant impact on the way we manage waste and create a better world for future generations.
      </p>
    </div>
  )
}

export default InnovativeSolution