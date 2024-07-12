import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-10 h-10" />
          <span className="ml-2 text-xl font-bold">Your Company</span>
        </div>
        <nav className="flex space-x-4">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Welcome to Your Company</h1>
          <p className="text-lg">We are glad to have you here. Explore our website to know more about us.</p>
        </div>
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2023 Your Company
      </footer>
    </div>
  );
};

export default Index;