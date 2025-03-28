import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Java Selenium Runner",
  description: "Create Java Selenium Automation with low code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased min-h-screen`}
      >
        <div className="flex h-screen bg-white">
          <Sidebar />
          <main className="flex-1 m-4 p-6 bg-black text-white rounded-xl shadow-lg">
            {children}
            <Toaster />
          </main>
        </div>
      </body>
    </html>
  );
}
