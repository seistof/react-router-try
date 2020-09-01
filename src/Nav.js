import React from 'react';
import {Link} from 'react-router-dom';
import style from './nav.module.css';

function Nav() {

  const navStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <nav className={style.nav}>
      <img className={style.logo}
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_Play_Books_icon_%282016%29.svg/1200px-Google_Play_Books_icon_%282016%29.svg.png"
           alt=""/>
      <ul className={style.links}>
        <Link to={'/'} style={navStyle}>
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
