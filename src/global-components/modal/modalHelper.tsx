import { Authorization } from "../../pages/authorization/Authorization";
import { ModalContent } from "./types";

const modalChildren: ModalContent = {
  'authorization': <Authorization />,
}

export const contentGenerator = (contentMode: string) => {
  return modalChildren[contentMode];
};

