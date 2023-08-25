import { Link } from "react-router-dom"
import { MdOutlineShoppingBag } from 'react-icons/md'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div>
      <nav className="container__border navbar">
        <div className="left">
          <Link className="link" to='/shop'>Shop</Link>
          <Link className="link" to='/contact'>Contact</Link>
        </div>
        <div className="right">
        <Link className="link" to='/signin'>Sign In</Link>
        <Link className="link" to='/cart'>Cart</Link>
        </div>
      </nav>

      <nav className="container__border navbar navbar__smallscreen">
        <div className="left">
          <div className="link">
            <HiOutlineMenuAlt2 className="icon"/>
          </div>
        </div>
        <div className="right">
          <Link to='/cart' className="link">
            <MdOutlineShoppingBag className="icon"/>
          </Link>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
