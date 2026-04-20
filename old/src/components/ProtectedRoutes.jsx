import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
    const isAuthenticated = false; // Replace with your authentication logic

    if(!isAuthenticated) {
        return <Navigate to="login" />;
    }

    return children;
}

export default ProtectedRouter;