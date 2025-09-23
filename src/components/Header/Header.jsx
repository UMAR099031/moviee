import './Header.css'
import Logo from "../../assets/movie.svg"
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='header'>
      <div className="logo">
        <Link to={"/"}>
         <img width={127} src={Logo} alt="" />
        </Link>
       
      </div>
      <nav className="btns">
        <Link to={"/login"}>
          <button className='btn btn-green'>Login</button>
        </Link>
      <Link to={"/register"}>
        <button className='btn btn-trnsp'>Register</button>
      </Link>

     
      </nav>
    </div>
  )
}

export default Header