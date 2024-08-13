import React from 'react';
import Image from 'next/image';
import images from '../public/images.jpg';

const meal = [
  {
    calories: '494.42',
    carbon: '23.43',
    protein: '40.6',
    fat: '27.7',
    fibre: '6.2',
    sugar: '6'
  }
];

const ManageCard = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h3 className="font-bold mt-6 ml-4 text-xl lg:text-2xl">Swap or Skip Meal:</h3>
      <div className="flex mt-10 overflow-x-scroll lg:overflow-x-auto overflow-y-hidden scroll-smooth space-x-4 scrollbar-hide">
        {/* Card Wrapper */}
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="relative flex-shrink-0 w-64 mx-4 lg:w-80 xl:w-96">
            {/* Date Card */}
            <div className="absolute top-1 left-0 right-0 flex justify-center">
              <div className="bg-gradient-to-b from-green-600 to-green-950 w-11 h-fit p-2 pl-2 pr-2  rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl text-center">
                <p className="text-[12px] lg:text-xs text-white">
                  MON <span className="text-2xl lg:text-3xl text-white font-bold">23</span> <br />
                  JUL
                </p>
              </div>
            </div>
            {/* Meal Card */}
            <div className="relative bg-white mt-36 h-fit p-4 rounded-xl text-center shadow-green-glow">
              <div className="relative">
                <Image
                  src={images}
                  className="h-24 w-24 rounded-full mx-auto -mt-16"
                  alt="Party"
                />
              </div>
              <h3 className="text-sm lg:text-base font-bold mt-2">The Couscous Nest</h3>
              <p className="mt-2 text-[12px] lg:text-sm">
                Delicious and juicy chicken marinated in Middle-Eastern spices along with basil grilled vegetables couscous. Served with our signature lemon dressing.
              </p>
              <table className="min-w-full border-collapse mt-4 text-[12px] lg:text-sm">
                <tbody>
                  <tr>
                    <td className="py-1 px-2 border border-gray-500 border-t-0 border-l-0">
                      <span className="font-bold text-sm">Calories</span><br />
                      <span>{meal[0].calories}</span>
                    </td>
                    <td className="py-1 px-2 border border-gray-500 border-t-0">
                      <span className="font-bold text-sm">Carbs</span><br />
                      <span>{meal[0].carbon}</span>
                    </td>
                    <td className="py-1 px-2 border border-gray-500 border-t-0 border-r-0">
                      <span className="font-bold text-sm">Protein</span><br />
                      <span>{meal[0].protein}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 border border-gray-500 border-l-0 border-b-0">
                      <span className="font-bold text-sm">Fat</span><br />
                      <span>{meal[0].fat}</span>
                    </td>
                    <td className="py-1 px-2 border border-gray-500 border-b-0">
                      <span className="font-bold text-sm">Fibre</span><br />
                      <span>{meal[0].fibre}</span>
                    </td>
                    <td className="py-1 px-2 border border-gray-500 border-b-0 border-r-0">
                      <span className="font-bold text-sm">Sugar</span><br />
                      <span>{meal[0].sugar}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-green-500 mt-4 w-64 -ml-4 lg:w-[384px] -ml-[16px] h-12 text-white p-4 rounded-2xl flex space-x-10 justify-center items-center">
                <button className="cursor-pointer hover:bg-green-700 px-4 py-1 rounded">Swap</button>
                <p className="text-white mx-2">|</p>
                <button className="cursor-pointer hover:bg-green-700 px-4 py-1 rounded">Skip</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCard;
