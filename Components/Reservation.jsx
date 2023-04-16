import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from "formik";

const Reservation = () => {
 
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    console.log(values);
    actions.resetForm();
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit,
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      value: values.date,
    },
  ];

  return (
    <div className="container mx-auto h-auto py-12 ">
      <Title addClass="text-[40px] w-full text-start mb-6">Book A Table</Title>
      <div className="w-full h-full flex justify-between flex-wrap gap-10">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:flex-1 flex flex-col justify-center items-start gap-5"
        >
          <div className=" w-full flex flex-col justify-center items-center gap-3">
            {inputs.map((i) => (
              <Input key={i.id} {...i} onChange={handleChange} />
            ))}
          </div>
          <button type="submit" className="btn-primary">
            Book Now
          </button>
        </form>
        <div className="w-full lg:flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.0092754678!2d-74.14448681507336!3d40.69737092190259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1681645375963!5m2!1str!2str"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
