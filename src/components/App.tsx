//import React from "react";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

function App() {
  return (
    <div className="h-full flex flex-col justify-between rounded-lg bg-gray-200 dark:bg-gray-700 p-8 min-h-screen">
      <button 
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-zinc-600 text-gray-800 dark:text-white"
      >
        Toggle Theme
      </button>
      <div className="flex flex-1 gap-8">
        <div className="flex-1">
          <MusicPlayer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
