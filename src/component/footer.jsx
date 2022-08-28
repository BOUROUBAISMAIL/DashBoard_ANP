 import './css/footer.css';
 
 
 const Footer=()=>{
    return( 
        <footer class="">
            
        <nav class="navbar navbar-expand-lg">
        <div class="col-md-5">
        <picture style={{"marginBottom":"15px"}}>
       <img src="https://www.anp.org.ma/assets/media/images/logo.svg" alt="logo anp" style={{"marginRight":"16px"}} />
     <caption>L’Agence Nationale des Ports (ANP) </caption>

     </picture>
      <div  style={{"fontSize":"13px","float":"left"}}>
              &copy; Copyright <strong><span>BOUROUBA</span></strong>. 2021-2022
      </div>        </div>
        <div className="col-md-5">
            

        </div>
        <div className="col-md-2">
        <div class="social">
                  <a href="https://www.linkedin.com/company/agence-nationale-des-ports-anp/"><i class="fa fa-linkedin" ></i></a>
                  <a href="https://web.facebook.com/ANPMaroc?_rdc=1&_rdr"><i class="fa fa-facebook"></i></a>
                  <a href="https://twitter.com/portnetsa"><i class="fa fa-twitter"></i></a>
                  <a href='https://www.youtube.com/channel/UCDd_7d4_8ft8JPyIWhIw1eQ'><i class="fa fa-youtube"></i></a>
                </div>
        </div>
       </nav>
    </footer>
 
        

    )
}
export default Footer;