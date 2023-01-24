import dummyData from "./data";
import './App.css';
import { useEffect, useState } from "react";
import { CardList } from "./Components/CardList";

function App() {
  
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    setVideos(dummyData)
  }, [])
  console.log(videos);
  return (
    <>
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
    }
    </>
  );
}

export default App;
