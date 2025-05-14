import React from 'react';
import { useForm } from "react-hook-form";

const OpenSupportTicket = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 font-neris">Support</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-yellow-50 p-6 sm:p-8 rounded-xl space-y-6"
      >
        <h2 className="text-lg font-semibold">Open a Support Ticket</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Subject</label>
            <input
              {...register("subject", { required: true })}
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.subject && <span className="text-red-500 text-sm">Subject is required</span>}
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Describe your problem</label>
          <textarea
            rows={5}
            {...register("message", { required: true })}
            placeholder="Describe the issue you're facing..."
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all"
          >
            Submit Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default OpenSupportTicket;
