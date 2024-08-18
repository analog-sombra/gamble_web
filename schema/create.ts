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
  maxLength,
  enum_,
} from "valibot";

enum Role {
  NONE,
  User,
  SYSTEM,
  ADMIN,
  WORKER,
  USER,
}

const CreateUserSchema = object({
  name: pipe(
    string(),
    minLength(1, "Please enter your name."),
    check(isContainSpace, "Name cannot contain space.")
  ),
  email: pipe(
    string(),
    email("Enter a valid email address"),
    check(isContainSpace, "Mobile number cannot contain space.")
  ),
  mobile: pipe(
    string(),
    minLength(1, "Please enter your mobile number."),
    maxLength(10, "Mobile number must be 10 digits."),
    check(isContainSpace, "Mobile number cannot contain space.")
  ),

  role: enum_(Role, "Role is required."),

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

type CreateUserForm = InferInput<typeof CreateUserSchema>;

export { CreateUserSchema, type CreateUserForm };
