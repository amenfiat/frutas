import React from "react";
import { AppRouter } from "./router/AppRouter";
import { ChatButton } from "./components/ChatButton/ChatButton";
import './App.css';

function App() {
  return (
    <div>
      <AppRouter />
      <ChatButton />
    </div>
  );
}

export default App;
