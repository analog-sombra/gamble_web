import { isContainSpace } from "@/lib/utils";
import {
  check,
  InferInput,
  minLength,
  object,
  string,
  pipe,
  regex,
  email,
} from "valibot";

const LoginSchema = object({
  email: pipe(
    string(),
    email("Enter a valid email address"),
    check(isContainSpace, "Mobile number cannot contain space.")
  ),

  password: pipe(
    string(),
    minLength(1, "Please enter your password."),
    minLength(8, "Your password must have 8 characters or more."),
    regex(/^(?=.*[0-9]).*$/, "Your password must have at least one number."),
    regex(
      /^(?=.*[!@#$%^&*]).*$/,
      "Your password must have at least one special character."
    ),
    regex(/^(?=.*[A-Z]).*$/, "Your password must have at least one uppercase."),
    regex(/^(?=.*[a-z]).*$/, "Your password must have at least one lowercase."),
    check(isContainSpace, "Password cannot contain space.")
  ),
});

type LoginForm = InferInput<typeof LoginSchema>;

export { LoginSchema, type LoginForm };
