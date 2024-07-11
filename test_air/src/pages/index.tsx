import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
	<div className="grid justify-items-center border " >
		<h1 className="w-min text-2xl" > Main </h1>	
		<button onClick={() => alert("hi")} 
		className="w-min h-min border rounded-md my-12 text-xl py-1 px-2 ">
		Click </button>
	</div>
  )
}
