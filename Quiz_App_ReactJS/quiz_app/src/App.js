import './App.css';
import React, {useState} from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndSceen';

function App() {
  // Define a variable 'gameState' to show the current quiz state
  // Initial value is menu, which is the first screen when opening the app.
  const [gameState, setGameState] = useState("menu") 
  
  // There will be 3 states: menu, play and end screen.

  return (
    <div className="App"> 
      <h1>Quiz App</h1>

      {/* if gameState equals menu, then render MainMenu component */}
      {gameState === "menu" && <MainMenu/>}
      {/* if gameState equals quiz, then render Quiz component */}
      {gameState === "quiz" && <Quiz/>}
      {/* if gameState equals endScreen, then render EndScreen component */}
      {gameState === "endScreen" && <EndScreen/>}

    </div>
  );
}

export default App;
