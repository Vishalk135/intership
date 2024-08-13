import React from 'react'
import Image from 'next/image'
import polygon from '../public/polygon.png'
import vectorwave from '../public/vector-wave.png'
import { FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative py-14">
      <Image
        src={polygon}
        alt="Polygon pattern"
        className="w-full h-auto -mt-7 absolute inset-0 object-cover"
      />
      <div className="container min-h-[500px] relative z-10 px-4">
        <h1 data-aos="fade-up" className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
          About Us
        </h1>
        <div data-aos="fade-up" data-aos-delay="300" className="bg-white/80 p-10 my-10 rounded-lg shadow-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ducimus minus est excepturi consectetur labore dignissimos ipsum expedita perferendis ab, nam quasi, id provident tempore, quaerat non voluptas consequuntur assumenda!
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ducimus minus est excepturi consectetur labore dignissimos ipsum expedita perferendis ab, nam quasi, id provident tempore, quaerat non voluptas consequuntur assumenda!
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ducimus minus est excepturi consectetur labore dignissimos ipsum expedita perferendis ab, nam quasi, id provident tempore, quaerat non voluptas consequuntur assumenda!
          </p>
          <div className="pt-10 flex justify-center">
            <button
              className="flex items-center gap-2 bg-primary text-xl h-10 text-white px-5 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
              aria-label="Go to My Account"
            >
              <FaUser />
              My Account
            </button>
          </div>
        </div>
        <div className="relative -top-[585px] w-[120%] -left-14">
  <Image
    src={vectorwave}
    alt="Vector wave pattern"
    className="absolute top-0 right-0 -mt-12 w-[150%]"
  />
</div>

        </div>
      </div>
    
  )
}

export default About
