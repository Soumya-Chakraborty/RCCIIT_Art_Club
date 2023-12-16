// Importing necessary modules and components
"use client"; // Assuming this is a pragma for Vercel's Next.js

// Importing components and styles
import React from "react"; // Import React for JSX usage
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MidSection from "./components/MidSection";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";

// Importing fonts from Google Fonts using the 'next/font' module
import { Inter } from "next/font/google";

// Creating an instance of the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the Next.js application
const metadata = {
  title: 'RCCIIT Art Club',
  description: 'RCCIIT Art Club',
  // Add other metadata properties as needed
};

// Default component function for the root layout
export default function RootLayout({ children }) {
  return (
    <React.Fragment>
      {/* HTML root element with lang attribute set to "en" */}
      <html lang="en">
        {/* Head element for metadata */}
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        {/* Body element with the Inter font class applied */}
        <body className={`font-sans ${inter.className}`}>
          {/* AuthContextProvider wrapping Navbar and child components */}
          <AuthContextProvider>
            <Navbar />
            {children}
            {/* MidSection component */}
            <MidSection />
            <div>
              {/* Include the Footer component */}
              <Footer />
            </div>
          </AuthContextProvider>
        </body>
      </html>
    </React.Fragment>
  );
}