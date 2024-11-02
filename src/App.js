//apicall getjoke simple there is css  as well
// import React, { useState } from 'react';
// import './App.css';


// function App() {
//   const [joke, setJoke] = useState("");

//   const getJoke = () => {
//     fetch("https://official-joke-api.appspot.com/random_joke")
//       .then((response) => response.json())
//       .then((data) => {
//       setJoke(data.setup + "..." + data.punchline);    //this was in console.log I guess setup and punchline 
//       });
//   };
//   return (
//     <div className='d'>
//       <button onClick={getJoke}>Joke?</button>
//       {joke}
//     </div>
//   );
// }
//export default App;



//with axios, no css, pedrotech, comment strictmode as well, installed axios
// import { useState } from 'react';
// import './App.css';
// import Axios from "axios";
// import { useEffect } from 'react';

// function App() {
//   const [catfact, setCatFact] = useState(""); 

//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   }
  
//   useEffect(() => {
//     fetchCatFact();
//   }, []);
  
//   return(
//     <div className="App">
//       <button onClick={fetchCatFact}> Generate Cat Fact </button>
//       <p> {catfact} </p>
//     </div>
//   )
// }

// export default App;



//pedrotech another example, no css, use strictmode
// import { useState } from 'react';
// import './App.css';
// import Axios from "axios";

// function App () {
//   const [name, setName] = useState("")
//   const [predictedAge, setPredictedAge] = useState(null);

//   const fetchData = () => {
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//       setPredictedAge(res.data);
//     })
//   };


//   return (
//     <div className="App">
//       <input 
//         placeholder="Ex. Pedro..."  
//         onChange={(event) => {
//           setName(event.target.value);
//         }} 
//       />
//       <button onClick={fetchData}>Predict Age</button> 
//       <h1>Name: {predictedAge?.name}</h1>  {/* ?is used to make it only access the name from object 'predcited Age' if it's not null */}
//       <h1>Predicted Age: {predictedAge?.age}</h1>
//       <h1>Count: {predictedAge?.count}</h1>
//     </div>
//   )
// }
// export default App;


//another pedrotech example, nocss, strictmode on
import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <p> {generatedExcuse} </p>
    </div>
  );
}

export default App;