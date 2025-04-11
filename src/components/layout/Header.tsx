import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon, CameraIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFileUpload = () => {
    document.getElementById("camera-input")?.click();
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="text-neutral-600 hover:text-neutral-900"
              onClick={toggleMenu}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-display text-xl font-bold text-primary-700">
                Rescue Connect
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-700 font-medium"
                  : "text-neutral-600 hover:text-neutral-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-700 font-medium"
                  : "text-neutral-600 hover:text-neutral-900"
              }
            >
              Dashboard
            </NavLink>
            <Link to="/emergency" className="btn-emergency">
              Emergency
            </Link>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-700 font-medium"
                  : "text-neutral-600 hover:text-neutral-900"
              }
            >
              About
            </NavLink>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <button className="btn-secondary hidden sm:inline-flex">
              Register
            </button>
            <button
              onClick={handleFileUpload}
              className="btn-outline flex items-center space-x-1"
            >
              <span className="text-sm">Upload</span>
              <CameraIcon className="h-4 w-4" />
            </button>
            <input
              type="file"
              id="camera-input"
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-neutral-900 bg-opacity-50"
            onClick={toggleMenu}
          ></div>
          <div className="relative bg-white w-4/5 max-w-sm h-full shadow-xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-5 border-b border-neutral-200">
              <Link
                to="/"
                className="font-display text-xl font-bold text-primary-700"
              >
                Rescue Connect
              </Link>
              <button
                type="button"
                className="text-neutral-600 hover:text-neutral-900"
                onClick={toggleMenu}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-6">
              <Link
                to="/"
                className="block text-neutral-700 hover:text-primary-700"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="block text-neutral-700 hover:text-primary-700"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <Link
                to="/emergency"
                className="block text-emergency-600 font-medium hover:text-emergency-700"
                onClick={toggleMenu}
              >
                Emergency
              </Link>
              <Link
                to="/about"
                className="block text-neutral-700 hover:text-primary-700"
                onClick={toggleMenu}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
