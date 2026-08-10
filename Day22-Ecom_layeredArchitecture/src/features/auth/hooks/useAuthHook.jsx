import { useNavigate } from "react-router"
import {useForm} from "react-hook-form"

export const useAuth = () => {
    let navigate = useNavigate();

    let {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();  // useForm is a custom hook provided by react-hook-form library that returns an object with the following properties: register, handleSubmit, reset, formState. formState is an object that contains the following properties: errors, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, touchedFields, dirtyFields, submitCount. errors is an object that contains the validation errors for each input field. It has the following properties: name, email, password. Each property is an object that contains the following properties: type, message.
    
      const registerForm = (data) => {
       console.log("register",data);
      };
      const loginForm = (data) => {
        console.log("login",data)
      };

    return {
        navigate,
        register,
        handleSubmit,
        errors,
        registerForm,
        loginForm,
    };
}

