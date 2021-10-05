import { forwardRef } from "react";
import { FC } from "../../../types";
import { TextInputType } from "./types";

export const TextInput: FC<TextInputType> = (props) => {
  return (
    <input {...props} className="text-input"></input>
  )
};