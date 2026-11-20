import { NavLink } from "react-router-dom";

export default function Header({ appName = "Event Planner" }) {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium sm:text-base ${
      isActive
        ? "font-bold text-blue-600 underline"
        : "text-gray-700 hover:text-gray-900"
    }`;

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <span className="text-lg font-bold text-gray-900 sm:text-xl">
          {appName}
        </span>
        <nav className="flex items-center gap-4 sm:gap-6">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/results" className={linkClass}>
            Results
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
