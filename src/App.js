import React, { useState, useEffect } from "react";

// import Clock from "./Clock";

function App() {
  // const [showClock, setShowClock] = useState(true);

  // return (
  //   <div>
  //     {showClock ? <Clock /> : null}
  //     <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
  //   </div>
  // );
  const [peopleInSpace, setPeopleInSpace] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        setPeopleInSpace(data.people);
        setIsLoaded(true)
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE
if(isLoaded === false) return  <h3>Loading...</h3>;
  return <div>{peopleInSpace.map((person) => person.name)}</div>;
}

export default App;
