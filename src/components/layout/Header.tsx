// src/components/layout/Header.tsx
import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "@/components/common/Logo";
import Button from "@/components/common/Button";
import { FiMenu, FiX, FiUploadCloud, FiPhoneCall } from "react-icons/fi"; // Example icons

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/about" },
  ];

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      // Add logic to handle the uploaded file here (e.g., state update, API call)
      // For now, it just logs the name. Reset input for re-upload.
      event.target.value = ""; // Allow selecting the same file again
    }
  };

  // Close sidebar if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !toggleButtonRef.current?.contains(event.target as Node) // Don't close if clicking the toggle button itself
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      isActive
        ? "bg-primary/10 text-primary"
        : "text-text-secondary hover:text-text-primary hover:bg-secondary-light/50"
    );

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "block px-3 py-2 rounded-md text-base font-medium transition-colors",
      isActive
        ? "bg-primary/10 text-primary"
        : "text-text-secondary hover:text-text-primary hover:bg-secondary-light/50"
    );

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Logo & Desktop Nav Toggle */}
          <div className="flex items-center">
            <button
              ref={toggleButtonRef}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden mr-2 inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isSidebarOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isSidebarOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
            <Logo className="flex-shrink-0" />
          </div>

          {/* Center Section: Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-4">
            {navItems.map(item => (
              <NavLink key={item.name} to={item.path} className={linkClass}>
                {item.name}
              </NavLink>
            ))}
            <Link to="/emergency" className="ml-4">
              {" "}
              <Button
                variant="danger"
                size="md"
                iconLeft={<FiPhoneCall />}
                type="button"
              >
                Emergency
              </Button>
            </Link>
          </nav>

          {/* Right Section: Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="success" size="md">
              Register
            </Button>{" "}
            {/* Add functionality later */}
            <Button
              variant="secondary"
              size="md"
              iconLeft={<FiUploadCloud />}
              onClick={handleFileUploadClick}
              className="hidden sm:inline-flex" // Hide on very small screens if needed
            >
              Upload Doc
            </Button>
            {/* Icon only button for smaller screens */}
            <Button
              variant="secondary"
              size="md"
              onClick={handleFileUploadClick}
              className="sm:hidden p-2" // Only show icon on small screens
            >
              <FiUploadCloud className="h-5 w-5" />
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt,.jpg,.png" // Add relevant file types
              hidden
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        ref={sidebarRef}
        className={clsx(
          "lg:hidden fixed inset-y-0 left-0 z-40 w-64 bg-background-paper shadow-xl transform transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isSidebarOpen,
            "-translate-x-full": !isSidebarOpen,
          }
        )}
        id="mobile-menu"
      >
        <div className="pt-5 pb-3 px-2 space-y-1">
          {/* Close button inside sidebar */}
          <div className="flex justify-between items-center mb-4 px-2">
            <Logo />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Close menu</span>
              <FiX className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={mobileLinkClass}
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/emergency"
            className={clsx(
              mobileLinkClass({ isActive: false }),
              "text-accent-red flex items-center font-semibold"
            )}
            onClick={() => setIsSidebarOpen(false)}
          >
            <FiPhoneCall className="mr-2 h-5 w-5" /> Emergency
          </NavLink>
        </div>
      </div>
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-30"
          aria-hidden="true"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
