import * as yup from "yup";
export const LoginFormSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .max(12, "Email cannot have more than 12 characters"),
  password: yup
    .string()
    .required("Email is required")
    .max(12, "Email cannot have more than 12 characters")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "The password must be alphanumeric and contain a maximum of 12 characters, one capital letter and one special character"
    )
    .required(),
});

///regex Password debe ser alfanumérico, y contener máximo 12 caracteres, una mayúscula y un caracter especial
