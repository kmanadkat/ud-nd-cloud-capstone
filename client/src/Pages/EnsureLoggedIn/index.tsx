import { Navigate } from "react-router-dom";
import Home from '../Home';
import { getAuthStatus } from "../../utils";

const EnsureLoggedIn = () => {
  const isLoggedin = getAuthStatus()
  if(!isLoggedin) {
    return <Navigate to="/login" />
  }

  return <Home />
}

export default EnsureLoggedIn