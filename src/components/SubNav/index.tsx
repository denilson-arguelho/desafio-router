import { NavLink } from 'react-router-dom'
import './styles.css'

const SubNav = () => {
  return (
    <div className='ds-container'>
          <div className='ds-container-subnav-links'>
            <NavLink to={'computer'} className={({isActive}) => isActive ? " menu-item menu-active":"menu-item"}>Computadores</NavLink>
            <NavLink to={'eletronics'} className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}>Eletrônicos</NavLink>
            <NavLink to={'books'} className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}>Livros</NavLink>
          </div>
    </div>
  )
}

export default SubNav