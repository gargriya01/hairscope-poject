// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Lab from "./pages/Lab";
// import ProtectedRoute from "./components/ProtectedRoute";
// import "./App.css";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route
//           path="/lab"
//           element={
//             <ProtectedRoute>
//               <Lab />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Lab from "./pages/Lab";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/lab"
          element={
            <ProtectedRoute>
              <Lab />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
