// EXERCICE
// Composer le formulaire d'inscription
// Lier le state local du composant sur les champs (avec le use state)
// Créer la méthode submit qui console.log les champs au moment de la soumission

import { useState } from 'react'
import TextInput from './TextInput'

function RegisterForm ({ submit, error }) {
  // Stockage des données du formulaire
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  })

  // Gestion de la saisie du formulaire
  const handleChange = (event) => {
    setFormData({
      // Conserver les autres saisies de champs
      ...formData,
      // Champ modifié ou ajouté
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name='firstName'
        label='Prénom'
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextInput
        name='lastName'
        label='Nom'
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextInput
        type='email'
        name='email'
        label='Email'
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextInput
        type='password'
        name='password'
        label='Mot de passe'
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextInput
        name='phone'
        label='Téléphone'
        value={formData.firstName}
        onChange={handleChange}
      />
      <input type='submit' value='Sinscrire' />
    </form>
  )
}

export default RegisterForm
