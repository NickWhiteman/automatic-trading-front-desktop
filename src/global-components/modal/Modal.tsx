import './style/style.css';
import React from 'react';
import { FC } from '../../types';
import {
  ModalBackground,
  ModalHeader,
  ModalContent
} from './components/modal-elements';
import { contentGenerator } from './modalHelper';
import { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({
  header,
  contentMode
}) => {
  return (
    <ModalBackground>
      <ModalHeader children={header} />
      <ModalContent>
        {contentGenerator(contentMode)}
      </ModalContent>
    </ModalBackground>
  )
};