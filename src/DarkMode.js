import React, { useState } from 'react';
import TodoList from "./Todo";
function DarkMode() {
  const [darkTheme, setDarkTheme] = useState(false)
  console.log("Dark Mode: Re-rendering...")
  return (
    <div className="App">
      <div className={darkTheme ? "dark-theme" : "light-theme"}>
        <nav>
          <div className="button-container">
            <button onClick={() => setDarkTheme((prevTheme) => !prevTheme)}>
              Dark/Light
            </button>
          </div>
        </nav>
        <div className="content">
          <TodoList/>
        </div>
      </div>
    </div>
  )
}

export default DarkMode;
// ref: https://www.crowdbotics.com/blog/how-to-add-dark-mode-functionality-with-react-hooks
