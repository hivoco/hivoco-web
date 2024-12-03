import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 1000, // Customize animation duration
      once: false, // Whether animation should happen only once
      easing: "ease-out", // Easing function for animations
    });
  }, []);
  return <Component {...pageProps} />;
}
