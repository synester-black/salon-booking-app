import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import Category from "./_components/Category";
import CategorySearch from "./_components/CategorySearch";


export default function Home() {
  return (
      <div>

        {/*Hero Section*/}
        <Hero/>
        <CategorySearch/>
        <Category/>
      
        

      </div>


  );
}
