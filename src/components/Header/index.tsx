import { NavLink } from "react-router-dom";
import "./styles.css";
import iconHome from '../../assets/iconeHome.svg'
import { Link } from "react-router-dom";
const Header = () => {
  return (
   
      <header className="ds-header">
        <div className="ds-container ds-container-navbar">
          <nav className="ds-navbar">
            <NavLink to={'/home'} className={({isActive}) => isActive ? " menu-item menu-active":"menu-item"} >Início</NavLink>
            <NavLink to={'/product'} className={({isActive}) => isActive ? " menu-item menu-active":"menu-item"} >Produtos</NavLink>
            <NavLink to={'/about'} className={({isActive}) => isActive ? " menu-item menu-active":"menu-item"}>Sobre nós</NavLink>
          </nav>
          <Link to="/home"><img src={iconHome} alt="" /></Link>
        </div>
      </header>
  );
};

export default Header;
