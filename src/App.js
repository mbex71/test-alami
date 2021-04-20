import Navbar from 'Components/Navbar'
import Food from 'assets/images/food.jpg'
import { ThumbUpIcon, ArchiveIcon, PencilAltIcon, OfficeBuildingIcon } from '@heroicons/react/outline'
import 'App.css';

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ backgroundImage:`url(${Food})`, minHeight:`90vh` }}
        className="flex flex-col justify-end"
      >
        
        <div className="box">

        </div>
        
      </div>

      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-4xl font-hand">Catering services in New York</h1>
        <h1 className="text-blue-700 text-5xl font-bold">
          We specialize in corporate and private events
        </h1>
        <p className=" w-full md:w-1/2 text-center text-gray-500 mt-4">
          With 20 years of experience, we promise you the freshest, local ingredients, hand-crafted cooking sprinkled with our unique whimsical elegance and exceptional service.
        </p>
      </div>

      {/* Portofolio */}
      
      <div className="grid grid-cols-4 gap-0">

        <div className="col-span-4 md:col-span-1 h-56 md:h-auto flex justify-center items-center bg-gray-600">
          <h1 className="text-white text-4xl italic">My Portofolio</h1>
        </div>

        <div className="col-span-4 md:col-span-2 bg-gray-800">

          <div className="grid grid-cols-2 gap-4 px-12 py-12 md:py-0 md:pb-24">
            <div className="col-span-2 md:col-span-1 bg-gray-700 p-6">
              <ArchiveIcon className="h-20 w-20 text-red-200"/>
              <h1 className="text-red-400 text-2xl font-bold mt-8">Design</h1>
              <p className="text-gray-500 text-sm mt-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 bg-gray-700 p-6">
              <OfficeBuildingIcon className="h-20 w-20 text-red-200"/>
              <h1 className="text-red-400 text-2xl font-bold mt-8">Develop</h1>
              <p className="text-gray-500 text-sm mt-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 bg-gray-700 p-6">
              <PencilAltIcon className="h-20 w-20 text-red-200"/>
              <h1 className="text-red-400 text-2xl font-bold mt-8">Write</h1>
              <p className="text-gray-500 text-sm mt-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 bg-gray-700 p-6">
              <ThumbUpIcon className="h-20 w-20 text-red-200"/>
              <h1 className="text-red-400 text-2xl font-bold mt-8">Promote</h1>
              <p className="text-gray-500 text-sm mt-4">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

        </div>

        <div className="col-span-4 md:col-span-1 p-6 bg-gray-800">
          <h1 className="text-red-400 font-bold text-2xl">Services</h1>
          <p className="mb-4 mt-8 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p className="text-sm mb-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-row mt-12">
            <button className="text-white px-4 py-2 border border-red-400 rounded-3xl text-xs mr-6">Download CV</button>
            <button className="text-white px-4 py-2 border border-red-400 rounded-3xl text-xs">Check My Portofolio</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
