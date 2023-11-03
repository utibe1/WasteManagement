import React from 'react';
import '../App.css';
import { useRef } from 'react';

const Form = () => {
  const imageRef = useRef();

  const handleFileChange = (event) => {
    const image = imageRef.current;
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <form action="#">
      <h2 className="text-6xl text-center font-bold mb-8">
        Keep <span className="text-[#FFB967]">Eket</span>{' '}
        <span className="text-[#21752C]"> Clean</span>
      </h2>
      <div className="flex items-center justify-center">
        <div className="mx-20 my-4">
          <label htmlFor="text" className="block font-bold text-2xl mb-5">
            Name:
          </label>
          <input
            type="text"
            name=""
            className="shadow p-2 px-4 outline-none w-72"
          />
        </div>
        <div className="mx-20 my-4">
          <label htmlFor="text" className="block font-bold text-2xl mb-5">
            Email Address:
          </label>
          <input
            type="text"
            name=""
            className="shadow p-2 px-4 outline-none w-72"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-20 my-4">
          <label htmlFor="text" className="block font-bold text-2xl mb-5">
            Phone Number:
          </label>
          <input
            type="text"
            name=""
            className="shadow p-2 px-4 outline-none w-72"
          />
        </div>
        <div className="mx-20 my-4">
          <label htmlFor="text" className="block font-bold text-2xl mb-5">
            Home Address:
          </label>
          <input
            type="text"
            name=""
            className="shadow p-2 px-4 outline-none w-72"
          />
        </div>
      </div>
      <h1 className="text-center font-bold text-2xl my-4">
        Date Of Waste Disposal and preffered start date:
      </h1>
      <div className="flex items-center justify-center">
        <label for="appt" className="font-bold text-xl">
          Select a date:
        </label>
        <input type="date" className="px-3 w-72 h-10 rounded mx-5" />
        <label for="appt" className="font-bold text-xl">
          Select a time:
        </label>
        <input
          type="time"
          className="px-3 w-72 h-10 rounded mx-5"
          name="appt"
        ></input>
      </div>
      <div className="flex mt-10 items-center justify-center">
        <div className="p-4">
          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <img
            ref={imageRef}
            id="output"
            width="400"
            height="400"
            className="border border-dashed border-gray-300 rounded-lg cursor-pointer"
          />
          <label htmlFor="file" className="cursor-pointer">
            Upload Image
          </label>
        </div>
        <div className="bock">
          <label for="quantity">Waste Bag Quality:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          ></input>
        </div>
        <div className="block">
          <label for="quantity">Amount:npm</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="100"
            max="500"
          ></input>
        </div>
      </div>
      <div className="flex items-center justify-center my-14">
        <button className="bg-[#21752C] font-normal py-3 px-14 text-white text-2xl inline-flex items-center mb-5">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
