import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext"; 
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Liliana Constantino — Frontend Software Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, and TypeScript. Creating modern, responsive web experiences with a focus on performance and accessibility.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ies1adg.css" />
      </head>
      <body className="max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden">
        {/* ✅ Wrap everything in ViewProvider */}
        <ViewProvider>
          <Header />
          {children}
        </ViewProvider>

        {/* ✅ Toast notifications */}
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            style: { background: "#333", color: "#fff" },
            success: { style: { background: "#C1E899", color: "#1B1B1B" } },
            error: { style: { background: "#FFBBB4", color: "#1B1B1B" } },
          }} 
        />
      </body>
    </html>
  );
}
