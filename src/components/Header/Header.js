import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Header.scss';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore.js';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.defaultIcon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>
                {settings.header.navHome}
              </NavLink>
              <NavLink exact to='/info' activeClassName='active'>
                {settings.header.navInfo}
              </NavLink>
              <NavLink exact to='/faq' activeClassName='active'>
                {settings.header.navFaq}
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
