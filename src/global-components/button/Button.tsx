import { FC } from '../../types';
import { renderButton } from './buttonHelper';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  children,
  buttonMode
}) => {
  return (
    renderButton(children, buttonMode)
  )
};