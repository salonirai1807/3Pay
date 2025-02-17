import './index.scss'
import Navbar from '../Navbar/'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout