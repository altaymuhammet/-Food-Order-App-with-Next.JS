import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("Required")
    .min(3, "Must be 3 characters or more."),
  email: Yup.string().required("Email is required").email("Invalid email."),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character."
    ),
    confirmPassword: Yup.string().required("Confirmation is required.").oneOf([Yup.ref('password'), null], "Passwords must match.")
});
