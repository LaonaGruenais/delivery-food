import { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import UserInfos from '../components/UserInfos'
import { login, register } from '../services/api'

// Composant sous forme de fonction
// Nouvelle méthode
function Auth () {
  // Initialisation des états locaux
  const [error, setError] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegister, setIsRegister] = useState(false)

  // Appelé à chaque montage dans le DOM (pour que lorsque l'on recharge la page on reste connecté)
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  // Soumission du formulaire
  const handleSubmit = async (infos) => {
    let data
    if (isRegister) {
      data = await register(infos)
    } else {
      (
        data = await login(infos)
      )
    }
    // Gestion des erreurs
    if (data.error) {
      setError(data.error)
    } else {
      setError(null)
    }
    const token = window.localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true)
    }
  }

  const logout = () => {
    setIsLoggedIn(false)
    window.localStorage.removeItem('token', null)
  }

  return (
    <div>
      {
            isLoggedIn
              ? <UserInfos logout={logout} />
              : (
                <div>
                  {
                        isRegister
                          ? <RegisterForm
                              submit={handleSubmit}
                              error={error}
                            />
                          : <LoginForm
                              submit={handleSubmit}
                              error={error}
                            />
                    }

                  <a
                    href='#'
                    onClick={() => setIsRegister(!isRegister)}
                  >
                    {isRegister ? "J'ai déjà un compte" : "Je n'ai pas de compte"}
                  </a>
                </div>
                )
        }
    </div>
  )
}

export default Auth
