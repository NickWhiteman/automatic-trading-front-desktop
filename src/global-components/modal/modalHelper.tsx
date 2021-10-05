import { AuthForm } from "../form/AuthForm";
import { ModalContent } from "./types";

const modalChildren: ModalContent = {
  'authorization': <AuthForm />,
}

export const contentGenerator = (contentMode: string) => {
  return modalChildren[contentMode];
};

