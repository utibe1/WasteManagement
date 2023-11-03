import DeleteIcon from '../assets/img/deleteIcon.png'
import '../App.css'

const Services = () => {
  return(
    <div className='container mx-auto'>
        <h1 className='text-center font-bold text-4xl mt-20 mb-10'>Services</h1>
          <div className='block lg:grid lg:grid-cols-3 gap-2 lg:ms-14 ms-1 items-center justify-between'>
            <div className='p-5 m-4 bg-white rounded-bl-[50px] rounded-tr-[50px] rounded-none custom-shadow w-80 border-2 border-[#FFB967] pb-10'>
              <div className='flex items-center mb-3 justify-between'>
                <h2 className='text-xl font-medium'>
                  Waste Collection
                </h2>
                <img src={DeleteIcon} alt='delele' className=''/>
              </div>
              <p className='text-sm'>
                Conduct user surveys to gather feedback and insights on how to improve your services and better meet user needs.  Provide information on how to safely dispose of waste during emergencies, such as natural
              </p>
            </div>
            <div className='p-5 m-4 rounded-bl-[50px] rounded-tr-[50px] rounded-none custom-shadow w-80 border-2 border-[#FFB967]'>
              <div className='flex items-center mb-3 justify-between '>
                <h2 className='text-xl font-medium'>
                  Waste Collection
                </h2>
                <img src={DeleteIcon} alt='delele' className=''/>
              </div>
              <p className='text-sm'>
                Conduct user surveys to gather feedback and insights on how to improve your services and better meet user needs.  Provide information on how to safely dispose of waste during emergencies, such as natural
              </p>
            </div>
            <div className='p-5 m-4 rounded-bl-[50px] rounded-tr-[50px] rounded-none custom-shadow w-80 border-2 border-[#FFB967]'>
              <div className='flex items-center mb-3 justify-between '>
                <h2 className='text-xl font-medium'>
                  Waste Collection
                </h2>
                <img src={DeleteIcon} alt='delele' className=''/>
              </div>
              <p className='text-sm'>
                Conduct user surveys to gather feedback and insights on how to improve your services and better meet user needs.  Provide information on how to safely dispose of waste during emergencies, such as natural
              </p>
            </div>
          </div>
        </div>
  )
}

export default Services