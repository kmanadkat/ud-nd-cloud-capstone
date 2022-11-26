import { Navigate } from "react-router-dom";
import Home from '../Home';
import { getAuthStatus } from "../../utils";
import auth from "../../auth/auth";

const EnsureLoggedIn = () => {
  const isLoggedin = getAuthStatus()
  const idToken = auth.getIdToken()
  if(!isLoggedin || !idToken) {
    localStorage.removeItem('isLoggedIn')
    return <Navigate to="/login" />
  }

  return <Home />
}

export default EnsureLoggedIn