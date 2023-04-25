import React from "react";
import Title from "@/Components/ui/Title";
import Input from "@/Components/form/Input";
import { useFormik } from "formik";
import { passwordSchema } from "@/schema/passwordSchema";

const Account = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    actions.resetForm();
  };

  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: passwordSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "New password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm new password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <form className="min-w-[400px] w-full flex-1 md:p-8 flex flex-col gap-8 md:gap-5" onSubmit={handleSubmit}>
      <Title addClass="text-[40px] font-semibold">Password</Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {inputs.map((i) => (
          <Input    
            key={i.id}
            onBlur={handleBlur}
            onChange={handleChange}
            {...i}
          />
        ))}
      </div>
      <button type="submit" className="btn-primary lg:w-2/5 xl:w-1/4">
        Update
      </button>
    </form>
  );
};

export default Account;
