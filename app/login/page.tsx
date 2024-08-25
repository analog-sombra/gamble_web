"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { setCookie } from "cookies-next";
import { LoginForm, LoginSchema } from "../../schema/login";
import { valibotResolver } from "@hookform/resolvers/valibot";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContent } from "react-toastify";
import { BASE_URL } from "@/lib/const";
import { useRouter } from "next/navigation";
import { ApiErrorType } from "@/models/response";

export default function Login() {
  // complete login
  // save id and role in cookie
  // use mw to check id
  // if login then access dashboard
  // if not then redirent to login
  // npm cookies-next

  // const query = useQuery({
  //   queryKey:"login_data",
  //   queryFn:()=>{}
  // })
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    resolver: valibotResolver(LoginSchema),
  });

  // async function getdata() {
  //   const responsedata = await axios.get("http://localhost:5000");

  //   return [];
  // }

  const { mutate } = useMutation({
    mutationKey: [],
    mutationFn: async (data: LoginForm) => {
      const responsedata = await axios.post(`${BASE_URL}/api/auth/login`, {
        email: data.email,
        password: data.password,
      });
      if (responsedata.data.data.role == "NONE") {
        return toast.error("Invaled user");
      }
      setCookie("session", responsedata.data.data.access_token);
      setCookie("x-r-t", responsedata.data.data.refresh_token);

      route.push("/dashboard/home");
      toast.success("Your login process is success");
    },
    onError: (error: ApiErrorType) => {
      toast.error(error.response.data.message);
    },
  });

  // const queryData = useQuery({
  //   queryKey: ["initial-users"],
  //   queryFn: () => getdata(),
  //   initialData: null,
  //   retry: 3,
  //   staleTime: 5 * 1000,
  // });

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
                onSubmit={handleSubmit((data) => mutate(data))}
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
                  Contact admin for your worker account
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
