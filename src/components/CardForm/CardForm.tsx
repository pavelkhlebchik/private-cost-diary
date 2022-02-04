import classNames from 'classnames/bind';

import React, { FC } from 'react';
import RadioButton from '../RadioButton/RadioButton';

import styles from './card.module.css';

const cx = classNames.bind(styles);

const handleRadioChange = () => {
  console.log('asd');
};

const CardForm: FC = () => (
  <form className={cx('wrapper')}>
    <select>
      <option>
        Language
      </option>
      <option>
        Currency
      </option>
    </select>
    <textarea cols={10} rows={10} />
    <textarea cols={10} rows={10} />
    <RadioButton
      onRadioChange={handleRadioChange}
    />
    <button type="submit">Sent</button>
  </form>
);

export default CardForm;
