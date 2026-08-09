import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || []  // registeredUsers is a state variable that holds an array of registered users. It is initialized with the value from localStorage if it exists, otherwise it is initialized with an empty array. The JSON.parse() method is used to convert the string stored in localStorage back into an array. The || operator is used to provide a fallback value of an empty array if the value from localStorage is null or undefined.
  );

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();  // useForm is a custom hook provided by react-hook-form library that returns an object with the following properties: register, handleSubmit, reset, formState. formState is an object that contains the following properties: errors, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, touchedFields, dirtyFields, submitCount. errors is an object that contains the validation errors for each input field. It has the following properties: name, email, password. Each property is an object that contains the following properties: type, message.

  const registerForm = (data) => {
    let arr = [...registeredUsers, data]; // arr is a new array that contains all the registered users and the new user data. The spread operator is used to create a new array with the existing registered users and the new user data. This is done to avoid mutating the state directly. The state should always be treated as immutable in React.

    setRegisteredUsers(arr); // setRegisteredUsers is a function that updates the state of registeredUsers. It takes the new array arr as an argument and updates the state with it. This will trigger a re-render of the component and update the UI with the new state.
    localStorage.setItem("registeredUsers", JSON.stringify(arr)); // localStorage is a web API that allows you to store data in the browser's local storage. It is a key-value store that persists even after the browser is closed. The data is stored as a string, so we need to use JSON.stringify() to convert the array arr into a string before storing it in localStorage. When we retrieve the data from localStorage, we will use JSON.parse() to convert the string back into an array.
    toast.success("user registered..");
  };
  const loginForm = (data) => {
    let user = registeredUsers.find((val) => {  // find() is a method that returns the first element in the array that satisfies the provided testing function. It takes a callback function as an argument and returns the first element that returns true for the callback function. If no elements satisfy the testing function, it returns undefined. In this case, we are using find() to search for a user in the registeredUsers array that matches the email and password provided in the login form data. The callback function takes each element in the registeredUsers array (val) and checks if its email and password match the email and password provided in the login form data (data). If a match is found, it returns true and find() returns that user object. If no match is found, it returns undefined.
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {  // if user is undefined, it means that the email and password provided in the login form data do not match any registered user. In this case, we display an error message using toast.error() and return from the function to prevent further execution.
      toast.error("invalid something..");
      return;
    }

    dispatch(addUser(user));  // dispatch is a function provided by the useDispatch hook from react-redux library. It is used to dispatch an action to the Redux store. In this case, we are dispatching the addUser action with the user object as the payload. This will update the state of the auth slice in the Redux store with the logged-in user's information.
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("user logged in");
    reset();
  };

  return { // return is used to return an object that contains the properties and methods that we want to expose from this custom hook. This allows us to use these properties and methods in the components that use this hook. In this case, we are returning an object that contains the following properties: navigate, register, handleSubmit, reset, errors, registerForm, loginForm. These properties and methods can be used in the components that use this custom hook to handle user authentication and form validation.
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};