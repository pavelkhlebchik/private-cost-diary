import classNames from 'classnames/bind';

import React, { FC } from 'react';

import styles from './menu-burger.module.css';

const cx = classNames.bind(styles);

interface MenuBurgerProps {
  /**
   * Контроллер отрытия меню
   */
  menuIsOpen: boolean;
  /**
   * Контроллер отрытия меню
   */
  onMenuClick: () => void;
}

const MenuBurger: FC<MenuBurgerProps> = (props) => {
  const { menuIsOpen, onMenuClick } = props;

  return (
    <div
      className={cx('wrapper', {
        'menu-opened': menuIsOpen,
      })}
      onClick={onMenuClick}
      aria-hidden="true"
    >
      <span className={cx('global', 'top', {
        'top-click': menuIsOpen,
      })}
      />
      <span className={cx('global', 'middle', {
        'middle-click': menuIsOpen,
      })}
      />
      <span className={cx('global', 'bottom', {
        'bottom-click': menuIsOpen,
      })}
      />
    </div>
  );
};
export default MenuBurger;
