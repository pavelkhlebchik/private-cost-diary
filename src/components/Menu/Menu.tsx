import classNames from 'classnames/bind';

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './menu.module.css';

const cx = classNames.bind(styles);

interface MenuProps {
  /**
   * Контроллер отрытия меню
   */
  menuIsOpen: boolean;
}

const Menu: FC<MenuProps> = (props) => {
  const { menuIsOpen } = props;

  const MENU = [
    {
      to: 'home',
      title: 'Home',
    },
    {
      to: 'new',
      title: 'New card',
    },
    {
      to: 'cards',
      title: 'View all cards',
    },
    {
      to: 'dashboard',
      title: 'Dashboard',
    },
  ];

  return (
    <div className={cx('wrapper', {
      'is-opened': menuIsOpen,
    })}
    >
      <ul className={cx('link-list')}>
        {
            MENU.map(({ title, to }) => (
              <li className={cx('link-item')} key={title}>
                <Link to={to}>
                  {title}
                </Link>
              </li>
            ))
          }
      </ul>
    </div>
  );
};

export default Menu;
