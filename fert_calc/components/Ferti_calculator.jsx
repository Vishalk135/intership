import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import crop_logo2 from '../public/crop_logo2.png';

const FertiCalculator = () => {
  const [date, setDate] = useState('2024-05-30');
  const [formattedDate, setFormattedDate] = useState('');
  const [hectare, setHectare] = useState(1.50);

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  useEffect(() => {
    updateDateDisplay(date);
  }, [date]);

  const updateDateDisplay = (date) => {
    const dateObj = new Date(date);
    const formattedDate = `${dateObj.getDate()} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
    setFormattedDate(formattedDate);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="bg-gray-300 -mt-2">
      <div className="flex mt-2 ml-4 space-x-4 p-1">
        <Image src={crop_logo2} className="size-5" />
        <h3 className="text-[16px] font-extrabold text-black">Fertilizer Calculator</h3>
      </div>
      <hr className="border border-gray-500" />
      <div className="flex space-x-5 items-center justify-center">
        <div>
          <h1 className="text-gray-500 text-sm mt-2 mb-1">Sowing Date</h1>
          <input 
            type="date" 
            value={date} 
            onChange={handleDateChange} 
            className="p-1 w-40 rounded-md text-white border border-gray-400" 
          />
          <p className="text-gray-800 -mt-7 text-sm ml-3">{formattedDate}</p>
        </div>
        <div>
          <h1 className="text-gray-500 text-sm mt-4 mb-1 ">Plot Size in</h1>
          <select className="text-gray-800 p-1 w-40 h-9 border border-gray-400 rounded-md">
            <option value="Hectare">Hectare</option>
            <option value="Hectare">Hectare</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 mb-2">
              <div className="flex bg-white p-4 w-[335px] rounded-md shadow-lg h-20 space-x-5  mt-2 items-center">
              <div>
                <h1 className="text-black">Area of Farm</h1>
              </div>
              <div>
                <button 
                  onClick={() => setHectare(hectare - 1.50)} 
                  className="px-3 py-1 ml-2 rounded-full text-white bg-green-600"
                >
                  -
                </button>
                <span className="px-2 py-1 ml-8 font-extrabold text-3xl">{hectare}</span>
                <h1 className="-mt-2 ml-[84px] -mb-12">Hectare</h1>
                <button 
                  onClick={() => setHectare(hectare + 1.50)} 
                  className="px-3 py-1 rounded-full -mt-40 ml-40 text-white bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-[335px] rounded-md shadow-lg bg-gray-400 border border-gray-500  mt-3 items-center justify-center">
          <h1 className="font-bold mt-2 ml-6 mb-2">NPK Values</h1>
          <div className="flex space-x-6 items-center justify-center">
            <div className="bg-orange-500 text-center w-20 font-bold p-1">N</div>
            <div className="bg-orange-500 text-center w-20 font-bold p-1">P</div>
            <div className="bg-orange-500 text-center w-20 font-bold p-1">K</div>
          </div>
          <div className="flex space-x-6 items-center justify-center mt-2 mb-2">
            <div className="bg-white shadow-2xl rounded-md text-center w-20 font-bold p-1">O</div>
            <div className="bg-white shadow-2xl rounded-md text-center w-20 font-bold p-1">O</div>
            <div className="bg-white shadow-2xl rounded-md text-center w-20 font-bold p-1">O</div>
          </div>
        </div>
      </div>

      <div className="flex space-x-3 mt-4 justify-end items-end mr-5 ">
        <button className="text-white bg-gray-600 text-center w-32 h-10 rounded-md mb-8">Reset</button>
        <button className="text-white bg-green-700 text-center w-32 h-10 rounded-md mb-8">Calculate</button>
      </div>
</div>

  );
};

export default FertiCalculator;
