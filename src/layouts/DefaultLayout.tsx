import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function DefaultLayout() {
  return (
    <div className="w-screen h-screen p-10 bg-gray-900 text-gray-100">
      <Header />
      <Outlet />
    </div>
  );
}
