import dummyData from "./data";
import './App.css';
import {ThemeProvider} from "styled-components";
import { useEffect, useState } from "react";
import { CardList } from "./Components/CardList";
import { Toggler } from "./Components/Toggler";
import {useDarkMode} from "./Components/useDarkMode"
import {lightTheme, darkTheme} from "./Components/Themes"
import {GlobalStyles } from "./Components/Globalstyle"

function App() {
  
  const [videos, setVideos] = useState([])
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(()=>{
    setVideos(dummyData)
  }, [])
  if(!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles />
    <div className="App">
      <Toggler theme={theme} toggleTheme={themeToggler}/>
    {
      videos.map((list, index)=>{
        return (
          <section key={index}>
            <h2 className="section-title">{list.section}</h2>
            <CardList list={list}/>
            <hr />
          </section>
        )
      })
    }</div>
    </>
    </ThemeProvider>
  );
}

export default App;
