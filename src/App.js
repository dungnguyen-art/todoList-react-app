import "./App.css";
import DarkMode from "./DarkMode";
import { useState, createContext } from "react";

export const ThemeContext = createContext()// object chua provide, consumer


function App() {
  const [theme, setTheme] = useState("dark");
  const handleTheme = ()=>{
    setTheme(theme === 'dark' ? 'light': 'dark');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={handleTheme}>toggle theme</button>
      <DarkMode/>
    </ThemeContext.Provider>
  );
}
export default App;
