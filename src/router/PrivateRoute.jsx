import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const location = useLocation();

    // Check if the user is authenticated

    // If authenticated, render the children
    // && user?.payment_status === "succeeded"
    if (user) {
        return children;
    }

    // If not authenticated, redirect to the home route
    return <Navigate to="/auth/registration" state={{ from: location }} replace />;
};

export default PrivateRoute;