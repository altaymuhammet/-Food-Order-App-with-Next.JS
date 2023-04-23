import Input from "@/Components/form/Input";
import Title from "@/Components/ui/Title";
import React from "react";
import { useFormik } from "formik";
import { adminSchema } from "@/schema/adminSchema";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    actions.resetForm();
  };
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        userName: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "Your username",
      value: values.userName,
      errorMessage: errors.userName,
      touched: touched.userName,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center py-20 gap-y-8">
        <Title addClass="text-[40px]">Admin Login</Title>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-y-5"
        >
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-y-5">
            {inputs.map((i) => (
              <Input
                key={i.id}
                {...i}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-y-3">
            <button className="btn-primary w-full md:w-1/2">Login</button>
            <Link
              href="/"
              className="w-full md:w-1/2 text-gray-400 underline transition-all hover:text-secondary text-start"
            >
              Home page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
