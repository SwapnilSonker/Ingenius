"use client";

import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})
const LandingNavbar = () => {
    const {isSignedIn} = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">

    </nav>
  )
}

export default LandingNavbar