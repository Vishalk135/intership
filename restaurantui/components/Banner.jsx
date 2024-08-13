import React from 'react'
import kiwi from '../public/kiwi.png'
import leaf from '../public/leaf.png'
import apple from '../public/apple.png'
import lemon from '../public/lemon.png'
import tomato from '../public/tomato.png'
import PrimaryButton from './PrimaryButton'
import Image from 'next/image'


const Banner = () => {
  return (
    <>
        <div className="container py-14 relative" >
            <div className="relative">
                <h1 data-aos="fade-up" data-aos-delay="300" className="py-8 tracking-wider text-2xl font-semibold text-dark text-center ">Taste the Healthy Difference</h1>
                <div className="space-y-10">
                    <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div>
                            <p>
                                We all know that <span className="text-primary">time </span> 
                                is the greatest value in the modern world. Our healthy meal plan 
                                delivery service Good Food in Miami is the answer for those who
                                wants to eat healthly, saving time for buying food and preparing 
                                delicious, healthy meals.
                            </p>
                        </div>
                        <div>

                        </div>

                    </div>
                    
                    <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div>

                        </div>
                        <div>
                            <p>
                                We all know that <span className="text-primary">time </span> 
                                is the greatest value in the modern world. Our healthy meal plan 
                                delivery service Good Food in Miami is the answer for those who
                                wants to eat healthly, saving time for buying food and preparing 
                                delicious, healthy meals.
                            </p>
                        </div>
                        

                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center mt-10 sm:mt-14">
                    <PrimaryButton />
                </div>
                
            </div>
            <div data-aos="fade-right" className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                <Image data-aos="fade-right"
                    src={leaf}
                    alt='leaf'
                    className="max-w-[160px]" 
                    
                />

            </div>
            <div data-aos="fade-right" className="absolute -left-16 -bottom-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                <Image
                    src={tomato}
                    alt='tomato'
                    className="max-w-[280px]" 
                    
                />
            </div>
            <div data-aos="fade-left" className="absolute top-10 -right-16 sm:bottom-0 sm:right-20 opacity-50 sm:opacity-100">
                <Image
                    src={lemon}
                    alt='lemon'
                    className="max-w-[200px]" 
                    
                />
            </div>
            <div data-aos="fade-left" className="absolute  sm:block bottom-0 right-0 ">
                <Image
                    src={apple}
                    alt='apple'
                    className="max-w-[200px]"   
                />
            </div>
            <div data-aos="fade" className="absolute top-1/2 -translate-x-1 translate-y-1 left-1/3 opacity-50 sm:opacity-100">
                <Image
                    src={kiwi}
                    alt='kiwi'
                    className="max-w-[180px]"   
                />
            </div>

            

        </div>


    </>
  )
}

export default Banner