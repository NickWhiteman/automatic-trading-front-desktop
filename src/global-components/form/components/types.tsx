export interface TextInputType extends HTMLInputElement {
  id: string
  name: string
  placeholder: string
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
