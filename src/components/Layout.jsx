import React from "react";
import ContactIcon from "./ContactIcon";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {/* Main content of each page */}
      <div className="pt-16">{children}</div>

      {/* Contact icon positioned at bottom right corner */}
      <div className="fixed bottom-4 right-4">
        <ContactIcon />
      </div>
    </div>
  );
};

export default Layout;
