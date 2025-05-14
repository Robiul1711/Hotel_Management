import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const WebCheckForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [previewImage, setPreviewImage] = useState(null);

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
      <h1 className="text-2xl font-semibold mb-6 font-neris">Web Check-in</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-yellow-50 p-6 sm:p-8 rounded-xl space-y-6"
      >
        <h2 className="text-lg font-semibold">
          Complete your checking details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Other fields remain unchanged */}
          <div>
            <label className="block mb-1 text-sm font-medium">First Name</label>
            <input
              {...register("firstName", { required: true })}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                First Name is required
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Last Name</label>
            <input
              {...register("lastName", { required: true })}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                Last Name is required
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Phone Number
            </label>
            <input
              {...register("phone", { required: true })}
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                Phone Number is required
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">City</label>
            <input
              {...register("city", { required: true })}
              placeholder="City"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.city && (
              <span className="text-red-500 text-sm">City is required</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Check-in</label>
            <input
              type="date"
              {...register("checkIn", { required: true })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.checkIn && (
              <span className="text-red-500 text-sm">Check-in is required</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Check-out</label>
            <input
              type="date"
              {...register("checkOut", { required: true })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.checkOut && (
              <span className="text-red-500 text-sm">Check-out is required</span>
            )}
          </div>
        </div>

        {/* Upload section */}
        <div>
          <label className="block mb-2 text-sm font-medium">Govt ID Prof</label>
          <div className="border-2 bg-white border-dashed border-orange-400 rounded-md p-6 flex justify-center items-center text-center text-gray-500 text-sm ">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="document-upload"
              onChange={handleFileChange}
            />
            {}
            <label
              htmlFor="document-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <span className="text-2xl">➕</span>
              <span>Upload Documents</span>
            </label>
          </div>

          {/* Image preview */}
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

        {/* Submit button */}
        <div className="text-center">
          <button onClick={()=> navigate('/dashboard/submit-form')}
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all"
          >
            Submit Check-In
          </button>
        </div>
      </form>
    </div>
  );
};

export default WebCheckForm;
