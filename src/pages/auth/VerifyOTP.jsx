import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "@/assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import OTPInput from "react-otp-input";

const VerifyOTP = () => {
    const axiosPublic = useAxiosPublic();
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        handleSubmit,
        formState: { errors },
    } = useForm();

    // API call to verify OTP
    const verifyOtp = async (payload) => {
        return await axiosPublic.post("/auth/verify-otp", payload);
    };

    const onSubmit = async () => {
        if (otp.length !== 6) {
            setOtpError("OTP must be 6 digits.");
            return;
        }

        setOtpError("");
        const email = localStorage.getItem("resetEmail");
        const payload = { email, otp };

        try {
            setIsLoading(true);
            const res = await axiosPublic.post('/verify-otp', payload);

            if (res) {
                const resetToken = res?.data?.reset_token;
                localStorage.setItem("resetToken", resetToken);
                toast.success(res?.data?.message || "OTP Verified!");
                navigate("/auth/new-password");
            }
        } catch (err) {
            const message =
                err?.response?.data?.error ||
                "Something went wrong. Please try again.";
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-5">
            <img src={logo} alt="Logo" className="w-32 mb-4 md:mb-8" />

            <h2 className="text-center text-lg font-bold mb-6">Verify OTP</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg space-y-6"
            >
                <div className="  w-fit mx-auto">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        separator={<span>-</span>}
                        isInputSecure={false}
                        containerStyle={{ columnGap: "20px" }}
                        inputStyle={{
                            border: "1px solid #ff4800",
                            borderRadius: "4px",
                            padding: "0.5rem",
                            width: "3rem",
                            height: "3rem",
                            textAlign: "center",
                        }}
                        renderInput={(props) => (
                            <input {...props} className="otp-input-2" />
                        )}
                    />
                    {otpError && (
                        <p className="text-red-600 text-sm mt-1">{otpError}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary duration-300 text-white py-2 rounded-md font-medium hover:bg-blue-900 flex justify-center items-center"
                >
                    {isLoading ? (
                        <BeatLoader color="#fff" />
                    ) : (
                        <>Reset Password</>
                    )}
                </button>
            </form>
        </div>
    );
};

export default VerifyOTP;
