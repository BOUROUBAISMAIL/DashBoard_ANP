import "./aboutus.css";
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutUs= () => {
  useEffect(()=>{
    Aos.init({duration:2500});
   },[]);
  return (
    <div className="chart" data-aos="fade-up" >
      <legend style={{"color":"cornflowerblue"}}> L’Agence Nationale des Ports (ANP) est l’organe d’autorité et de
      régulation du nouveau système portuaire marocain mis en place par la Loi
      15-02.</legend>
      <br />
      <p id="text">
      &nbsp; Dans un contexte de globalisation croissante, marqué par
        l’intensification des échanges dans un <br /> environnement de plus en
        plus concurrentiel, le secteur des ports, au Maroc et dans le monde, est
        devenu <br />
        &nbsp; un levier important du développement et de la compétitivité d’un pays.
        Il doit répondre dans le même temps
        <br /> à de nouveaux enjeux, sociaux, sociétaux et environnementaux.
        <br />
        &nbsp; Au cours des dernières années, le secteur a fait l’objet de réformes
        institutionnelles et organisationnelles
        <br /> d’importance, avec pour objectif d’adapter le statut et
        l’organisation de l’autorité portuaire aux besoins
        <br /> globaux de la mondialisation et aux nouvelles contraintes nées de
        la responsabilité sociale et du
        <br /> développement équitable et durable.
        <br />
        &nbsp; Acteur fort du paysage portuaire marocain, l’Agence fédère l’ensemble de
        la communauté portuaire autour <br />
        d’objectifs communs ; elle œuvre à la création d’un environnement
        portuaire compétitif, favorisant un <br />
        développement équitable et durable, caractérisé par une concurrence
        saine, par l’efficacité, la transparence
        <br /> et la bonne gouvernance, et assurant des services sûrs et de
        qualité.
        <br />
      
      </p>

    </div>
  );
};
export default AboutUs;
