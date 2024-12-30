


import React from "react";
import IntroductionAndContact from "./components/IntroductionAndContact";
import SkillsAndResume from "./components/SkillsAndResume";

import ChatBot from "./components/ChatBot";


function App() {
  return (
    <div
      className="min-h-screen flex text-gray-800"
      
    >
      {/* Main Content Area */}
      <main className="flex-grow">
        <IntroductionAndContact />
        <SkillsAndResume />
      </main>

    
      {/* Chatbot */}
      <ChatBot />
    </div>
  );
}

export default App;