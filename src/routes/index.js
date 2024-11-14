import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

const Loadable = (Component) => (props) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
  {
      path: "/landingPage",
      element: <LandingPage />,
    },
    
  ]);
}

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage/LandingPage")));