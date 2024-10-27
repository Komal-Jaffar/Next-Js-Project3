import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Abayas from "./components/Abayas"
import Link from "next/link";
import Hijabs from "./components/Hijabs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main  className='bg-purple-900'>
           <Header />
           <Hero />
           <Hijabs />
           <Abayas />
           <Footer />
           
      </main>
      
    </div> 
  
  )};