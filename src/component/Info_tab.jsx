import "./css/Info_tab.css"
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Info_tab=()=>{
  useEffect(()=>{
    Aos.init({duration:2500});
   },[]);
    return (
      <div className="container-fluid " id="info" data-aos="fade-up">
      <h5 style={{"color":"blue"}}  >PRINCIPAUX TRAFICS STRATÉGIQUES AYANT TRANSITÉ PAR LES PORTS GÉRÉS PAR L'ANP EN 2020</h5>
     
        <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">ENGRAIS</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">12,7</span>
            
          </div>
          <span className="featuredSub">MT*</span>
        </div>
        
        <div className="featuredItem">
          <span className="featuredTitle">CHARBON</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">10,4</span>
            
          </div>
          <span className="featuredSub">MT*</span>
        </div><div className="featuredItem">
          <span className="featuredTitle">CONTENEURS</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">1,2</span>
            
          </div>
          <span className="featuredSub">Millions EVP**</span>
        </div><div className="featuredItem">
          <span className="featuredTitle">TIR</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">19 087</span>
            
          </div>
          <span className="featuredSub">Unités</span>
        </div><div className="featuredItem">
          <span className="featuredTitle">CÉRÉALES</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">9</span>
            
          </div>
          <span className="featuredSub">MT*</span>
        </div><div className="featuredItem">
          <span className="featuredTitle">PASSAGERS</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">0,3</span>
            
          </div>
          <span className="featuredSub">Millions</span>
        </div>
      </div>

      </div>

    )
}
export default Info_tab;