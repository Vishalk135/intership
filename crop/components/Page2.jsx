import React from 'react'
import Image from 'next/image'
import weather_icon from '../../public/weather_icon.png'
import crop_icon from '../../public/crop_icon.jpg'
import marketprice_icon from '../../public/marketprice_icon.png'
import calc_icon from '../../public/calc_icon.png'

const Page2 = () => {
  return (
    <div className="mt-32 p-5">
        <div className="flex justify-between items-center rounded-lg border border-gray-500 h-8 w-auto ml-8 mr-8 -mt-28 ">
            <div className="flex">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ml-2 mr-2 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>
                <div className="text-gray-500 text-[12px]">
                    Search for products and services
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mr-2 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>


            </div>
        </div>
        <div className=" ml-8">
            <h3 className="text-xl font-bold mt-2">Add my crops</h3>
            <div className="flex mt-2">
                <div className="w-8 h-8 border-green-600 rounded-md items-center justify-center text-center ml-1 mt-1 border-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 m-auto text-green-600 font-bold">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </div>
                <div className="ml-4 ">
                    <h3 className="font-bold text-[15px] text-green-600">Hello Farmer!</h3>
                    <p className="text-[12px] -mt-1">For crop advisory add your crops here! </p>
                </div>
            </div>

        </div>

        <div>
            <h3 className="text-xl font-bold ml-8 mt-4 mb-4">Tools</h3>
            <div className="flex space-x-4 ml-8">
                <div className="w-16 h-16 border-2 border-green-600 rounded-lg">
                    <Image
                        src={weather_icon}
                        alt='weather_icon'
                        className="w-10 h-12 m-auto mt-1"
                    />
                    <p className="text-xs font-bold mt-4 text-center">Weather Forecast</p>
                </div>
                <div className="w-16 h-16 border-2 border-green-600 rounded-lg shadow-green-600">
                <Image
                        src={crop_icon}
                        alt='crop_icon'
                        className="w-10 h-12 m-auto mt-1"
                    />
                    <p className="text-xs font-bold mt-4 text-center">Crop Care</p>
                </div>
                <div className="w-16 h-16 border-2 rounded-lg border-green-600 shadow-green-600">
                <Image
                        src={marketprice_icon}
                        alt='marketprice_icon'
                        className="w-10 h-12 m-auto mt-1"
                    />
                    <p className="text-xs font-bold mt-4 text-center">Market Price</p>
                </div>
                <div className="w-16 h-16 border-2 rounded-lg border-green-600 shadow-green-600">
                <Image
                        src={calc_icon}
                        alt='calc_icon'
                        className="w-10 h-12 m-auto mt-1"
                    />
                    <p className="text-xs font-bold mt-4 text-center">Fertilizer Calculator</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page2