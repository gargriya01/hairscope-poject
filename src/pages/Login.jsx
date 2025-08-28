// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AnimatedCircle from "../components/AnimatedCircle";

// const USER_PASSWORD = "1234";
// const TOTAL_TIME = 10 * 60; // 10 minutes in seconds

// export default function Login() {
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (password === USER_PASSWORD) {
//       setError("");
//       localStorage.setItem("isLoggedIn", true);
//       localStorage.setItem("remainingTime", TOTAL_TIME);
//       navigate("/lab");
//     } else {
//       setError("Incorrect Password!");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="left-panel">
//         <img
//           src="https://wallpaperbat.com/img/353628-js-react-hooks.png" alt="Course Image"
//           className="course-image"
//         />
//       </div>

//       <div className="right-panel">
//         <h1>Lab Access</h1>
//         <p className="description">
//           Enter your password to unlock your lab session.
//         </p>

//         <AnimatedCircle />
//         <input
//           type="password"
//           value={password}
//           placeholder="Enter Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin}>Enter Lab</button>
//         {error && <p className="error-msg">{error}</p>}
//       </div>
//     </div>
//   );
// }









import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedCircle from "../components/AnimatedCircle";

const USER_PASSWORD = "1234";
const TOTAL_TIME = 10 * 60; // 10 minutes in seconds

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [unlocking, setUnlocking] = useState(false); // For animation trigger
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === USER_PASSWORD) {
      setError("");
      setUnlocking(true);

      // Save session in localStorage
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("remainingTime", TOTAL_TIME);

      // Delay navigation until animation completes
      setTimeout(() => {
        navigate("/lab");
      }, 2500);
    } else {
      setError("Incorrect Password!");
    }
  };

  return (
    <div className="login-container">
      {/* Left Panel */}
      <div className="left-panel">
        <img
          src="https://wallpaperbat.com/img/353628-js-react-hooks.png"
          alt="Course"
          className="course-image"
        />
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <h1>Lab Access</h1>
        <p className="description">
          Enter your password to unlock your lab session.
        </p>

        {/* Animated Circle */}
        <div className={`circle-placeholder ${unlocking ? "circle-animate" : ""}`}>
          <AnimatedCircle />
        </div>

        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          disabled={unlocking}
        />
        <button onClick={handleLogin} disabled={unlocking}>
          Enter Lab
        </button>

        {error && <p className="error-msg">{error}</p>}

        {/* Sliding Doors */}
        <div className={`door left ${unlocking ? "slide-left" : ""}`}></div>
        <div className={`door right ${unlocking ? "slide-right" : ""}`}></div>
      </div>
    </div>
  );
}
