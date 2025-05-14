import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

const Security = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const onSubmit = (data) => {
    console.log("Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-yellow-50 p-6 sm:p-8 rounded-xl space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Current Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">Current Password</label>
          <div className="relative">
            <input
              type={showPassword.current ? "text" : "password"}
              {...register("currentPassword", { required: true })}
              placeholder="Enter current password"
              className="w-full px-4 py-2 border rounded-md pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => togglePassword("current")}
            >
              {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.currentPassword && (
            <p className="text-red-500 text-sm">Current password is required</p>
          )}
        </div>

        {/* New Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">New Password</label>
          <div className="relative">
            <input
              type={showPassword.new ? "text" : "password"}
              {...register("newPassword", { required: true })}
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-md pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => togglePassword("new")}
            >
              {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm">New password is required</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 text-sm font-medium">Confirm Password</label>
          <div className="relative">
            <input
              type={showPassword.confirm ? "text" : "password"}
              {...register("confirmPassword", { required: true })}
              placeholder="Confirm new password"
              className="w-full px-4 py-2 border rounded-md pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => togglePassword("confirm")}
            >
              {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">Please confirm password</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 pt-4">
        <button
          type="button"
          className="px-6 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default Security;

