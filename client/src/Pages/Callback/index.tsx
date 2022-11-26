import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import auth from "../../auth/auth"

const Callback = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication(navigate)
    }
  }, [location, navigate])

  return (
    <div>Loading...</div>
  )
}

export default Callback