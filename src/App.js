import './App.css';
import {useState} from "react";

function App() {
  const [title, setTitle] = useState('Wall-E');


  function handleChange(event) {
        setTitle(event.target.value);
  }

 let message = " "; 
  if (title.length < 5) {
    message = 'Tytuł jest za krótki'
  } else if (title.length > 15) {
    message = "Tytuł jest za długi"
  } else {
    message = 'Tytuł jest extra'
  }
  
  function handleClick(event) {
        alert(title);
  }



  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>My favourite movie for today is {title}</h2>
      <h3>My favourite movie for today is {title}</h3>
      {
      title.length > 0 && <div>{message}</div>
      }
      <input type="text" value={title} onChange={handleChange}/>
      <button onClick={handleClick}>Pokaż tytuł filmu</button>
    </div>
  );
}

export default App;
