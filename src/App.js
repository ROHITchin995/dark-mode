import dummyData from "./data";
import './App.css';
import { useEffect, useState } from "react";
import { CardList } from "./Components/CardList";
import { Toggler } from "./Components/Toggler";
import {useDarkMode} from "./Components/useDarkMode"
import {lightTheme, darkTheme} from "./Components/Themes"


function App() {
  
  const [videos, setVideos] = useState([])
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(()=>{
    setVideos(dummyData)
  }, [])
  return (
    <>
    <div>
      <Toggler theme={theme} toggleTheme={themeToggler}/>
    {
      videos.map((list, index)=>{
        return (
          <section key={index}>
            <h2>{list.section}</h2>
            <CardList list={list}/>
            <hr />
          </section>
        )
      })
    }</div>
    </>
  );
}

export default App;
