import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { BeatLoader, ClipLoader } from "react-spinners";

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // true = Sign Up, false = Sign In
  const { user, setUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const signUpMutation = useMutation({
    mutationFn: async (data) => {
      setIsLoading(true);
      try {
        const response = await axiosPublic.post("/register", data);
        if (response) {
          console.log(response);
          toast.success("Registration successful");
          setIsSignUp(false);
          navigate("/auth/registration");
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const signInMutation = useMutation({
    mutationFn: async (data) => {
      setIsLoading(true);
      try {
        const response = await axiosPublic.post("/login", data);
        if (response) {
          console.log(response);
          toast.success(response?.data?.message);
          setUser({
            ...response?.data?.userData,
            token: response?.data?.token,
          });
          navigate(from, { replace: true });
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isSignUp) {
      if (data?.password !== data?.password_confirmation) {
        return toast.error("Password does not match");
      }

      signUpMutation.mutate(data);

      console.log("Signup data", data);
      // signUpMutation.mutate(data);
    } else {
      console.log("Sign In Data:", data);
      signInMutation.mutate(data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-5">
      <img src={logo} alt="Logo" className="w-32 mb-4 md:mb-8" />

      {/* Tabs */}
      <div className="flex space-x-8 text-gray-600 mb-4">
        <p
          onClick={() => setIsSignUp(false)}
          className={`cursor-pointer ${
            !isSignUp ? "text-primary font-bold" : ""
          }`}
        >
          Sign In
        </p>
        <p
          onClick={() => setIsSignUp(true)}
          className={`cursor-pointer ${
            isSignUp ? "text-primary font-bold" : ""
          }`}
        >
          Sign Up
        </p>
      </div>

      <h2 className="text-center text-lg font-bold mb-6">
        {isSignUp ? "Create an account" : ""}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg space-y-6"
      >
        {isSignUp && (
          <>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Jhon Smith"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                {...register("state" ,{
                  required:"State is required"
                })}
                placeholder="49640 Walker Knoll, New Ellaberg 17790"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.state && (
                <p className="text-red-600 text-sm">{errors.state.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                {...register("city" ,{
                  required:"city is required"
                })}
                placeholder="49640 Walker Knoll, New Ellaberg 17790"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.city && (
                <p className="text-red-600 text-sm">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                {...register("address",{
                  required:"street address is required"
                })}
                placeholder="49640 Walker Knoll, New Ellaberg 17790"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.address && (
                <p className="text-red-600 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                placeholder="Mobile Number"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Jhonsmith@gmail.com"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="•••••••••••"
              className="w-full border border-gray-300 rounded-md p-2 pr-10"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>

        {isSignUp && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password_confirmation", {
                  required: "Confirm Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                placeholder="•••••••••••"
                className="w-full border border-gray-300 rounded-md p-2 pr-10"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
            {errors.password_confirmation && (
              <p className="text-red-600 text-sm">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>
        )}

        <div className="flex justify-end">
          <Link
            to={"/auth/forget-password"}
            className="text-[#E64D4F] cursor-pointer underline "
          >
            Forgot Password
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-primary-blue bg-primary duration-300 text-white py-2 rounded-md font-medium hover:bg-blue-900 flex justify-center items-center"
        >
          {isLoading ? (
            <BeatLoader color="#fff" />
          ) : (
            <>{isSignUp ? "Register" : "Sign In"} </>
          )}
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4">
        {isSignUp ? (
          <>
            Already have an account?{" "}
            <span
              className="text-primary font-semibold cursor-pointer"
              onClick={() => setIsSignUp(false)}
            >
              Sign in here
            </span>
          </>
        ) : (
          <>
            Don’t have an account?{" "}
            <span
              className="text-primary-blue font-semibold cursor-pointer"
              onClick={() => setIsSignUp(true)}
            >
              Create one
            </span>
          </>
        )}
      </p>
    </div>
  );
}
