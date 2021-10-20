import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/restaurants'>Restaurants</Link>
            </li>
            <li>
              <Link to='/auth'>Auth</Link>
            </li>
          </ul>
        </nav>
      </div>
    /* <div>
    <nav>
        <ul className='menu'>
            <li>
                <Link to='/' className='text-menu'>Accueil</Link>
            </li>
            <li>
                <Link to='/restaurants' className='text-menu'>Restaurants</Link>
            </li>
        </ul>
    </nav>
</div> */
    )
  }
}

export default Header
