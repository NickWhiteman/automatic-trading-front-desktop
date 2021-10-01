import { FC } from "../../../types";
import { LabelType } from "./types";

export const Label: FC<LabelType> = ({ children, required }) => {
  return (
    <label className='label-field'>{children}</label>
  )
};