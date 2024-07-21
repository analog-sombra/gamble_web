"use client"

import { NextUIProvider } from "@nextui-org/react";
import LoadingPageIndicator from "@/components/LoadingPageIndicator";
// import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TabProvider } from "@/state/tabState";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TabProvider>
          <NextUIProvider>
            <LoadingPageIndicator />
            {children}
          </NextUIProvider>
          <ToastContainer />
        </TabProvider>

      </body>
    </html>
  );
}
