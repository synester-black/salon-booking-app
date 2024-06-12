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
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/46171223.js"></script>
        <Category/>
        
        

      </div>


  );
}
