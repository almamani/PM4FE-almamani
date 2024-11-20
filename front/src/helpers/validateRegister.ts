import { IRegister } from "../interfaces/IRegister";

export const validateRegister = (
  input: IRegister,
  validateEmptyFields = false
) => {
  const errors: IRegister = {};
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (validateEmptyFields) {
    if (!input.name) {
      errors.name = "First and Last name are required";
    }
    if (!input.email) {
      errors.email = "Email is required";
    }
    if (!input.address) {
      errors.address = "Address is required";
    }

    if (!input.phone) {
      errors.phone = "Phone number is required";
    }

    if (!input.password) {
      errors.password = "Password is required";
    }
    if (!input.repeatedPassword) {
      errors.repeatedPassword = "Repeat the password";
    }
  }

  if (input.name && !nameRegex.test(input.name)) {
    errors.name = "The name must only contain letters";
  }

  if (input.email && !emailRegex.test(input.email)) {
    errors.email = "Email with invalid format";
  }

  if (input.phone && !phoneRegex.test(input.phone)) {
    errors.phone = "Should only contain numbers";
  }
  if (input.password && !passwordRegex.test(input.password)) {
    errors.password =
      "The Password must be alphanumeric and have at least 8 characters";
  }

  if (input.password && input.repeatedPassword) {
    if (input.password !== input.repeatedPassword) {
      errors.repeatedPassword = "Passwords do not match";
    }
  }

  return errors;
};
