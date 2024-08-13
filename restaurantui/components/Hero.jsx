import React from 'react';
import Image from 'next/image';
import hero from '../public/hero.png';
import heroBg from '../public/heroBg.png';
import PrimaryButton from '../components/PrimaryButton';

const Hero = () => {
    return (
        <div className="relative z-[-1]">
            <Image
                src={heroBg}
                alt='heroBg'
                className="w-full h-full absolute"
                 
            />
            <div className="container py-16 sm:py-0">
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center min-h-[600px]">
                    <div className="space-y-7 text-dark order-2 sm:order-1">
                        <h1 data-aos="fade-up" className="text-5xl">Fresh & Healthy Meal Plan <span className="text-secondary font-cursive text-7xl">Delivery</span>  in Miami</h1>
                        <p data-aos="fade" data-aos-delay="300" className="lg:pr-64">Delicious Meals Delivered to your Door from $130 per week </p>
                        <div data-aos="fade" data-aos-delay="300">
                            <PrimaryButton />
                        </div>
                    </div>
                    <div data-aos="fade" data-aos-delay="500" className="order-1 sm:order-2 relative z-30">
                        <Image 
                            src={hero}
                            alt='hero'
                            width={600}
                            height={400}
                            className="w-full sm:scale-125 sm:translate-y-16"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
