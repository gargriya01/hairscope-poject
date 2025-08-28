import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const remainingTime = localStorage.getItem("remainingTime");
  const loggedIn = localStorage.getItem("isLoggedIn");

  if (!loggedIn || remainingTime <= 0) {
    return <Navigate to="/" replace />;
  }

  return children;
}
