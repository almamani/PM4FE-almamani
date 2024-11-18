import { ILogin } from "../interfaces/ILogin";

export const validateLogin = (
  input: ILogin,
  validateEmptyFields = false
): ILogin => {
  const errors: ILogin = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (validateEmptyFields) {
    if (!input.email) {
      errors.email = "Email is required";
    }
    if (!input.password) {
      errors.password = "Password is required";
    }
  }

  if (input.email && !emailRegex.test(input.email)) {
    errors.email = "Email with invalid format";
  }

  return errors;
};
