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

const ForgetPassword = () => {

    // true = Sign Up, false = Sign In

    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true)
        try {
            const res = await axiosPublic.post('/forgot-password', data);
            if(res){
                console.log(res);
                toast.success(`Your OTP: ${res?.data?.otp}`);
                localStorage.setItem('resetEmail', res?.data?.email);
                // toast.success('Check your email for OTP');
                navigate('/auth/verify-otp');       
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
                Forget password
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg space-y-6"
            >


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

export default ForgetPassword;