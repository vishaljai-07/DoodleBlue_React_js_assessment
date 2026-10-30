import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {

  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    const load = async () => {
      setLoader(true); setError("")
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(res, "Response fetched")
        if (res.ok || res.status == 200) {
          const data = await res.json();
          console.log(data, "Data ")

          if (!ignore) setUser(data);

        } else {
          throw new Error(`Status ${res.status}`)
        }
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoader(false)
      }
    }

    load();

    return () => {
      ignore = true;
    };

  }, []);

  return <>
    {loader ? <>Page is loading</> : <>
      <header> User Listed Below </header>
      {user?.map((element, index) => <div key={index}>
        <p id='data-id'>ID : {element.id}</p>

        <center id='name'>Name : {element.name}</center>
        <center id='data'> Username : {element.username}</center>
        <center id='data'> Email : {element.email}</center>
        <center id='data'> Phone : {element.phone}</center>
        <center id='data'> Website : {element.website}</center>
        <center id='data'> Address : {`${element.address.street},${element.address.suite},${element.address.city},${element.address.zipcode}`}</center>
        <center id='data'> Geolocation : {`${element.address.geo.lat},${element.address.geo.lng}`}</center>
        <center id='data'> Company : {element.company.name}</center>
        <hr></hr>

      </div>)}
    </>}
  </>;

};

export default App;



// function App() {        setError(e.message)

//   const [a, setA] = useState("");
//   const [b, setB] = useState("");
//   const [result, setResult] = useState("");
//   const [resultColor, setResultColor] = useState("");

//   const add = () => {
//     setResult(Number(a) + Number(b));
//     setResultColor("add-result");
//   };

//   const sub = () => {
//     setResult(Number(a) - Number(b));
//     setResultColor("sub-result");
//   };

//   const multi = () => {
//     setResult(Number(a) * Number(b));
//     setResultColor("mul-result");
//   };

//   const div = () => {
//     if (Number(b) === 0) {
//       setResult("Cannot divide by zero");
//     } else {
//       setResult(Number(a) / Number(b));
//     }
//     setResultColor("div-result");
//   };

//   return (
//     <div className="container">
//       <input
//         type="number"
//         value={a}
//         onChange={(e) => setA(e.target.value)}
//       />

//       <input
//         type="number"
//         value={b}
//         onChange={(e) => setB(e.target.value)}
//       />
//       <div className="buttons">

//         <button onClick={add}>Addition</button>

//         <button onClick={sub}>Subtraction</button>

//         <button onClick={multi}>Multiplication</button>

//         <button onClick={div}>Division</button>

//       </div>

//       {result !== "" && (
//         <div className={`result-bar ${resultColor}`}>
//           <h2>Result: {result}</h2>
//         </div>
//       )}

//     </div>
//   );
// }

// export default App;





