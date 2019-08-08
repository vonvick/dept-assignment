import styled from 'styled-components';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';

import Button from '../Button';

const StyledForm = styled.div`
  height: 400px;
  font-family: 'MaisonNeue', sans-serif;
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .form-input {
      display: flex;
      flex-direction: column;
      input {
        font-size: 14px;
        border: none;
        height: 50px;
        border-bottom: 1px solid #E5E5E5;
        &:focus {
          border: none;
          border-bottom: 2px solid #313232;
          outline: none;
        }
      }
      .error-message {
        color: #991C24;
        font-size: 12px;
        font-family: 'MaisonNeue', sans-serif;
      }
    }
  }
  .button-container {
    width: 100%;
    @media only screen and (min-width: 900px) {
      width: 20%;
    }
  }
`;

interface FormProps {
  name?: string;
  email?: string;
  message?: string;
  handleSubmitForm?: () => void;
};

interface FormData {
  name?: string;
  email?: string;
  message?: string;
  handleSubmitForm?: () => void;
}

interface InjectedProps extends InjectedFormProps<FormProps> { }

interface ComponentProps extends InjectedProps, FormProps {};

const isEmail = (value:string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const required = (value:string|number) => (value || typeof value === 'number' ? undefined : 'this field is required');
const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength30 = maxLength(30)
export const minLength = (min:number) => (value: string) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}: {
  input:any,
  label:string,
  type:string,
  meta: {
    touched: boolean,
    error: string
  }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="form-input">
      <input {...input} placeholder={label} type={type} className="form-control"/>
      { touched && ((error && <span className="error-message">{error}</span>)) }
    </div>
  </div>
)

let ContactForm = (props: ComponentProps) => {
  const { handleSubmitForm, name, email, message } = props;
  return (
    <StyledForm>
      <form onSubmit={handleSubmitForm}>
        <Field
          name="name"
          component={renderField}
          label="Name"
          validate={[required, maxLength30, minLength2]}
          type="text" />

        <Field
          name="email"
          component={renderField}
          label="Email"
          validate={[required, isEmail]}
          type="email" />

        <Field
          name="message"
          component={renderField}
          label="Message"
          validate={[required, minLength2]}
          type="textarea" />

        <div className="button-container">
          <Button background="#0a2ced" color="#FFFFFF" type="submit">SEND</Button>
        </div>
      </form>
    </StyledForm>
  );
};
const formName = 'contact';

interface UnconnectedProps extends InjectedProps { }

const ContactReduxForm = reduxForm<FormData>({
  form: formName
})(ContactForm);

export default ContactReduxForm;
