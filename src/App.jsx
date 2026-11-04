import { useEffect, useState } from 'react'
import ListeProfile from './ListeProfile'
import FormulaireProfile from './FormulaireProfile'

function App() {
  const [Profils, SetProfils] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProfils = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=8')
        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`)
        }

        const data = await response.json()
        SetProfils(data.results.map((user) => ({
          id: user.login.uuid,
          nom: `${user.name.first} ${user.name.last}`,
          age: user.dob.age,
          Profession: 'Non spécifiée',
          Image: user.picture.large,
          ville: user.location.city,
        })))
      } catch (requestError) {
        setError(`Impossible de charger les profils : ${requestError.message}`)
      } finally {
        setLoading(false)
      }
    }

    fetchProfils()
  }, [])

  const AddProfile = (profil) => {
    SetProfils((profiles) => [...profiles, profil])
  }

  const DeleteProfile = (index) => {
    SetProfils((profiles) => profiles.filter((_profile, i) => i !== index))
  }

  return (
    <div className='container'>
      <FormulaireProfile ajouterProfile={AddProfile}></FormulaireProfile>
      <h2 className='text-center my-4'>Listes Des Profiles des Personnes</h2>
      {loading && <p className='text-center'>Chargement des profils...</p>}
      {error && <p className='text-center text-danger'>{error}</p>}
      {!loading && !error && (
        <ListeProfile Profile={Profils} SupprimerCard={DeleteProfile}></ListeProfile>
      )}
    </div>
  )
}

export default App
