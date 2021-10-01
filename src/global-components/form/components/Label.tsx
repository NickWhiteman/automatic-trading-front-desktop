import { FC } from "../../../types";
import { LabelType } from "./types";

export const Label: FC<LabelType> = ({ children, props }) => {
  return (
    <label {...props} className='label-field'>{children}</label>
  )
};