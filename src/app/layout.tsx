import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import Navbar from "../app/Components/Navbar";
import Footer from "../app/Components/Footer";
import Head from "next/head"; // Importing next/head

// Loading the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Blog", // Page title
  description: "Generated by create next app", // Page description
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Head>
          {/* Meta tags for character set and viewport */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Generated by create next app" />
          <title>Dynamic Blog</title> {/* Title */}
          
          {/* Google Fonts link for Clash Display */}
          <link
            href="https://fonts.googleapis.com/css2?family=Clash+Display&display=swap"
            rel="stylesheet"
          />
        </Head>
      </head>
      <body className={inter.className}>
        <Navbar />  {/* Navbar component */}
        {children}  {/* Main content of the page */}
        <Footer />  {/* Footer component */}
      </body>
    </html>
  );
}

