import "./Style.css"
export default function CarteProfile({nom,age,Profession,Image,ville,voir, children}) {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src={Image} alt="" style={{width:"270px", height:"250px"}} className='card-img-top' />
        <div className='card-body'>
            <p className='card-title' >{nom}</p>
            <p className='card-text'>Age:{age}</p>
            <p className='card-text'>Profession:{Profession}</p>
            <p className='card-text'>Ville:{ville}</p>
            <button className='btn btn-primary' onClick={()=>voir()}>Voir plus</button>
            {children}
        </div>
    </div>
  )
}
