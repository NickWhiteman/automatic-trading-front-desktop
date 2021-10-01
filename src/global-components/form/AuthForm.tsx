import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../button/Button";
import { FieldWrapper, FormFooter } from "./components/Elements";
import { Form } from "./components/Form";
import { Label } from "./components/Label";
import { TextInput } from "./components/TextInput";
import { AuthFormField } from "./types";

export const AuthForm: FunctionComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormField>({
    defaultValues: {
      login: '',
      password: ''
    },
  });

  const onSubmit = handleSubmit(() => { });

  return (
    <Form className='form__authorization' onSubmit={onSubmit}>
      <FieldWrapper>
        <Label
          children='Login'
          htmlFor='login'/>
        <TextInput
          type = 'text'
          {...register('login')}/>
      </FieldWrapper>
      <FieldWrapper>
        <Label
          children='Password'
          htmlFor='password'/>
        <TextInput
          type = 'text'
          {...register('password')}/>
      </FieldWrapper>
      <FormFooter>
        <Button children='Enter' buttonMode='Success' />
      </FormFooter>
    </Form>
  )
}