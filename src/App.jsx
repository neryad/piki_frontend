import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainLayout from "./layouts/main-layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import RecommendsPage from "./pages/recommends-page";
function App() {
  // return (
  //   <>
  //     <body>
  //       <MainLayout />
  //     </body>
  //   </>
  // );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="recommends" element={<RecommendsPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
