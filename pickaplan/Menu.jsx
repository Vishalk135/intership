import React, { useState } from 'react';
import Image from 'next/image';
import images from '../public/images.jpeg'

const Menu = () => {
    // Initialize the state as an object with keys for each checkbox
    const [checkedItems, setCheckedItems] = useState({
        fiveDayFix: false,
        fortnightFrenzy: false,
        totalRuckus: false,
    });

    // Handler to toggle the state of a specific checkbox
    const handleCheckboxChange = (item) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [item]: !prevState[item],
        }));
    };

    return (
        <div>
            <div>
                <Image
                src={images}
                className="w-full h-10 shadow-lg"
                />


            </div>
            <div>
                <nav className="flex justify-center items-center space-x-20 mt-4 mb-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </div>
                    <div className="font-bold text-black text-xl">Pick and Plan</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                    </div>
                </nav>
                <p className="text-gray-500 text-[12px] ml-7">Meals are delivered from Mon-Fri between 10am - 12pm</p>

                {/* Five Day Fix */}
                <div className="shadow-green-300 shadow-lg items-center justify-center w-[330px] m-auto mt-4 rounded-lg relative">
                    <div
                        onClick={() => handleCheckboxChange('fiveDayFix')}
                        className={`absolute w-6 h-6 right-0 top-0 rounded-tr-lg cursor-pointer bg-gray-300 ${checkedItems.fiveDayFix ? 'bg-green-400 border-green-400' : 'bg-white border-gray-300'}`}
                    >
                        {checkedItems.fiveDayFix && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <div className="mt-2">
                            <p className={`text-green-600 ml-4 ${checkedItems.fiveDayFix ? 'font-bold' : ''}`}>FIVE DAY FIX</p>
                        </div>
                        <div className="flex space-x-1 mt-4 mr-8 ">
                            <del className={` text-gray-500 text-sm mt-2 ${checkedItems.fiveDayFix ? 'text-green-400' : ''}`}>₹450</del>
                            <p className="font-bold text-xl">₹ 325<span className="text-sm font-normal">/meal</span></p>
                        </div>
                    </div>
                    <div className="flex justify-between ml-4 mt-2 mb-4">
                        <div>
                            <p>5 Meals</p>
                            <p className="text-[12px]">5 meals for 5 days </p>
                        </div>
                        <div>
                            <p className="text-[12px] ml-5">Total</p>
                            <p className="text-[12px] mr-7 font-bold">₹ 1625/-</p>
                        </div>
                    </div>
                    <div className="items-center justify-center flex">
                        <button type='submit' className={`rounded-md hover:bg-green-400 border border-green-400 hover:text-white text-sm text-center w-[270px] h-6 mb-2 ${checkedItems.fiveDayFix ? 'bg-green-400 text-white' : 'text-green-400'}`}>Selected</button>
                    </div>
                </div>

                {/* Fortnight Frenzy */}
                <div className="shadow-green-300 shadow-lg items-center justify-center w-[330px] m-auto mt-4 rounded-lg relative">
                    <div
                        onClick={() => handleCheckboxChange('fortnightFrenzy')}
                        className={`absolute w-6 h-6 right-0 top-0 rounded-tr-lg cursor-pointer bg-gray-300 ${checkedItems.fortnightFrenzy ? 'bg-green-400 border-green-400' : 'bg-white border-gray-300'}`}
                    >
                        {checkedItems.fortnightFrenzy && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <div className="mt-2">
                            <p className={`text-green-600 ml-4 ${checkedItems.fortnightFrenzy ? 'font-bold' : ''}`}>FORTNIGHT FRENZY</p>
                        </div>
                        <div className="flex space-x-1 mt-4 mr-8 ">
                            <del className={` text-gray-500 text-sm mt-2 ${checkedItems.fortnightFrenzy ? 'text-green-400' : ''}`}>₹450</del>
                            <p className="font-bold text-xl">₹ 275<span className="text-sm font-normal">/meal</span></p>
                        </div>
                    </div>
                    <div className="flex justify-between ml-4 mt-2 mb-4">
                        <div>
                            <p>10 Meals</p>
                            <p className="text-[12px]">5 meals each week for 2 weeks </p>
                        </div>
                        <div>
                            <p className="text-[12px] ml-5">Total</p>
                            <p className="text-[12px] mr-7 font-bold">₹ 2750/-</p>
                        </div>
                    </div>
                    <div className="items-center justify-center flex">
                        <button type='submit' className={`rounded-md hover:bg-green-400 border border-green-400 hover:text-white text-sm text-center w-[270px] h-6 mb-2 ${checkedItems.fortnightFrenzy ? 'bg-green-400 text-white' : 'text-green-400'}`}>Selected</button>
                    </div>
                </div>

                {/* Total Ruckus */}
                <div className="shadow-green-300 shadow-lg items-center justify-center w-[330px] m-auto mt-4 rounded-lg relative">
                    <div
                        onClick={() => handleCheckboxChange('totalRuckus')}
                        className={`absolute w-6 h-6 right-0 top-0 rounded-tr-lg cursor-pointer bg-gray-300 ${checkedItems.totalRuckus ? 'bg-green-400 border-green-400' : 'bg-white border-gray-300'}`}
                    >
                        {checkedItems.totalRuckus && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <div className="mt-2">
                            <p className={`text-green-600 ml-4 ${checkedItems.totalRuckus ? 'font-bold' : ''}`}>TOTAL RUCKUS</p>
                        </div>
                        <div className="flex space-x-1 mt-4 mr-8 ">
                            <del className={` text-gray-500 text-sm mt-2 ${checkedItems.totalRuckus ? 'text-green-400' : ''}`}>₹450</del>
                            <p className="font-bold text-xl">₹ 225<span className="text-sm font-normal">/meal</span></p>
                        </div>
                    </div>
                    <div className="flex justify-between ml-4 mt-2 mb-4">
                        <div>
                            <p>20 Meals</p>
                            <p className="text-[12px]">5 meals each week for 4 weeks </p>
                        </div>
                        <div>
                            <p className="text-[12px] ml-5">Total</p>
                            <p className="text-[12px] mr-7 font-bold">₹ 4500/-</p>
                        </div>
                    </div>
                    <div className="items-center justify-center flex">
                        <button type='submit' className={`rounded-md hover:bg-green-400 border border-green-400 hover:text-white text-sm text-center w-[270px] h-6 mb-2 ${checkedItems.totalRuckus ? 'bg-green-400 text-white' : 'text-green-400'}`}>Selected</button>
                    </div>
                </div>

                <div className="items-center justify-center flex">
                    <button type='submit' className={`rounded-md hover:bg-black border border-black hover:text-white text-sm text-center w-[330px] h-12 mt-14 ${Object.values(checkedItems).includes(true) ? 'bg-black text-white' : 'text-black'}`}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Menu;
