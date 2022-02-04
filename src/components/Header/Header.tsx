import classNames from 'classnames/bind';

import React, { FC, useState } from 'react';

import MenuBurger from '../MenuBurger/MenuBurger';
import Menu from '../Menu/Menu';

import styles from './header.module.css';

const cx = classNames.bind(styles);

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen((prevstate) => !prevstate);
  };

  return (
    <>
      <header className={cx('wrapper')}>
        <h1 className={cx('title')}>
          Bugdet Keeper
        </h1>
      </header>
      <MenuBurger menuIsOpen={isOpen} onMenuClick={handleMenuOpen} />
      <Menu menuIsOpen={isOpen} />
    </>
  );
};

export default Header;
