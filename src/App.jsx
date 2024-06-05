import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState(``);
  const [inputUsername, setInputUsername] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">
        {username ? `${username}` : "Greeting Message"}
      </div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          name="username"
          value={inputUsername}
          onChange={(e) => {
            setInputUsername(e.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setUsername(inputUsername);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
