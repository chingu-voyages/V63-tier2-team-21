import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const appName = "Event Planner";
  const repoUrl = "https://github.com/chingu-voyages/V63-tier2-team-21";
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Header appName={appName} />

      <main className="flex-1 flex items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-blue-600 text-center">
          Welcome to {appName}!
        </h1>
      </main>

      <Footer repoUrl={repoUrl} />
    </div>
  );
}

export default App;
