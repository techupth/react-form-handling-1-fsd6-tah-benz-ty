import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMassage] = useState("Greeting Message");
  const [messageInput, setMessageInput] = useState("");

  const handleInputMessage = (event) => {
    setMessageInput(event.target.value);
  };
  const handleUpdateClick = () => {
    setGreetingMassage(messageInput);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={handleInputMessage}
        />
      </div>

      <div className="buttons">
        <button onClick={handleUpdateClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
