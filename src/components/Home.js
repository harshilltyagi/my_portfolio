import React from "react";
import image from "../artmystic.jpg";


export default  function Home() {
    return (

     <main>

      <img src={image} alt="Artmystic" className="absolute  object-cover w-full h-full" />

      <section className="realtive flex justify-center min-h-screen pt-12 lg:pt-64 px-8">


      
      <h1 className="text-2xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Alhoa. I'm Harshill Tyagi </h1>
       
        
      </section>

    
     </main>

    )
}