import { ReactNode } from "react";

export interface TextInputType  {
  children?: ReactNode
  type: string
};

export type FormType = {
  children: any
  onSubmit: () => void
  className?: string
  props?: any
};

export type LabelType = {
  children: string
  htmlFor: string
}
