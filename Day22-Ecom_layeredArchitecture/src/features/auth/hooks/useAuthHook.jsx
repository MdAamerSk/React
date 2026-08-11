import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { loginUserApi } from "../api/authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch()
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();  // useForm is a custom hook provided by react-hook-form library that returns an object with the following properties: register, handleSubmit, reset, formState. formState is an object that contains the following properties: errors, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, touchedFields, dirtyFields, submitCount. errors is an object that contains the validation errors for each input field. It has the following properties: name, email, password. Each property is an object that contains the following properties: type, message.

  const registerForm = (data) => {
    console.log("register", data);
  };
  const loginForm = async (data) => {
    try {
      //api call
      let response = await loginUserApi(data);
      dispatch(addUser(response));
      toast.success("user logged in")
    } catch (error) {
      console.log("from api error", error);
    }
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

