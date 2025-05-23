// import { Routes, Route } from "react-router-dom";

// import routes from "@/routes";
// export function Auth() {
//   return (
//     <div className="relative min-h-screen w-full">
//       <Routes>
//         {routes.map(
//           ({ layout, pages }) =>
//             layout === "auth" &&
//             pages.map(({ path, element }) => (
//               <Route exact path={path} element={element} />
//             ))
//         )}
//       </Routes>
//     </div>
//   );
// }

// Auth.displayName = "/src/layout/Auth.jsx";

// export default Auth;

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "@/routes";

export function Auth() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // Redirect to dashboard if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="relative min-h-screen w-full">
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route key={path} exact path={path} element={element} />
            )),
        )}
      </Routes>
    </div>
  );
}
