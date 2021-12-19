import { FC } from "../../types";

export interface IModalProps {
  header: string
  contentMode: string
};

export type ModalContent = {
  [key: string]: JSX.Element
}