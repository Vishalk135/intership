import React from 'react'
import Image from 'next/image'
import img1 from '../public/img1.jpg'
import img2 from '../public/img2.jpg'
import img3 from '../public/img3.jpg'
import img4 from '../public/img4.jpg'
import img5 from '../public/img5.jpg'

const Page2 = () => {
  return (
    <div className="mt-9 " >
        <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 row-span-2">
                <Image
                    src={img1}
                    className="w-[1022px] h-[305px] ml-1 rounded-tl-xl rounded-bl-xl"
                />
            </div>
            <div className="">
                <Image
                        src={img2}
                        className="w-[400px] h-[145px] ml-4"
                    />

            </div>
            <div>
            <Image
              src={img3}
                className="w-[400px] h-[145px] rounded-tr-lg"
            />

            </div>
            <div>
            <Image
              src={img4}
                className="w-[400px] h-[145px] ml-4 mt-2"
            />

            </div>
            <div>
            <Image
              src={img5}
                className="w-[400px] h-[145px]  rounded-br-xl mt-2"
            />

            </div>

        </div>
         
    </div>
  )
}

export default Page2