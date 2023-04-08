import React from 'react'
import {Link} from 'react-router-dom'
import { ThemeContext } from './utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, handleChangeTheme} = useContext(ThemeContext)

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/favs">Favs</Link></li>
        </ul>
      </nav>


      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme} style={{background: theme.background, color:theme.font}}>Change theme</button>

    </nav>
  )
}

export default Navbar