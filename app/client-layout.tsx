"use client";

<<<<<<< HEAD
import type React from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
=======
import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
>>>>>>> 0ba0a437a9386b2c8649f9370e1f8ea46d4dbcbd

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <Toaster />
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 0ba0a437a9386b2c8649f9370e1f8ea46d4dbcbd
}
