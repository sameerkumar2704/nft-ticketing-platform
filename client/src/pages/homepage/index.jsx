import { Header } from "@/customcompoents/header";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  

   
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
