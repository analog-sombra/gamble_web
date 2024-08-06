"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldErrors, useForm } from "react-hook-form";
import { LoginForm, LoginSchema } from "../../schema/login";
import { valibotResolver } from "@hookform/resolvers/valibot";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginForm>({
    resolver: valibotResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log(data);
    const responsedata = await axios.get("http://localhost:5000");
    console.log(responsedata.data);
  };

  const onError = (error: FieldErrors<LoginForm>) => {
    console.log(error);
  };

  async function getdata() {
    const responsedata = await axios.get("http://localhost:5000");

    return [];
  }

  const { data } = useQuery({
    queryKey: ["initial-users"],
    queryFn: () => getdata(),
    initialData: null,
    staleTime: 5 * 1000,
  });

  return (
    <main className="h-screen bg-[linear-gradient(90deg,#C7C5F4,#776BCC)] flex items-center justify-center overflow-hidden">
      <section className="bg-gray-50 dark:bg-gray-900 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit, onError)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  ${
                      errors.email ? "border-red-500" : "hover:border-blue-500"
                    }`}
                    placeholder="Email address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message?.toString()}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    {...register("password")}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      errors.password
                        ? "border-red-500"
                        : "hover:border-blue-500"
                    }`}
                  />
                  {errors.password && (
                    <p className="text-xs text-red-500">
                      {errors.password.message?.toString()}
                    </p>
                  )}
                </div>
                {/* <div className="flex items-center justify-between">
                  <div className="flex-1"></div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                <button
                  // onClick={() => router.push("/dashboard/home")}
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-white dark:hover:bg-black hover:border-blue-600 dark:hover:border-white hover:text-blue-600 border-[1px] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
