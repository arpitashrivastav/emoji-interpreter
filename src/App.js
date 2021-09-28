import "./styles.css";
import { useState } from "react";

// const numberDictionary = {
//   one: 1,
//   hundred: 100,
//   thousand: 1000
// };

const emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  const [value, setValue] = useState("");
  function handleClick(number) {
    setValue(emojiDictionary[number]);
  }
  function handleChange(event) {
    const inputValue = event.target.value;
    if (emojiDictionary[inputValue]) {
      setValue(emojiDictionary[inputValue]);
    } else {
      setValue("We dont have this emoji in our database");
    }
  }
  return (
    <div className="App">
      <h1>Emoji Interpretator</h1>
      <p>{value}</p>
      <input onChange={handleChange} />
      <ul>
        {Object.keys(emojiDictionary).map(function (number) {
          //function with no name => anonymous function
          return <li onClick={() => handleClick(number)}>{number}</li>;
          // anonymous arrow function
        })}
      </ul>
    </div>
  );
}
