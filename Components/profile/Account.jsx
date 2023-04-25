import React from "react";
import Title from "@/Components/ui/Title";
import Input from "@/Components/form/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profileSchema";

const Account = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    actions.resetForm();
  };

  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        job: "",
        bio: "",
      },
      onSubmit,
      validationSchema: profileSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];
  return (
    <form className="min-w-[400px] w-full flex-1 md:p-8 flex flex-col gap-8 md:gap-5">
      <Title addClass="text-[40px] font-semibold">Account Settings</Title>
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
