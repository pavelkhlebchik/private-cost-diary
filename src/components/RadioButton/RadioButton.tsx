/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames/bind';

import React, { FC } from 'react';

import styles from './radio.module.css';

const cx = classNames.bind(styles);

interface RadioButtonProps {
  onRadioChange: () => void;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
  const { onRadioChange } = props;
  return (
    <div className={cx('radio')}>
      <div className={cx('radio-wrapper')}>
        <input type="radio" id="id1" className={cx('currency-type-selected')} name="radio-group" onChange={onRadioChange} value="sum" />
        <label htmlFor="id1">
          Sun
        </label>
      </div>
      <div className="radio-wrapper">
        <input type="radio" id="id2" className={cx('currency-type')} name="radio-group" onChange={onRadioChange} value="sum" />
        <label htmlFor="id2">
          %
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
