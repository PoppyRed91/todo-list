
// import { useEffect, useState } from "react";

// export default function App() {

  /* - We will use the useStatehook to hold our message. 
  We will then provide a conditional
  `{message && <p>{message}</p>}` it states if we have a message 
  we can display it in a paragraph tag on our web page. */

  // const [message, setMessage] = useState("")
  /* useEffect hook is used with an empty dependency array to run
     the async getTodos function once our component is mounted.
     Our endpoint will return a readable stream so we will use the
     .json method to get our data from backend 
     - We will get an error ...blocked by CORS policy, add a proxy value
     to our package.json file to fix it*/

  /* useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      setMessage(todos.mssg)
      console.log(todos);
    };

    getTodos();
  }, [])

  return (
    <main className="main_container">
      <h1>Todos</h1>
      {message && <p>{message}</p>}
    </main>
  );
}

*/
import LandingPage from "./LandingPage/LandingPage";
const App = () => {
  return ( <>
<LandingPage/>
  </> );
}
 
export default App;