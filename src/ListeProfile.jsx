import React from "react";
import CarteProfile from "./SousCarts/CarteProfile";

export default function ListeProfile({Profile,SupprimerCard}) {
  const voirPlus = ({ nom, age, Profession, ville }) => {
    alert(`tu as Selectionné : ${nom}
            Age : ${age}
            Profession : ${Profession}
            Ville : ${ville}
            `);
  };
  return (
    <div className="row">
      {Profile.map((info,index) => (
        <CarteProfile
          key={info.id}
          nom={info.nom}
          age={info.age}
          Profession={info.Profession}
          Image={info.Image}
          ville={info.ville}
          voir={() => voirPlus(info)}
        >
          <button className="btn bg-danger text-light  " onClick={()=>{SupprimerCard(index)}}>Supprimer-Card</button>
        </CarteProfile>
      ))}
      
    </div>
  );
}
