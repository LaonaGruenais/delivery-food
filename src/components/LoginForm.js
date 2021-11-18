import { useState } from 'react'
import TextInput from './TextInput'

function LoginForm ({ submit, error }) {
  const [formData, setFormData] = useState({
    email: 'test2@test.fr',
    password: '123456'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // sert à bloquer le comportement par défault du html qui recharge normalement la page
    e.preventDefault()
    submit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type='email'
        label='Email'
        name='email'
        value={formData.email}
        onChange={handleChange}
      />

      <TextInput
        type='password'
        label='Password'
        name='password'
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <input type='submit' value='Se connecter' />
      {
            error &&
            (
              <div>
                <h4>{JSON.stringify(error)}</h4>
              </div>
            )
}
    </form>
  )
}

export default LoginForm
