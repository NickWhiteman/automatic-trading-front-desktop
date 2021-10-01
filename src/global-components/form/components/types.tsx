export interface TextInputType extends HTMLInputElement {
  props?: any
};

export type FormType = {
  children: any
  onSubmit: () => void
  className?: string
  props?: any
};

export type LabelType = {
  children: string
  props?: any
}
