import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900 text-white flex justify-between px-8 py-4">
      <h1 className="text-xl font-bold">JuliusDgenius</h1>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
