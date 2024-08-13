import Image from "next/image";
import { Inter } from "next/font/google";
import Page1 from "@/components/drone_farm/Page1";
import Page2 from "@/components/drone_farm/Page2";
//import Page1 from "@/components/tractor/Page1";
//import Page2 from "@/components/tractor/Page2";
//import Myad from "@/components/tractor/Myad";


const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  return (
    //<div className="ml-8 mr-10 ">
      //<Page1 />
      //<Page2 />
      //<Page3 />

    //</div>
    /*<div className="">
      <Page1 />
      <Page2 />
      <Myad />
      <div className="w-full h-full bg-gray-400">

                </div>
      
    </div>*/
    <div>
      
    <div className=" mt-4 flex  items-center justify-center">
      <div className="">
        <Page1 />
      </div>
    </div>
    <Page2 />


    </div>
    
  );
}
