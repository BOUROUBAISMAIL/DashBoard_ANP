import  './css/Header.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header=()=>{
  useEffect(()=>{
    Aos.init({duration:2500});
   },[]);
    return(
        <header class="" data-aos="fade">
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="col-md-2">
            <img    src="https://www.anp.org.ma/assets/media/images/logo.svg" alt="anp logo u must have conex"/>
            </div>
            <div className="col-md-8">
                
<h5 style={{"fontSize":"15px","margin":"9px"}}><svg style={{"margin-right":"5px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg>   300, lotissement Mandarona , Sidi Maârouf, 20270 Casablanca      <i style={{"margin-left":"14px","margin-right":"5px"}} class="fa fa-phone"></i>(+212) 520 121 314
</h5>
            </div>
            <div className="col-md-2">
            <div class="social">
                      <a href="https://www.linkedin.com/company/agence-nationale-des-ports-anp/"><i class="fa fa-linkedin"></i></a>
                      <a href="https://web.facebook.com/ANPMaroc?_rdc=1&_rdr"><i class="fa fa-facebook"></i></a>
                      <a href="https://twitter.com/portnetsa"><i class="fa fa-twitter"></i></a>
                      <a href='https://www.youtube.com/channel/UCDd_7d4_8ft8JPyIWhIw1eQ'><i class="fa fa-youtube"></i></a>
                    </div>
            </div>
           </nav>
        </header>

    )
}
export default Header