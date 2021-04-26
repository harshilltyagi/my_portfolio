import React , {useEffect , useState} from "react";
import sanityClient  from "../client.js";

export default  function Project() {
    
    const [ projectData , setProjectData ] = useState(null);

    useEffect(()=>{

      sanityClient.fetch(`*[_type == "project"]{

        title,
        date,
        place,
        description,
        projecttype,
        link,
        tags


      }`).then((data)=> setProjectData(data)).catch(console.error);

    },[]);
    
    return (


         <main className="bg-green-100 min-h-screen p-12">

         <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
          <h2 className="text-lg text-gray-600 flex  justify-center mb-12">Collection of my projects</h2>
          <section className="grid grid-cols-2 gap-8">

          <article className="relative rounded-lg shadow-xl bg-white p-16">
        
           <h3 className="text-gray-800 text-3xl font-bold  mb-2 hover:text-red-700">

           </h3>

           <div>

          <span>

          </span>

          <span>
              
          </span>

          <span>
              
         </span>
         <p>

         </p>

        <span>

        </span>

           </div>

          </article>

          </section>

         </section>


         </main>


    )
}