import logo from './logo.svg';
import './App.css';
import { add, sub, multiply, div } from './Calculator'; // These file used for common names & functions
import * as Calculator from './Calculator';
import { useState,useEffect } from 'react';






function App() {
  const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [items, setItems] = useState([]);

  useEffect(() => {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Accept', 'application/json');
  //  // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
  //   headers.append('Origin','http://localhost:3000');

    fetch("http://localhost:5000",{
      mode: 'cors'
  })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  

  return (
    <div>
       <div>import * as Calculator from './Calculator' Calculator.add(1,2):  {Calculator.add(1,2)}</div> {/* another option to invoke method */}
      <div>Addition (1+2):{add(1,2)}</div>
      <div>Subtraction (10-2):{sub(10,2)}</div>
      <div>Multiplication (5*2):{multiply(5,2)}</div>
      <div>Division (10/2):{div(10,2)}</div>
      <div>
        <img className="img-section" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPATOGyequUntH-p9XkLQHzDKFups2nfVYQ&usqp=CAU" />
        <img className="img-section" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiX6RUwPGV6R4O9o6dZmBdL4QE4z57hdGOFA&usqp=CAU"></img>
        <img className="img-section" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUB8pJhJhNyy7w_czV8ZPuti4CUXSEVj8LT1YYIoZyymqRhAI8PKNyB1NViQ8v-pR4Tv0&usqp=CAU"></img>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
