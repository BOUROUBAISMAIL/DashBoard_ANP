/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Header from './component/Header';
import Imagetstarted from './component/Imagetstarted';
import Chart1 from './component/charts/aboutus';
import IInfo_tab from './component/Info_tab';
import Sidebar from './component/sidebar';
import  Footer  from './component/footer';
import Chart from './component/Chart';
import Tab1 from './component/tab1';


import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  
  return (
   <div >
 
      <Header />
      <Imagetstarted />
      <IInfo_tab/>
    
      <BrowserRouter>
      <div className='container1'>
      <div className='col-md-3'>
      <Sidebar />
      </div>
      <div className='col-md-9'>
      <Routes>
          <Route  exact path="/" element={<Chart1/>}>
           
          </Route>
          <Route path='/charts' element={<Chart/>}></Route>
          <Route path='/table' element={<Tab1/>}></Route>

          </Routes>
          </div>
          </div>
          </BrowserRouter>
          <Footer/>
        
   
      </div>
  );
}

export default App;
