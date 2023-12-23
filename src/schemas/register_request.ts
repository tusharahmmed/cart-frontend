import * as yup from "yup";

export const registerRequestSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required").min(6),
});
