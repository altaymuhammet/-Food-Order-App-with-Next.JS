import Input from "@/Components/form/Input";
import Title from "@/Components/ui/Title";
import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "@/schema/registerSchema";
import Link from "next/link";

const Register = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    actions.resetForm();
  };
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Fullname",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Password Again",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center py-20 gap-y-8">
        <Title addClass="text-[40px]">Register</Title>
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
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-y-3">
            <button className="btn-primary w-full lg:w-2/5">Sign up</button>
          </div>
          <Link
              href="/login/Login"
              className="w-full md:w-1/2 text-gray-400 underline transition-all hover:text-secondary text-start"
            >
              Do you have an account?
            </Link>
        </form>

      </div>
    </div>
  );
};

export default Register;
