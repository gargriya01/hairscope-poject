import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Lab() {
  const [remainingTime, setRemainingTime] = useState(
    parseInt(localStorage.getItem("remainingTime")) || 0
  );
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(timer);
        localStorage.removeItem("isLoggedIn");
        alert("Time is up! You have been logged out.");
        navigate("/");
      } else {
        setRemainingTime((prev) => {
          const updated = prev - 1;
          localStorage.setItem("remainingTime", updated);
          return updated;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime, navigate]);

  const handleExit = () => {
    navigate("/");
  };

  const mins = Math.floor(remainingTime / 60);
  const secs = remainingTime % 60;

  return (
    <div className="lab-container">
       <div class="lab-header">
      <img src="https://www.logodesign.net/assets/images/new-ui/lg-logo-gallery-blank.jpg" alt="Lab Logo" class="lab-logo"></img>
      <h1>Welcome to the Lab</h1>
      <p className="timer">
        Time Remaining: {mins}:{secs < 10 ? `0${secs}` : secs}
      </p>
      <button className="exit-btn" onClick={handleExit}>
        Exit Lab
      </button>
    </div>
    </div>
  );
}
