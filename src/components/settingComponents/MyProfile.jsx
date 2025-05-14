import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Dummy Security component
const Security = () => (
  <div className="bg-yellow-50 p-6 sm:p-8 rounded-xl space-y-6">
    <h2 className="text-lg font-semibold">Security Settings</h2>
    <p>This is the security section. Add your security-related inputs here.</p>
  </div>
);

const MyProfile = () => {
  const navigate = useNavigate();
  const [showSecurity, setShowSecurity] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setValue("document", file); // Set file to React Hook Form manually
    }
  };

  return (
    <div>
      <div className="flex items-center gap-12 mb-6">
        <button
          onClick={() => setShowSecurity(false)}
          className={`text-lg font-semibold ${
            !showSecurity ? "text-orange-500 underline" : ""
          }`}
        >
          My Profile
        </button>
        <button
          onClick={() => setShowSecurity(true)}
          className={`text-lg font-semibold ${
            showSecurity ? "text-orange-500 underline" : ""
          }`}
        >
          Security
        </button>
      </div>

      {showSecurity ? (
        <Security />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-yellow-50 p-6 sm:p-8 rounded-xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">First Name</label>
              <input
                {...register("firstName", { required: true })}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">First Name is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Last Name</label>
              <input
                {...register("lastName", { required: true })}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">Last Name is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email Address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Phone Number</label>
              <input
                {...register("phone", { required: true })}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">Phone is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">City</label>
              <input
                {...register("city", { required: true })}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="City"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">City is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Gender</label>
              <select
                {...register("gender", { required: true })}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">Gender is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Age</label>
              <input
                type="number"
                {...register("age", { required: true })}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Age"
              />
              {errors.age && (
                <p className="text-red-500 text-sm">Age is required</p>
              )}
            </div>
 
       
          </div>

          {/* Upload Section */}
          <div>
            <label className="block mb-2 text-sm font-medium">Govt ID Prof</label>
            <div className="border-2 bg-white border-dashed border-orange-400 rounded-md p-6 flex justify-center items-center text-center text-gray-500 text-sm">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="document-upload"
                onChange={handleFileChange}
              />
              <label
                htmlFor="document-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <span className="text-2xl">➕</span>
                <span>Upload Document</span>
              </label>
            </div>

            {previewImage && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Preview:</p>
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-h-48 rounded-md border border-gray-300"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all"
            >
              Submit Check-In
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MyProfile;
