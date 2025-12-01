import React from 'react'
import { useState } from 'react'

export default function FormulaireProfile({ajouterProfile}) {
    const [n,SetNom] = useState('');
    const [a,SetAge] = useState('');
    const [p,SetProfession] = useState('');
    const [i,Setimage] = useState('');
    const [v,Setville] = useState('');
    const  handleRefrech = (e) =>{
        e.preventDefault()
        const nouveauProfile={nom: n,age:a,Profession:p,Image:i,ville:v}
        

        ajouterProfile(nouveauProfile)
        SetNom("")
        SetAge("")
        SetProfession("")
        Setimage("")
        Setville("")
    }
  return (
    <div className='mx-auto w-50'> 
    <form action="" onSubmit={handleRefrech} className='form form-control'>
    <h2 className='text-center fs-4  text-warning' >Ajouter Un Card</h2>
        Nom:<input type="text" value={n} onChange={(e)=>SetNom(e.target.value)} className='form form-control w-100'/> <br />
        Age<input type="text"  value={a} onChange={(e)=>SetAge(e.target.value)} className='form form-control w-100'/> <br />
        Profession<input type="text"  value={p} onChange={(e)=>SetProfession(e.target.value)} className='form form-control w-100'/><br />
        Image<input type="text"  value={i} onChange={(e)=>Setimage(e.target.value)} className='form form-control w-100' placeholder='https://randomuser.me/api/portraits/men/1.jpg    change the Number if You Want Other Pictures & Sex of person like "women"  ' /><br />
        Ville<input type="text" value={v} onChange={(e)=>Setville(e.target.value)} className='form form-control w-100'/><br />
        <button type='submit' className=' btn bg-success text-light'>Add Card</button>
    </form>
    </div>
  )
}
