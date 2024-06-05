import "./App.css";
import { useState } from "react";

function App() {
  const [inputGreetingMessage, setInputGreetingMessage] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputGreetingMessage}
          onChange={(event) => {
            setInputGreetingMessage(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setGreetingMessage(inputGreetingMessage)}>
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
