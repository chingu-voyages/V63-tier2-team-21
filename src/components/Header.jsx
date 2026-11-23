export default function Header({ appName = "Event Planner" }) {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <span className="text-lg font-bold text-gray-900 sm:text-xl">
          {appName}
        </span>
      </div>
    </header>
  );
}
