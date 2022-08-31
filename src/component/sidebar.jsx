import { Link } from "react-router-dom";
import "./css/sidebar.css";
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Sidebar = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
   },[]);
  return (
    <div className="sidebar fixed"  >
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <nav>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <Link
                  to="/"
                  className="link"
                  style={{ "textDecoration": "none","color":"white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-blockquote-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm10.113-5.373a6.59 6.59 0 0 0-.445-.275l.21-.352c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.326-.182.569-.182h.281a1.686 1.686 0 0 0-.123-.498 1.379 1.379 0 0 0-.252-.37 1.94 1.94 0 0 0-.346-.298zm-2.168 0A6.59 6.59 0 0 0 10 6.352L10.21 6c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.327-.182.569-.182h.281a1.749 1.749 0 0 0-.117-.492 1.402 1.402 0 0 0-.258-.375 1.94 1.94 0 0 0-.346-.3z" />
                  </svg>{" "}
                  AboutUs
                </Link>
              </li>

              <li className="sidebarListItem">
                <Link
                  to="/charts"
                  className="link"
                  style={{ "textDecoration": "none","color":"white" }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bar-chart-line-fill"
                    viewBox="0 0 16 16"
                    style={{"marginRight":"20px"}}
                  >
                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
                  </svg>
                  Délai d’attente des navires
                </Link>
              </li>
              <li className="sidebarListItem">
                <Link
                  to="/table"
                  className="link"
                  style={{ "textDecoration": "none","color":"white" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
</svg>
                  Tableau des mouvements
                </Link>
              </li>
            </ul>
          </nav>
          <img id="img" src="https://www.anp.org.ma/assets/media/images/logo.svg" alt="anp logo u must have conex"/>

        </div>
      </div>
    </div>
  );
};
export default Sidebar;
