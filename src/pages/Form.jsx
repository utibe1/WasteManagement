import React from 'react';
import '../App.css'

const Form = () => {
  return(
      <form action="#">
        <h2 className='text-6xl text-center font-bold mb-8'>Keep <span className="text-[#FFB967]">Eket</span> <span className="text-[#21752C]"> Clean</span></h2>
        <div className='flex items-center justify-center'>
          <div className='mx-20 my-4'>
            <label htmlFor="text" className='block font-bold text-2xl mb-5'>Name:</label>
            <input type="text" name="" className="shadow p-2 px-4 outline-none w-72" />
          </div>
          <div className='mx-20 my-4'>
            <label htmlFor="text" className='block font-bold text-2xl mb-5'>Email Address:</label>
            <input type="text" name=""  className="shadow p-2 px-4 outline-none w-72" />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='mx-20 my-4'>
            <label htmlFor="text" className='block font-bold text-2xl mb-5'>Phone Number:</label>
            <input type="text" name=""  className="shadow p-2 px-4 outline-none w-72" />
          </div>
          <div className='mx-20 my-4'>
            <label htmlFor="text" className='block font-bold text-2xl mb-5'>Home Address:</label>
            <input type="text" name=""  className="shadow p-2 px-4 outline-none w-72" />
          </div>
        </div>
        <h1 className='text-center font-bold text-2xl my-4'>Date Of Waste  Disposal  and  preffered start date:</h1>
        <div className='flex items-center justify-center'>
          <label for="appt" className='font-bold text-xl'>Select a date:</label>
          <input type="date" className='px-3 w-72 h-10 rounded mx-5'/>
          <label for="appt" className='font-bold text-xl'>Select a time:</label>
          <input type="time" className='px-3 w-72 h-10 rounded mx-5' name="appt"></input>
        </div>
        <div className="flex mt-10">
        <input
          class="relative m-0 block w-32 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          type="file"
          id="formFile" 
        />
        <div className='bock'>
          <label for="quantity">Waste Bag Quality:</label>
          <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
        </div>
        <div className='block'>
          <label for="quantity">Amount:npm</label>
          <input type="number" id="quantity" name="quantity" min="100" max="500"></input>
        </div>
        </div>
        <div className="flex items-center justify-center my-14">
         <button className="bg-[#21752C] font-normal p-3 rounded-lg text-white text-lg inline-flex items-center mb-5">
         Request Pickup
        </button>
        </div>
      </form>

  )
}

export default Form 