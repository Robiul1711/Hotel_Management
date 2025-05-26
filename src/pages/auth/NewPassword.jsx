import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { BeatLoader, ClipLoader } from "react-spinners";

const NewPassword = () => {
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if(data.password !== data.password_confirmation) return toast.error('Password does not match');
        setIsLoading(true)
        const payload = {
            reset_token: localStorage.getItem("resetToken"),
            password: data.password,
            password_confirmation: data.password_confirmation
        };
        try {
            const res = await axiosPublic.post('/reset-password', payload);
            if (res) {
                console.log(res);
                toast.success(res?.data?.message);
                localStorage.removeItem('resetEmail');
                localStorage.removeItem('resetToken');
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error);
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-5">
            <img src={logo} alt="Logo" className="w-32 mb-4 md:mb-8" />



            <h2 className="text-center text-lg font-bold mb-6">
                Set New Password
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg space-y-6"
            >
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
                        <p className="text-red-600 text-sm">{errors.password_confirmation.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary-blue bg-primary duration-300 text-white py-2 rounded-md font-medium hover:bg-blue-900 flex justify-center items-center"
                >
                    {
                        isLoading ? <BeatLoader color="#fff" /> :
                            <>Reset Password</>
                    }

                </button>
            </form>


        </div>
    );
};

export default NewPassword;