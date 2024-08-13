import React from 'react';
import Image from 'next/image';
import tomato from '../public/tomato.png';
import spinach from '../public/spinach.png';
import broccoli from '../public/broccoli.png';
import brinjal from '../public/brinjal.png';

const Navbar = ({ progress }) => {
    // Function to create the dashed gradient based on progress
    const dashedGradient = () => {
        const segments = [];
        for (let i = 0; i < 10; i++) {
            const start = i * 36-220;
            const end = start + 36 - 3;
            segments.push(`green ${start}deg ${end}deg`);
            segments.push(`white ${end}deg ${start + 36}deg`);
            
        }
        return `conic-gradient(${segments.join(',')})`;
    };

    return (
        <div>
            <nav className="flex ml-4 mt-2 space-x-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 font-bold"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
                <h3 className="font-bold text-black text-xl">My crop</h3>
            </nav>

            <div className="bg-green-400 pb-4">
                <div className="bg-green-400 p-1 mt-3">
                    <div className="flex space-x-2 mt-4">
                        <div className="rounded-full flex items-center justify-center relative w-16 h-16 bg-gray-300">
                            <div
                                className="absolute inset-0 rounded-full "
                                style={{
                                    background: dashedGradient()
                                }}
                            />
                            <Image
                                src={tomato}
                                className="relative w-12 h-12 rounded-full"
                                alt="Tomato"
                            />
                        </div>
                        <div className="flex space-x-[2px] bg-green-400">
                            <div className="w-48 h-6 bg-green-400 border border-black hover:border-blue-600 hover:border-4">
                                <h3 className="font-bold -mt-[0.5px] ml-1">Tomato</h3>
                                <div>
                                    <p className="text-[11px] mt-1 text-black">40% Monitoring process completed</p>
                                    <p className="text-[12px] text-gray-600">Sowing Date: 30 May 2024</p>
                                </div>
                            </div>
                            <div>
                                <button className="text-white bg-red-700 w-20 text-sm h-6 rounded-md">Edit Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-green-400">
                    <div className="flex space-x-2 ml-2 mt-4">
                        <div className="flex space-x-2 w-[86px] shadow-xl rounded-md p-1 bg-white hover:bg-green-700 hover:cursor-pointer hover:text-white">
                            <Image
                                src={spinach}
                                className="size-6"
                                alt="Spinach"
                            />
                            <span className="text-[12px] mt-[0.5px]">Spinach</span>
                        </div>
                        <div className="flex space-x-2 w-[86px] shadow-xl rounded-md bg-green-700 text-white p-1">
                            <Image
                                src={tomato}
                                className="size-6"
                                alt="Tomato"
                            />
                            <span className="text-[12px] mt-[0.5px]">Tomato</span>
                        </div>
                        <div className="flex space-x-2 w-[86px] shadow-xl rounded-md p-1 bg-white hover:bg-green-700 hover:cursor-pointer hover:text-white">
                            <Image
                                src={broccoli}
                                className="size-6"
                                alt="Broccoli"
                            />
                            <span className="text-[12px] mt-[0.5px]">Broccoli</span>
                        </div>
                        <div className="flex space-x-2 w-[86px] shadow-xl rounded-md p-1 bg-white hover:bg-green-700 hover:cursor-pointer hover:text-white">
                            <Image
                                src={brinjal}
                                className="size-6"
                                alt="Brinjal"
                            />
                            <span className="text-[12px] mt-[0.5px]">Brinjal</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex font-bold text-black bg-green-600 space-x-10 p-1">
                <div>
                    <h1 className="ml-2">Fertilizer Calc</h1>
                    <hr className="border border-green-950 -mb-1 h-1 bg-green-950 rounded-xl ml-1 w-28" />
                </div>
                <h1 className="text-gray-600">Crop Care</h1>
                <h1 className="text-gray-600">Crop Care</h1>
            </div>
        </div>
    );
};

export default Navbar;
