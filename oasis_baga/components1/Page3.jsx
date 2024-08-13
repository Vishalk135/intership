import React from 'react'
import beach from '../public/beach.svg'
import parking from '../public/parking.svg'
import Image from 'next/image'

const Page3 = () => {
  return (
    <div className="flex justify-between items-center mt-10 ">
        <div>
            <div className="flex justify-between items-center space-x-[400px]">
                <div>
                    <h3 className="text-3xl font-bold ml-24 ">2 BHK Apartment</h3>
                    <div className="flex space-x-28 ml-24">
                        <p className="mt-2 font-semibold ml-1">2 bedroom</p>
                        <p className="mt-2 font-semibold">2 bath</p>
                    </div>

                </div>
                <div>
                    <h3 className="text-3xl font-bold -mt-5 ">100 Sq.m/1200 Sq.ft</h3>
                    

                </div>


            </div>
            <hr className="border  mt-5 ml-24" />
            <div className="mt-8 flex space-x-48 ml-24">
                <h3 className="text-3xl font-bold ">what this place offers</h3>
                <div className="mt-16">
                    <div>

                    <p className="text-sm text-gray-600 -ml-[540px] mb-5 flex text-center"><Image
                            src={beach}
                            className="w-10 h-8 items-center -mt-2 mr-2 ml-9"
                            />
                            3kms from Beach</p>
                    </div>
                    <div>
                    <p className="text-sm text-gray-600 -ml-[540px] mb-5 flex"><Image
                            src={parking}
                            className="w-10 h-8 items-center -mt-2 mr-2 ml-9"
                            />2 Cars parking on premises</p>
                    <p className="text-sm text-gray-600 -ml-[498px] mb-3 mt-4 underline cursor-pointer">To know more contact us.</p>
                    
                    </div>
        
                    
                </div>
                <div className="mt-16 -ml-4">
                    <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
</svg>

                       <p className="text-sm text-gray-600 mb-5 ml-2">TV</p>
                    </div>
                    <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
</svg>

                       <p className="text-sm text-gray-600 mb-5 ml-2">WiFi(Opt)</p>
                    </div>

                </div>
                

            </div>

            <hr className="border border-gray-300 mt-3 ml-24" />
        </div>
        <div className="mr-56  shadow-black bg-white">
            <div className="border border-gray-400 shadow-gray-700 w-96 pl-4 pt-6 pr-4 rounded-xl">
                <h3 className="text-3xl font-bold">INR: 1,23,00,000</h3>
                <button className="bg-green-500 text-white text-center text-sm border border-green-700 mt-4 w-[350px] h-12 rounded-lg">
                    Book to Visit
                </button>
                <div className="flex justify-between items-center mt-8">
                    <div>
                        <p className="text-sm font-semibold text-gray-500">Apartment</p>
                    </div>
                    <div>
                    <p className="text-sm font-semibold text-gray-500">INR 1,00,000</p>
                    </div>
                </div>
                <hr className="border border-gray-300 mt-40" />
                <div className="flex justify-between items-center mt-4 mb-4">
                    
                    <div>
                        <p className="text-sm font-bold text-black">Total after taxes</p>
                    </div>
                    <div>
                    <p className="text-sm font-bold text-black">INR: 1,23,000</p>
                    </div>
                </div>
                


            </div>

        </div>
    </div>
  )
}

export default Page3