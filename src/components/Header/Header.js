import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Header.scss';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore.js';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.defaultIcon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>
                Home
              </NavLink>
              <NavLink exact to='/info' activeClassName='active'>
                Info
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
