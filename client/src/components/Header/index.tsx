import auth from "../../auth/auth"

const Header = () => {
  return (
    <header>
      <nav className='bg-gray-800 text-white px-6 py-4 md:px-12 flex justify-between items-center'>
        <h2 className="text-lg font-medium">Event Planner App</h2>
        <button className='p-1 text-blue-400 border-b-2 border-transparent hover:border-b-2 hover:border-blue-400 transition-all' onClick={() => auth.logout()}>
          Logout
        </button>
      </nav>
      <div className="usage-info pt-6 md:px-12 md:pt-10">
        <h2 className="text-2xl font-bold mb-4">Events Planner</h2>
        <p>Click on calendar cell to create a new event</p>
      </div>
    </header>
  )
}

export default Header
