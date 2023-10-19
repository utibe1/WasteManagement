import Services from './Services';
import MyBlogComponent from './myBlogComponent'
import '../pages/myComponent.css';
import AboutImage from '../assets/img/AboutImage.png';
import AboutImage1 from '../assets/img/AboutImage1.png';
import AboutImage2 from '../assets/img/AboutImage2.png';
import AboutImage3 from '../assets/img/AboutImage3.png';

const Home = () => {

  return (
    <div>
      <div className="Homecontainer h-screen flex flex-col justify-center items-center">
        <div className="enter">
          <div className="text-center">
            <h2 className=" font-extrabold text-6xl text-[#FFB967] mb-5">
              Let’s Make Eket Clean.
            </h2>
            <p className="text-lg font-medium text-[#fff] w-full text-center my-3">
              The very essence of Eket's charm and well-being depends on the
              cleanliness of its <br />
              streets, the purity of its waters, and the health of its ecosystems.
            </p>
            <button className="bg-[#21752C] font-normal p-3 rounded-lg text-white text-lg block mx-auto mt-5  ">
              Request Pickup
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-4xl mt-20 mb-10">About Us</h1>
        <div className="block lg:grid grid-cols-2 gap-4">
          <div className="mx-auto w-[500px]">
            <p className="text-lg font-normal mt-4">
              This code sets up a basic waste management website using Node.js
              and Express.js, serving static assets and rendering dynamic HTML
              pages with EJS templates. You can expand upon this foundation by
              adding more functionality, such as database integration, user
              registration, and interactive features using JavaScript and
              related libraries/frameworks. This code sets up a basic waste
              management website using Node.js and Express.js, serving static
              assets and rendering dynamic HTML pages with EJS templates.
            </p>
            <button className="bg-[#21752C] font-normal px-10 p-3 rounded-lg text-white text-lg mt-20">
              Learn More
            </button>
          </div>

          <div className="">
            <div className="flex">
              <img
                src={AboutImage}
                alt="AboutImage"
                className="w-80"
              />
              <img
                src={AboutImage1}
                alt="AboutImage"
                className="w-80"
              />
            </div>
            <div className="flex">
              <img
                src={AboutImage2}
                alt="AboutImage"
                className="w-80"
              />
              <img
                src={AboutImage3}
                alt="AboutImage"
                className="w-80"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-20 w-full text-[#21752C]" />
      {<Services />}
      <hr className="my-20 w-full text-[#21752C]" />
      <MyBlogComponent />
      <hr className="my-20 w-full text-[#21752C]" />
    </div>
  );
};

export default Home;
