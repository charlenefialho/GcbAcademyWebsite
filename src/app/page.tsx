"use client";

import { Footer } from "./components/Footer/Footer";
import { Introduction } from "./components/Introduction/Introduction";
import { Journey } from "./components/Journey/Journey";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Reviews } from "./components/Reviews/Reviews";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <Introduction />
      <Journey />
      <AboutUs />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}
