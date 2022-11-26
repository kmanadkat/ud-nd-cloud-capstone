import { Navigate } from "react-router-dom"
import { getAuthStatus } from "../../utils"
import LoginImg from '../../assets/login.png'
import auth from "../../auth/auth"

const Login = () => {
  const isLoggedIn = getAuthStatus()

  if(isLoggedIn) {
    return <Navigate to="/" />
  }

  const handleLogin = () => {
    auth.login()
  }

  return (
    <>
      <header className="mb-20">
        <nav className='bg-gray-800 text-white p-6 md:px-12'>
          <h2 className="text-lg font-medium text-center">Event Planner App</h2>
        </nav>
      </header>
      <section className="flex flex-col items-center justify-center">
        <img src={LoginImg} className="w-[480px] mb-12" alt="Login" />
        <h1 className="text-lg font-semibold mb-4">It’s all about creating the habit of doing things that improve our efficiency</h1>
        <p className="mb-10">What are you waiting for? Get started 👇</p>
        <button className='px-8 py-3 text-white bg-blue-700 active:bg-blue-800 rounded transition-all' onClick={handleLogin}>
          Login
        </button>
      </section>
    </>
  )
}

export default Login