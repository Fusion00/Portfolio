import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface PublicLayoutProps {
  children: ReactNode; // Define the type for 'children'
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;
