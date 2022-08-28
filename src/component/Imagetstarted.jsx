import  './css/Header.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Imagetstarted=()=>{
  useEffect(()=>{
    Aos.init({duration:2000});
   },[]);
    return(
        <div id="hero" class="container-fluid" data-aos="fade" >
        <div class="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
          <h1 id="textt"> l’ANP en chiffres </h1>
         
    
          <a id="text" href="#info" class="btn-get-started scrollto">VOIR LES STATISTIQUES</a>
        </div>
    
    
      </div>
      


    )
}
export default Imagetstarted