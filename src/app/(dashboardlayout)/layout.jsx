import React from "react";
import Navbar from "@/components/Navbar";
import NextThemeProvider from "@/providers/NextThemeProvider";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <NextThemeProvider>
        <Navbar />
        <main>
          <div className="max-w-7xl mx-auto grid grid-cols-12">
            <div className="col-span-4">
              <h2>sidebar</h2>
            </div>
            <div className="col-span-8">
              {children}
              <Toaster />
            </div>
          </div>
        </main>
      </NextThemeProvider>
    </>
  );
};

export default Layout;
