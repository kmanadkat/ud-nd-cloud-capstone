import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='text-center p-24'>
      <h2 className='text-xl my-8'>404 You are not suppose to be here 🧐</h2>
      <Link className='bg-blue-600 px-6 py-3 rounded text-white' to="/">Go Back</Link>
    </div>
  )
}

export default Notfound