import React from "react";
import Image from "./Image";

function App(props) {
  const infoCat = {source: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" , alternativeText: "Cute cat staring"}
  return (
    <div>

      <Image info={infoCat}/>

    
    </div>
  );
}

export default App;
