import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { setUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Form instances separated
  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: signUpErrors },
    reset: resetSignUp,
  } = useForm();

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: signInErrors },
    reset: resetSignIn,
  } = useForm();

  const signUpMutation = useMutation({
    mutationFn: async (data) => {
      setIsLoading(true);
      try {
        const response = await axiosPublic.post("/register", data);
        toast.success("Registration successful");
        setIsSignUp(false);
        resetSignUp();
        navigate("/auth/registration");
      } catch (error) {
        toast.error(error?.response?.data?.error || "Registration failed");
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
        toast.success(response?.data?.message);
        setUser({
          ...response?.data?.userData,
          token: response?.data?.token,
        });
        resetSignIn();
        navigate(from, { replace: true });
      } catch (error) {
        toast.error(error?.response?.data?.message || "Login failed");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const onSubmitSignUp = (data) => {
    if (data.password !== data.password_confirmation) {
      return toast.error("Password does not match");
    }
    signUpMutation.mutate(data);
  };

  const onSubmitSignIn = (data) => {
    signInMutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-5">
      <img src={logo} alt="Logo" className="w-32 mb-4 md:mb-8" />

      {/* Tabs */}
      <div className="flex space-x-8 text-gray-600 mb-4">
        <p
          onClick={() => setIsSignUp(false)}
          className={`cursor-pointer ${!isSignUp ? "text-primary font-bold" : ""}`}
        >
          Sign In
        </p>
        <p
          onClick={() => setIsSignUp(true)}
          className={`cursor-pointer ${isSignUp ? "text-primary font-bold" : ""}`}
        >
          Sign Up
        </p>
      </div>

      {/* Sign Up Form */}
      {isSignUp && (
        <form
          onSubmit={handleSubmitSignUp(onSubmitSignUp)}
          className="w-full max-w-lg space-y-6"
        >
          <h2 className="text-center text-lg font-bold mb-6">Create an account</h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              {...registerSignUp("name", { required: "Name is required" })}
              placeholder="John Smith"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {signUpErrors.name && (
              <p className="text-red-600 text-sm">{signUpErrors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...registerSignUp("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="johnsmith@gmail.com"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {signUpErrors.email && (
              <p className="text-red-600 text-sm">{signUpErrors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              {...registerSignUp("phone", { required: "Phone number is required" })}
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {signUpErrors.phone && (
              <p className="text-red-600 text-sm">{signUpErrors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              {...registerSignUp("city", { required: "City is required" })}
              placeholder="City name"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {signUpErrors.city && (
              <p className="text-red-600 text-sm">{signUpErrors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              {...registerSignUp("state", { required: "State is required" })}
              placeholder="State name"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {signUpErrors.state && (
              <p className="text-red-600 text-sm">{signUpErrors.state.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...registerSignUp("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
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
            {signUpErrors.password && (
              <p className="text-red-600 text-sm">{signUpErrors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...registerSignUp("password_confirmation", {
                required: "Confirm Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              placeholder="•••••••••••"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {signUpErrors.password_confirmation && (
              <p className="text-red-600 text-sm">
                {signUpErrors.password_confirmation.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary-blue bg-primary duration-300 text-white py-2 rounded-md font-medium hover:bg-blue-900 flex justify-center items-center"
          >
            {isLoading ? <BeatLoader color="#fff" /> : "Register"}
          </button>
        </form>
      )}

      {/* Sign In Form */}
      {!isSignUp && (
        <form
          onSubmit={handleSubmitSignIn(onSubmitSignIn)}
          className="w-full max-w-lg space-y-6"
        >
          <h2 className="text-center text-lg font-bold mb-6">Sign In</h2>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...registerSignIn("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="johnsmith@gmail.com"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {signInErrors.email && (
              <p className="text-red-600 text-sm">{signInErrors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...registerSignIn("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
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
            {signInErrors.password && (
              <p className="text-red-600 text-sm">{signInErrors.password.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <Link
              to={"/auth/forget-password"}
              className="text-[#E64D4F] cursor-pointer underline"
            >
              Forgot Password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-blue bg-primary duration-300 text-white py-2 rounded-md font-medium hover:bg-blue-900 flex justify-center items-center"
          >
            {isLoading ? <BeatLoader color="#fff" /> : "Sign In"}
          </button>
        </form>
      )}

      {/* Footer Toggle */}
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
