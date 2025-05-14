import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // true = Sign Up, false = Sign In

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isSignUp) {
      console.log("Sign Up Data:", data);
    } else {
      console.log("Sign In Data:", data);
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
                Address
              </label>
              <input
                type="text"
                {...register("address", { required: "Address is required" })}
                placeholder="49640 Walker Knoll, New Ellaberg 17790"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.address && (
                <p className="text-red-600 text-sm">{errors.address.message}</p>
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
        <div className="flex justify-end">
          <Link className="text-[#E64D4F] cursor-pointer underline ">
            Forgot Password
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-primary-blue bg-primary duration-300 text-white py-2 rounded-md font-medium hover:bg-blue-900"
        >
          {isSignUp ? "Register" : "Sign In"}
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
