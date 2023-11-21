import './App.css';
// import { useState } from 'react';
import PlusMinus from './PlusMinus';


function App() {
  // const murids = ["Muhammad", "Fahri", "Maulana"]
  // const [like, setLike] = useState(0)

  // function HandleClick() {
  //   setLike(like + 1)
  // }

  return (
    <div className="App">
      {/* {murids.map((murid) => (
        <h1 key={murid}>Nama Saya {murid}</h1>
      ))} */}
      {/* <button onClick={HandleClick}>Like {like}</button> */}

      <PlusMinus />
    </div>
  );
}

export default App;
