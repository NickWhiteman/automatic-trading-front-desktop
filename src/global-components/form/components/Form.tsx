import { FC } from "../../../types";
import { FormType } from "./types";

export const Form: FC<FormType> = ({children, onSubmit, className, props}) => {
  return (
    <form {...props} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  )
};