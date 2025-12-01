import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ListeProfile from './ListeProfile'
import FormulaireProfile from './FormulaireProfile'
function App() {
  const [Profils, SetProfils] = useState([
    {
      id: "1",
      nom: "Mostafa Oulahyan",
      age: 20,
      Profession: "Dev",
      Image:
        "https://imgs.search.brave.com/qKhuuosLxwnesq9JfdqcqdXOSutAAFhI1bxhwsfhTPo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzIzLzYyLzkx/LzM2MF9GXzUyMzYy/OTEyM19ScEFNb2RC/SlhnQ1RQZmlsZllh/Q0liUGFhbEZJamJ2/di5qcGc",
      ville: "Rabat",
    },
    {
      id: "2",
      nom: "Hajjoji Yass",
      age: 10,
      Profession: "IA",
      Image:
        "https://imgs.search.brave.com/6J7KFmqmVJyUmfwVwDGU_dZodQhkSxXHXCJ4js6b_4c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjQ2NjYwNDEwNzAt/OWQ4NzY1NmMyNWJi/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1USjhmRzFo/YkdWOFpXNThNSHg4/TUh4OGZEQT0",
      ville: "Casa",
    },
    {
      id: "3",
      nom: "Zaid Chereif",
      age: 22,
      Profession: "INF",
      Image:
        "https://imgs.search.brave.com/HZ_JJQ4Wu5hQ5BubxFPLf51a4yqgxHYPFEfCU-vKI1Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bWFuLXRha2VzLXRp/bWUtdG8tcG9uZGVy/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
      ville: "Tanger",
    },
    {
      id: "4",
      nom: "Mohamed Kh",
      age: 19,
      Profession: "Designer",
      Image:
        "https://imgs.search.brave.com/8DuRCHkxTcMtSaMCQlHRsknNugb0tIlVVoMLGWu4M1g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/MDI5MzA0Ni9waG90/by9jb25maWRlbnQt/c2VuaW9yLW1hbi13/aXRoLWFybXMtY3Jv/c3NlZC1pbi1waG90/by1zdHVkaW8uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWl3/UWdQblhmM0VJbl9B/YU02YnJOM0VtaVNL/eVlxdjVYbEc1ZHBS/eGhDWUU9",
      ville: "agadir",
    }
  ])
  const AddProfile = (profil) => {
    const nouveauxPro=[...Profils,profil]
    SetProfils(nouveauxPro)
  }
  // delete Card
  const DeleteProfile=(index)=>{
    const Profilefilters=Profils.filter((_ ,i) => i!=index)
    SetProfils(Profilefilters)
  }

  return (
    <div className='container'>
      <FormulaireProfile ajouterProfile={AddProfile}></FormulaireProfile>
      <h2 className='text-center my-4'>Listes Des Profiles des Personnes</h2>
      <ListeProfile Profile={Profils} SupprimerCard={DeleteProfile}></ListeProfile>
    </div>
  )
}

export default App
