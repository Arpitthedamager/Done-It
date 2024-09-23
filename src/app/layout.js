import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Done It",
  description: "A simple and efficient to-do list application to help you manage your tasks.",
  icon: "/favicon.ico",
  robots: "index, follow",
  openGraph: {
    title: "To-Do List App",
    description: "Manage your tasks efficiently.",
    image: "/images/og-image.png",
    url: "https://yourwebsite.com",
  },
  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className=" px-24">

        {children}
        </div>
      </body>
    </html>
  );
}
