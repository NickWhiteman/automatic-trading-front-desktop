import { FC } from "../../types";

export interface ModalProps {
  header: string
  contentMode: string
};

export type ModalContent = {
  [key: string]: JSX.Element
}