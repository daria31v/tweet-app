import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";

export const SharedLayout = () => {
  return (
    <section>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};
