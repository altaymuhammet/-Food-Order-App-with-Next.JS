import Input from "@/Components/form/Input";
import Title from "@/Components/ui/Title";
import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/loginSchema";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session)

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    actions.resetForm();
  };
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        email: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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
        <Title addClass="text-[40px]">Login</Title>
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
            <button className="btn-primary w-full md:w-1/2" type="submit">
              Login
            </button>
            <button
              className="btn-secondary w-full md:w-1/2 flex justify-center items-center gap-x-3"
              type="button"
              onClick={() => signIn("github")}
            >
              <FaGithub className="text-white" />
              <span className="text-white">Github</span>
            </button>
            <Link
              href="/login/Register"
              className="w-full md:w-1/2 text-gray-400 underline transition-all hover:text-secondary text-start"
            >
              Create new account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
