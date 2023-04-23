import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("Required")
    .min(3, "Must be 3 characters or more."),
  phoneNumber: Yup.number()
    .required("Required")
    .min(10, "Must be at least 10 characters.")
    .max(10, "Must be max 10 characters."),
  email: Yup.string().required("Required").email("Invalid email."),
  persons: Yup.number()
    .required("Required")
    .min(1, "Must be at least 1 person."),
  date: Yup.string().required("Required"),
});
