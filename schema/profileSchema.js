import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("Name is required")
    .min(3, "Must be 3 characters or more."),
  phoneNumber: Yup.number()
    .required("Phone number is required")
    .min(10, "Must be at least 10 characters.")
    .max(10, "Must be max 10 characters."),
  email: Yup.string().required("Email is required").email("Invalid email."),
  address: Yup.string()
    .required("Address is required"),
    job: Yup.string()
    .required("Job is required"),
    bio: Yup.string()
    .required("Bio is required"),
});
