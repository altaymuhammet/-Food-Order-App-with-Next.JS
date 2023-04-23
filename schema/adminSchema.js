import * as Yup from "yup";

export const adminSchema = Yup.object({
  userName: Yup.string().required("Username is required").min(5, "Must be at least 5 characters."),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters.")
});
