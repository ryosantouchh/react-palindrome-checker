import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState();
  const [result, setResult] = useState();
  const [resultColor, setResultColor] = useState();

  const palindrome = (str, event) => {
    let nonWord = /[\W_]/g;
    let lowerCaseStr = str.toLowerCase().replace(nonWord, "");
    let reverseStr = lowerCaseStr.split("").reverse().join("");

    if (lowerCaseStr === reverseStr) {
      const isPalin = `It is palindrome`;
      setResultColor(true);
      setResult(isPalin);
    } else {
      const isNotPalin = `It is not palindrome`;
      setResultColor(false);
      setResult(isNotPalin);
    }

    return lowerCaseStr === reverseStr;
  };

  const handleCheckButton = (event) => {
    palindrome(event.target.value);
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);

    if (event.target.value === "") {
      setResult("");
    }
  };

  const handleClickReset = (event) => {
    setInput("");
    setResult("");
  };

  return (
    <div className="window-box">
      <div className="app-box">
        <div className="palindrome-box">
          <div className="palindrome-head-text">Palindrome Checker</div>
          <form>
            <input
              className="palindrome-input"
              type="text"
              placeholder="Enter text"
              value={input}
              onChange={handleInputChange}
            />
            <div>
              <button
                type="submit"
                className="btn-check"
                onClick={handleCheckButton}
                disabled={!input}
              >
                Check
              </button>
              <button className="btn-check" onClick={handleClickReset}>
                Reset
              </button>
            </div>
          </form>
          <div className="center-box">
            <div
              className="result-box"
              style={resultColor ? { color: "green" } : { color: "red" }}
            >
              {result}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
