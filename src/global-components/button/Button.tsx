import React from 'react';
import { FC } from '../../types';
import { renderButton } from './buttonHelper';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
  children,
  buttonMode
}) => {
  return (
    renderButton(children, buttonMode)
  )
};