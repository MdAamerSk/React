import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
    },
  });

  let formSubmit = (data) => {
    console.log(data);
    setUsers((prev) => [...prev, data]);
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-3 text-white" >
      <h1 className="text-xl text-black font-bold">Create user</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col bg-black gap-3 p-4 rounded border-2 border-white "
      >
        <input
          {...register("name")}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Name"
        />
       
        <input
          {...register("email")}
          className="p-2 rounded outline-0 border border-white"
          type="email"
          placeholder="Email"
        />
      
        <input
          {...register("mobile")}
          className="p-2 rounded outline-0 border border-white"
          type="number"
          placeholder="Mobile"
        />
       
        <input
          {...register("image")}
          className="p-2 rounded outline-0 border border-white"
          type="url"
          placeholder="Image"
        />
       
        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;